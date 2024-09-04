import { v4 } from "uuid";
import { useDispatch } from "react-redux";
const AddForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    //bu bilesen icerisinde dispatch methodunu kullanmamizi saglar
    e.preventDefault();
    //store verileri
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      isDone: false,
      created_date: new Date().toLocaleDateString(),
    };

    dispatch({
      type: "ADD",
      payload: newTodo,
    });

    e.target.reset();
  };

  return (
    <form className="d-flex my-5 gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yapılacaklar Listesi"
        className="form-control"
      />
      <button className="btn btn-success">Gönder</button>
    </form>
  );
};

export default AddForm;
