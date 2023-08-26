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
  const completeLength = list.filter((item) => !item.isComplete).length;

  return (
    <div className={`${container} ${flexCenter}`}>
      <div className={todoListBlock}>
        <div className={todayText}>{`${year}년 ${month}월 ${date}일`}</div>
        <div className={dayText}>{`${dayList[day]}요일`}</div>
        <div className={todoText}>
          {list.length === 0
            ? completeLength !== 0
              ? `할 일 ${completeLength}개 남음`
              : `할 일을 등록해주세요!`
            : completeLength !== 0
            ? `할 일 ${completeLength}개 남음`
            : `오늘 할 일을 모두 완료했어요!🎉`}
        </div>
        <List list={list} />
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
