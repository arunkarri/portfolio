const List = (props) => (
  <ul>
    {props.list.map((element) => (
      <li key={element}>{element}</li>
    ))}
  </ul>
);

export default List;
