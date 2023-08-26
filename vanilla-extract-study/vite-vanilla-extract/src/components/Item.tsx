import { itemBlock } from "../styles/app.css";
type Props = {
  item: any;
};
const Item = ({ item }: Props) => {
  return (
    <div className={itemBlock}>
      <input type="radio" />
      <div>아침 산책</div>
      <div>❌</div>
    </div>
  );
};

export default Item;
