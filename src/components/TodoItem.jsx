import "../styles/TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
      <li className="todoItem">
        <span className={`icon icon-complete ${completed && "icon-complete--active"}`} onClick={onComplete}>✓</span>
        <p className={`todoItem-p ${completed && "todoItem-p--completed"}`}>{text}</p>
        <span className="icon icon-delete" onClick={onDelete}>𐄂</span>
      </li>
  );
}

export { TodoItem };
