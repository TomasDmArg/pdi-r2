import { useEffect, useMemo, useState } from "react";
import { Card } from "../ui/card"
import { H3, P } from "../ui/typographies";
import { Button } from "../ui/button";
import { PlusSignIcon } from "hugeicons-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { Input } from "../ui/input";
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
import { List } from "@/src/types/list";
import { TaskItem } from "./TaskItem";
import { getList, saveList } from "../../lib/utils";

/**
 * TaskList component, it displays a list of tasks and allows the user to add new tasks.
 */
export const TaskList = () => {
    //States declarations
    const [list, setList] = useState<List[]>([]);
    const [newTask, setNewTask] = useState<List>({
        id: 0,
        name: "",
        description: "",
        status: "pending",
    });

    //Adds a task to the list
    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newList: List[] = [...list, { ...newTask, id: list.length + 1 }];
        setList(newList);
        saveList(newList);
        setNewTask({ id: 0, name: "", description: "", status: "pending" });
    }

    // This useMemo hook calculates the number of tasks that are pending
    const taskToComplete = useMemo(() => list.filter((task) => task.status === "pending").length, [list]);

    useEffect(() => {
        // This use effect retrieves the list of tasks from local storage
        const savedList = getList();
        
        if (savedList) {
            setList(savedList);
        }
    }, []);

    return (
        <Dialog>
            <Card className="flex flex-col items-start gap-6 p-6">
                <H3>Lista de tareas:</H3>
                <DialogTrigger>
                    <Button className="flex flex-row items-center gap-3">
                        Agregar tarea <PlusSignIcon />
                    </Button>
                </DialogTrigger>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Estado</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Descripción</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list.map((task) => (
                            <TaskItem item={task} list={list} setList={setList} />  
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>
                                Total de tareas: {list.length}, por completar: {taskToComplete}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Card>

            <DialogContent>
                <form onSubmit={handleAddTask} className="flex flex-col gap-6">
                    <DialogTitle>Agregar Tarea</DialogTitle>
                    <section className="flex flex-col gap-3">
                        <section className="flex flex-col gap-3">
                            <P>Título:</P>
                            <Input
                                className="w-full p-2 border border-gray-200 rounded-md"
                                type="text"
                                value={newTask.name}
                                onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                            />
                        </section>
                        <section className="flex flex-col gap-3">
                            <P>Descripción:</P>
                            <Input
                                className="w-full p-2 border border-gray-200 rounded-md"
                                type="text"
                                value={newTask.description}
                                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                            />
                        </section>
                    </section>
                    <DialogClose>
                        <Button type="submit" className="flex flex-row items-center gap-6">
                            Agregar <PlusSignIcon /> 
                        </Button>
                    </DialogClose>
                </form>
            </DialogContent>
        </Dialog>
    )
}