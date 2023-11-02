import { ListItem } from "../ListItem/ListItem"

interface ListProps {
  todoList: string[];
}

export const List: React.FC<ListProps> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <ListItem key={index} todo={todo}/>
      ))}
    </ul>
  );
}
