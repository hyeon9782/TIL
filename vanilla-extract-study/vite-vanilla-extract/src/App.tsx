import List from "./components/List";
import { container, flexCenter, todoListBlock } from "./styles/app.css";

function App() {
  return (
    <div className={`${container} ${flexCenter}`}>
      <div className={todoListBlock}>
        <List />
      </div>
    </div>
  );
}

export default App;
