import { List, TaskItemProps } from "@/src/types/list";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import { Checkbox } from "../ui/checkbox";
import { useMemo } from "react";
import { Delete01Icon } from "hugeicons-react";

/**
 * TaskItem component, it displays a single task item.
 */
export const TaskItem = ({ list, setList, item }: TaskItemProps) => {

    // Function that changes the status of a task from active to inactive and vice versa
    const triggerStatus = (id: number) => {
        const updatedList: List[] = list.map((task) => {
            if (task.id === id) {
                return { ...task, status: task.status === "pending" ? "completed" : "pending" };
            }
            return task;
        });

        setList(updatedList);
    }

    // Function that deletes a task
    const handleDelete = (id: number) => {
        setList(list.filter((t) => t.id !== id));
    }

    // This useMemo hook calculates if the task is completed
    const isCompleted = useMemo(() => item.status === "completed", [item.status]);

    return (
        <TableRow key={item.id} className={`${isCompleted ? "opacity-50" : ""} relative`}>
            <button onClick={() => triggerStatus(item.id)}>
                <TableCell className="flex flex-row items-center gap-3">
                    <Checkbox checked={isCompleted} />
                    {isCompleted ? "Completada" : "Pendiente"}
                </TableCell>
            </button>
            <TableCell className={isCompleted ? "line-through" : ""}>
                {item.name}
            </TableCell>
            <TableCell className={isCompleted ? "line-through" : ""}>
                {item.description}
            </TableCell>
            <button onClick={() => handleDelete(item.id)} className="absolute right-4 top-[50%] transform -translate-y-1/2">
                <Delete01Icon />
            </button>
        </TableRow>
    )
}

