import List from "./components/List";

function App() {
  const tasks = [
    { id: 1, title: "아무 일도 하기 싫다." },
    { id: 2, title: "건물 매입" },
  ];
  return (
    <main>
      <h1>To-do</h1>
      <List tasks={tasks} />
    </main>
  );
}

export default App;
