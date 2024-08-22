import { Dispatch, SetStateAction } from "react";

export type List = {
    id: number;
    name: string;
    description: string;
    status: "pending" | "completed";
}

export interface TaskItemProps {
    list: List[],
    item: List,
    setList: Dispatch<SetStateAction<List[]>>,
}