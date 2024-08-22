import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { List } from "../types/list";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Function that saves the current list to LocalStorage
 * @param list The list to save
 */
export const saveList = (list: List[]) => {
    localStorage.setItem("list", JSON.stringify(list));
}

/**
 * Function that retrieves the list from LocalStorage
 * @returns The list from LocalStorage
 */

export const getList = (): List[] => {
    const list = localStorage.getItem("list");
    return list ? JSON.parse(list) : [];
}