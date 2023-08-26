import { useState } from "react";
import useTodoStore, { Item } from "../stores/useTodoStore";
import {
  checkedItem,
  iconBox,
  itemBlock,
  todoCheckBox,
  todoInput,
} from "../styles/app.css";
type Props = {
  item: Item;
};
const Item = ({ item }: Props) => {
  const [removeTodo, modifyTodo, checkTodo] = useTodoStore((state) => {
    return [state.removeTodo, state.modifyTodo, state.checkTodo];
  });
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickEdit = () => {
    setContent(item.content);
    setIsEdit(true);
  };

  const handleClickSave = () => {
    modifyTodo(content, item.id);
    setIsEdit(false);
  };

  const handleCheckBox = () => {
    checkTodo(item.id);
    setChecked(!checked);
  };

  return (
    <div className={itemBlock}>
      <input
        type="checkbox"
        defaultChecked={item.isComplete}
        className={todoCheckBox}
        onClick={() => handleCheckBox()}
      />
      {!isEdit ? (
        <div className={checked ? checkedItem : ""}>{item.content}</div>
      ) : (
        <input
          type="text"
          className={todoInput}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}

      <div className={iconBox}>
        {!isEdit ? (
          <div onClick={() => handleClickEdit()}>📝</div>
        ) : (
          <button onClick={() => handleClickSave()}>저장</button>
        )}

        <div onClick={() => removeTodo(item.id)}>❌</div>
      </div>
    </div>
  );
};

export default Item;
