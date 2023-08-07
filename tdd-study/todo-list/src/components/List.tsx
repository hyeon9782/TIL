type Props = {
  tasks: any[];
};

const List = ({ tasks }: Props) => {
  return (
    <ul>
      {tasks.map((task: any) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

export default List;
