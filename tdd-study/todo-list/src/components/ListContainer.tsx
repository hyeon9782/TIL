import List from "./List";

const ListContainer = () => {
  const tasks = [
    { id: 1, title: "아무 일도 하기 싫다." },
    { id: 2, title: "건물 매입" },
  ];
  return <List tasks={tasks} />;
};

export default ListContainer;
