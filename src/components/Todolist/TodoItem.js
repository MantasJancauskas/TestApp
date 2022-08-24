export default function TodoItem({
    todo,
    onEditClick,
    onDeleteClick
  }) {
    return (
      <li key={todo.id}>
        {todo.text}
        <button type="submit" className="btn btn-primary mb-3 m-1" onClick={() => onEditClick(todo)}>Edit</button>
        <button type="submit" className="btn btn-primary mb-3 m-1" onClick={() => onDeleteClick(todo.id)}>Delete</button>
      </li>
    );
  }
