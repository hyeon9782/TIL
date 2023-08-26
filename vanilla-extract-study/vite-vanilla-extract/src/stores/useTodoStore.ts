import { create } from "zustand";

export type Item = {
  id: number;
  content: string;
  isComplete: boolean;
};

type State = {
  list: Item[];
};

type Action = {
  appendTodo: (content: string) => void;
  modifyTodo: (content: string, id: number) => void;
  removeTodo: (id: number) => void;
};

let id = 0;

const useTodoStore = create<State & Action>((set) => ({
  list: [],
  appendTodo: (content: string) =>
    set((state) => ({
      list: [...state.list, { id: id++, content, isComplete: false }],
    })),
  modifyTodo: (content: string, id: number) =>
    set((state) => ({
      list: state.list.map((prevItem) =>
        prevItem.id === id ? { ...prevItem, content } : prevItem
      ),
    })),
  removeTodo: (id: number) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== id),
    })),
}));

export default useTodoStore;
