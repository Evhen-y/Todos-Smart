import { EOrder } from "@shared/interface";

export interface ITodo {
    id?: number;
    text: string;
    createAt: Date;
    completed: boolean;

  }

export interface ITodosState{
    error: null | string;
    loading: boolean;
    todos: ITodo[];
    todo: null |ITodo;
    filterSettings: ITodosFilterSettings;
}

export interface ITodosFilterSettings {
  id?: number;
  search: string;
  order: EOrder;
  sortBy: keyof ITodo;
  limit: number;
  skip: number;

}