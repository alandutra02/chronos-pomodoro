import type { TaskModel } from './TaskModel';

export interface TaskStateModel {
  tasks: TaskModel[]; // Historico, MainForm
  secondsRemaining: number;
  formattedSecondsRemaining: string; // Titulo, CountDown
  activeTask: TaskModel | null; // CountDown, histórico, MainForm, Botao
  currentCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number // MainForm
  };
};

