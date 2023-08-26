import { Item } from "../stores/useTodoStore";
import { listBlock } from "../styles/app.css";
import TodoItem from "./TodoItem";
type Props = {
  list: Item[];
};
const List = ({ list }: Props) => {
  return (
    <div className={listBlock}>
      {list && list.map((item) => <TodoItem key={item.id} item={item} />)}
    </div>
  );
};

export default List;
