interface ListItem {
  todo: string;
}

export const ListItem: React.FC<ListItem> = ({ todo }) => {
  return (
    <li className='toto'>{todo}</li>
  )
}
