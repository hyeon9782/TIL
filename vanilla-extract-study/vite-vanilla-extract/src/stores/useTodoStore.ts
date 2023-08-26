import { create } from "zustand";

export type Item = {
  content: string;
  isComplete: boolean;
};

type State = {
  list: Item[];
};

type Action = {
  appendTodo: (content: string) => void;
  //   modifyTodo: (item: Item) => void;
  //   removeTodo: (id: number) => void;
};

const useTodoStore = create<State & Action>((set) => ({
  list: [],
  appendTodo: (content: string) =>
    set((state) => ({
      list: [...state.list, { content, isComplete: false }],
    })),
}));

export default useTodoStore;
