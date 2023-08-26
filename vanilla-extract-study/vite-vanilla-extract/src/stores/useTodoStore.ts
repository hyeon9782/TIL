import { create } from "zustand";

type Item = {
  content: string;
  isComplete: boolean;
};

type State = {
  list: Item[];
};

type Action = {
  appendTodo: (item: Item) => void;
  removeTodo: (id: number) => void;
};

const useTodoStore = create<State & Action>((set) => ({
  list: [],
  appendTodo: (item: Item) => set((state) => ({ content: state.list.content })),
  modifyTodo: (item: Item) =>
    set((state) => ({ conntent: state.list.content })),
  removeTodo: (id: number) => set((state) => ({ content: state.list.content })),
}));

export default useTodoStore;
