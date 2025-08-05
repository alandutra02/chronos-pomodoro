import { useEffect, useState } from "react"
import { TaskContext } from "./TaskContext"
import { initialTaskState } from "./initialTaskState"

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState(initialTaskState)
    
    useEffect(()=>{
        console.log(state)
    }, ) // toda vez que state mudar a função anônima é executada

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    )
}