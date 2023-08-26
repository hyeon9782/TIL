import TodoInput from "./components/TodoInput";
import List from "./components/TodoList";
import useTodoStore from "./stores/useTodoStore";
import {
  container,
  dayText,
  flexCenter,
  todayText,
  todoListBlock,
  todoText,
} from "./styles/app.css";

function App() {
  const today = new Date();
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();

  const list = useTodoStore((state) => state.list);

  return (
    <div className={`${container} ${flexCenter}`}>
      <div className={todoListBlock}>
        <div className={todayText}>{`${year}년 ${month}월 ${date}일`}</div>
        <div className={dayText}>{`${dayList[day]}요일`}</div>
        <div className={todoText}>할 일 {list.length}개 남음</div>
        <List list={list} />
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
