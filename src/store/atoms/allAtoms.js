import { atom, selector } from "recoil";

export const todoAtom = atom({
  key: "todoAtom",
  default: [],
});

export const titleAtom = atom({
  key: "titleAtom",
  default: "",
});

export const descriptionAtom = atom({
  key: "descriptionAtom",
  default: "",
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});

export const filteredTodosAtom = selector({
  key: "filteredTodosAtom",
  get: ({ get }) => {
    const todos = get(todoAtom);
    const filter = get(filterAtom);
    return todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(filter) ||
        todo.description.toLowerCase().includes(filter)
    );
  },
});
