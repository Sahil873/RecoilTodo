/* eslint-disable no-unused-vars */
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import {
  descriptionAtom,
  filterAtom,
  filteredTodosAtom,
  titleAtom,
  todoAtom,
} from "./store/atoms/allAtoms";

function App() {
  return (
    <div>
      <RecoilRoot>
        <CreateTodo />
        <Filter />
        <Todos />
      </RecoilRoot>
    </div>
  );
}

function CreateTodo() {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const setTodos = useSetRecoilState(todoAtom);

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={() => setTodos((pV) => [...pV, { title, description }])}>
        Create Todo
      </button>
    </div>
  );
}

function Filter() {
  const setFilter = useSetRecoilState(filterAtom);
  return (
    <>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => setFilter(e.target.value)}
      />
    </>
  );
}

function Todos() {
  const filteredTodos = useRecoilValue(filteredTodosAtom);

  return (
    <div>
      {filteredTodos.map((todo, index) => (
        <div key={index}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
