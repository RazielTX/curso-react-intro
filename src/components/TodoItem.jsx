import "../styles/TodoItem.css";

function TodoItem({ text, completed }) {
  return (
      <li className="todoItem">
        <span className={`icon icon-complete ${completed && "icon-complete--active"}`}>✓</span>
        <p className={`todoItem-p ${completed && "todoItem-p--completed"}`}>{text}</p>
        <span className="icon icon-delete">𐄂</span>
      </li>
  );
}

export { TodoItem };
