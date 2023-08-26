import { Item } from "../stores/useTodoStore";
import { listBlock } from "../styles/app.css";
import TodoItem from "./TodoItem";
type Props = {
  list: Item[];
};
const List = ({ list }: Props) => {
  return (
    <div className={listBlock}>
      {list && list.map((item, index) => <TodoItem key={index} item={item} />)}
    </div>
  );
};

export default List;
