import type { TaskStartModel } from "./TaskStartModel";

interface TaskModel {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null;
    interruptDate: number | null;
    type: keyof TaskStartModel['config']
}