import useTodoStore, { Item } from "../stores/useTodoStore";
import { itemBlock } from "../styles/app.css";
type Props = {
  item: Item;
};
const Item = ({ item }: Props) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  return (
    <div className={itemBlock}>
      <input type="radio" defaultChecked={item.isComplete} />
      <div>{item.content}</div>
      <div onClick={() => removeTodo(item.id)}>❌</div>
    </div>
  );
};

export default Item;
