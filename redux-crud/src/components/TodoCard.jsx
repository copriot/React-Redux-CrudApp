import { useDispatch, useSelector } from "react-redux";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: todo.id,
    });
  };

  const toggleIsDone = () => {
    const updated = { ...todo, isDone: !todo.isDone };

    dispatch({
      type: "UPDATE",
      payload: updated,
    });
  };

  return (
    <div className="border border-info-subtle rounded p-4 my-4 shadow-lg container">
      <h5 className={todo.isDone ? "text-decoration-line-through" : ""}>
        {todo.text}
      </h5>

      <h6>{todo.isDone ? "Tamamlandı" : "Devam ediyor"}</h6>
      <h6>{todo.created_date}</h6>
      <hr />

      <div className="d-flex justify-content-around">
        <button className="btn btn-warning px-4">Düzenle</button>
        <button onClick={toggleIsDone} className="btn btn-primary px-4">
          {todo.isDone ? "Geri Al" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn btn-danger px-4">
          Sil
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
