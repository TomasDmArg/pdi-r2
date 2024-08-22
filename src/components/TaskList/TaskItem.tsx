import { List, TaskItemProps } from "@/src/types/list";
import {
    TableCell,
    TableRow,
} from "../ui/table"
import { Checkbox } from "../ui/checkbox";
import { useMemo } from "react";
import { Delete01Icon, Edit01Icon } from "hugeicons-react";
import { Button } from "../ui/button";

interface ExtendedTaskItemProps extends TaskItemProps {
    onEdit: (task: List) => void;
}

// TaskItem component, it displays a task item of a task item array with its status, name, description and actions
export const TaskItem = ({ list, setList, item, onEdit }: ExtendedTaskItemProps) => {
    // Handler to trigger the status of a task, from pending to completed and vice versa
    const triggerStatus = (id: number) => {
        const updatedList: List[] = list.map((task) => {
            if (task.id === id) {
                return { ...task, status: task.status === "pending" ? "completed" : "pending" };
            }
            return task;
        });
        setList(updatedList);
    }

    //Handler to delete a task
    const handleDelete = (id: number) => {
        setList(list.filter((t) => t.id !== id));
    }

    //Memoized value to determine if the task is completed
    const isCompleted = useMemo(() => item.status === "completed", [item.status]);

    return (
        <TableRow key={item.id} className={`${isCompleted ? "opacity-50" : ""} relative`}>
            <button onClick={() => triggerStatus(item.id)} className="py-3">
                <TableCell className="flex flex-row items-center gap-3">
                    <Checkbox checked={isCompleted}  />
                    {isCompleted ? "Completada" : "Pendiente"}
                </TableCell>
            </button>
            <TableCell className={isCompleted ? "line-through" : ""}>
                {item.name}
            </TableCell>
            <TableCell className={isCompleted ? "line-through" : ""}>
                {item.description}
            </TableCell>
            <TableCell>
                <div className="flex gap-2">
                    <Button onClick={() => onEdit(item)} variant="outline" className="flex flex-row items-center gap-3">
                        <Edit01Icon /> Editar
                    </Button>
                    <Button onClick={() => handleDelete(item.id)} variant="outline" className="flex flex-row items-center gap-3">
                        <Delete01Icon /> Eliminar
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    )
}