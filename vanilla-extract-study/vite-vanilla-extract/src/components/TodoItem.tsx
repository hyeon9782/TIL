import { useState } from "react";
import useTodoStore, { Item } from "../stores/useTodoStore";
import { iconBox, itemBlock, todoCheckBox, todoInput } from "../styles/app.css";
type Props = {
  item: Item;
};
const Item = ({ item }: Props) => {
  const [removeTodo, modifyTodo] = useTodoStore((state) => {
    return [state.removeTodo, state.modifyTodo];
  });
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleClickEdit = () => {
    setContent(item.content);
    setIsEdit(true);
  };

  const handleClickSave = () => {
    modifyTodo(content, item.id);
    setIsEdit(false);
  };

  return (
    <div className={itemBlock}>
      <input
        type="checkbox"
        defaultChecked={item.isComplete}
        className={todoCheckBox}
      />
      {!isEdit ? (
        <div>{item.content}</div>
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
