export default function EditForm({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
  }) {
    return (
      <form onSubmit={onEditFormSubmit}>
        <h2>Edit Todo</h2>
        <label htmlFor="updateTodo">Update todo: </label>
        <div>
        <input
          className="form-control"
          name="updateTodo"
          type="text"
          placeholder="Update todo"
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
        <button type="submit" className="btn btn-primary mb-3 m-1" onClick={onEditFormSubmit}>
          Update
        </button>
        <button type="submit" className="btn btn-primary mb-3 m-1" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </form>
    );
  }