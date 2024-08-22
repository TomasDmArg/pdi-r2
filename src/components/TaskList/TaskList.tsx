import { useEffect, useMemo, useState } from "react";
import { Card } from "../ui/card"
import { H3, P } from "../ui/typographies";
import { Button } from "../ui/button";
import { PlusSignIcon, Edit01Icon } from "hugeicons-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
} from "../ui/dialog"
import { Input } from "../ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import { List } from "@/src/types/list";
import { TaskItem } from "./TaskItem";
import { getList, saveList } from "../../lib/utils";

// TaskList component, it displays a list of tasks with their status, name, description and actions
export const TaskList = () => {
    // State declarations
    const [list, setList] = useState<List[]>([]);
    const [taskToEdit, setTaskToEdit] = useState<List | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    const initialTaskState: List = {
        id: 0,
        name: "",
        description: "",
        status: "pending",
    };
    const [newTask, setNewTask] = useState<List>(initialTaskState);

    // Handler to add or edit a task
    const handleAddOrEditTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let updatedList: List[];
        if (taskToEdit) {
            updatedList = list.map(task => 
                task.id === taskToEdit.id ? { ...newTask, id: taskToEdit.id } : task
            );
        } else {
            updatedList = [...list, { ...newTask, id: list.length + 1 }];
        }
        setList(updatedList);
        saveList(updatedList);
        setNewTask(initialTaskState);
        setTaskToEdit(null);
        setIsDialogOpen(false);
    }

    // Handler to edit a task
    const handleEditTask = (task: List) => {
        setTaskToEdit(task);
        setNewTask(task);
        setIsDialogOpen(true);
    }

    // Memoized value to determine the number of tasks to complete
    const taskToComplete = useMemo(() => list.filter((task) => task.status === "pending").length, [list]);

    // Load the list from local storage at page's first render
    useEffect(() => {
        const savedList = getList();
        if (savedList) {
            setList(savedList);
        }
    }, []);

    return (
        <>
            <Card className="flex flex-col items-start gap-6 p-6">
                <H3>Lista de tareas:</H3>
                <Button className="flex flex-row items-center gap-3" onClick={() => {
                    setNewTask(initialTaskState);
                    setTaskToEdit(null);
                    setIsDialogOpen(true);
                }}>
                    Agregar tarea <PlusSignIcon />
                </Button>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Estado</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Descripción</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {list.map((task) => (
                            <TaskItem 
                                key={task.id}
                                item={task} 
                                list={list} 
                                setList={setList} 
                                onEdit={handleEditTask}
                            />  
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>
                                Total de tareas: {list.length}, por completar: {taskToComplete}
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <form onSubmit={handleAddOrEditTask} className="flex flex-col gap-6">
                        <DialogTitle>{taskToEdit ? 'Editar Tarea' : 'Agregar Tarea'}</DialogTitle>
                        <section className="flex flex-col gap-3">
                            <section className="flex flex-col gap-3">
                                <P>Título:</P>
                                <Input
                                    className="w-full p-2 border border-gray-200 rounded-md"
                                    type="text"
                                    placeholder="Supermercado"
                                    value={newTask.name}
                                    onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                                />
                            </section>
                            <section className="flex flex-col gap-3">
                                <P>Descripción:</P>
                                <Input
                                    className="w-full p-2 border border-gray-200 rounded-md"
                                    type="text"
                                    placeholder="Comprar fideos, huevos y pan"
                                    value={newTask.description}
                                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                                />
                            </section>
                        </section>
                        <DialogClose>
                            <Button type="submit" className="flex flex-row items-center gap-6">
                                {taskToEdit ? 'Guardar Cambios' : 'Agregar'} {taskToEdit ? <Edit01Icon /> : <PlusSignIcon />}
                            </Button>
                        </DialogClose>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}