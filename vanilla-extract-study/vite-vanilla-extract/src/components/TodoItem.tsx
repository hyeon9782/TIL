import { Item } from "../stores/useTodoStore";
import { itemBlock } from "../styles/app.css";
type Props = {
  item: Item;
};
const Item = ({ item }: Props) => {
  return (
    <div className={itemBlock}>
      <input type="radio" defaultChecked={item.isComplete} />
      <div>{item.content}</div>
      <div>❌</div>
    </div>
  );
};

export default Item;
