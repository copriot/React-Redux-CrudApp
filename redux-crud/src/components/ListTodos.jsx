import { useSelector } from "react-redux";
import store from "../store/store";

const ListTodos = () => {
  const storeState = useSelector((store) => store.todoReducer);
  console.log(storeState);
  return <div>ListTodos</div>;
};

export default ListTodos;
