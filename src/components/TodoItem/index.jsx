import { MdDone, MdDelete } from "react-icons/md";

import "./TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todoItem">
      <MdDone
        className={`icon icon-complete ${completed && "icon-complete--active"}`}
        onClick={onComplete}
      />
      <p className={`todoItem-p ${completed && "todoItem-p--completed"}`}>
        {text}
      </p>
      <MdDelete className="icon icon-delete" onClick={onDelete}/>
    </li>
  );
}

export { TodoItem };
