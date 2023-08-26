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
  selectTodo: (id: number) => Item;
  appendTodo: (content: string) => void;
  modifyTodo: (item: Item) => void;
  removeTodo: (id: number) => void;
};

let id = 0;

const useTodoStore = create<State & Action>((set) => ({
  list: [],
  selectTodo: (id: number) => list.find((item) => item.id === id),
  appendTodo: (content: string) =>
    set((state) => ({
      list: [...state.list, { id: id++, content, isComplete: false }],
    })),
  modifyTodo: (item: Item) =>
    set((state) => ({
      list: state.list.map((prevItem) =>
        prevItem.id === item.id ? item : prevItem
      ),
    })),
  removeTodo: (id: number) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== id),
    })),
}));

export default useTodoStore;
