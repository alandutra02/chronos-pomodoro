import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('state')
    
    if (storageState === null) return initialTaskState

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
    }

  });
  const playBeepRef = useRef<() => void | null>(null)
  //const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null) // outra forma de pegar o tipo por returnType da função

  const worker = TimerWorkerManager.getInstance()

  worker.onmessage(e => {
    const countDownSeconds = e.data

    if(countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current()
        playBeepRef.current = null // quando o áudio terminar de tocar, para zerar o audio novamente coloca-se o null
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds},
      })
    }
  })

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state)) // insere o estado no localstorage do navegador

   if(!state.activeTask) {
    worker.terminate()
   }
   // coloca o cronômetro no título do browser
   document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`

   worker.postMessage(state)
  }, [worker, state]); // worker é uma variável e não um estado. Neste campo se monitoram a mudança além dos estados, também as variáveis. cuidado quando a variável mudar, pois pode causar loop infinito. Neste caso, worker não muda.

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep() //carregar o áudio
    } else {
      playBeepRef.current = null //zerar o áudio
    }
  }, [state.activeTask])
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}