import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
const App = () => {
  return (
    <>
      <div className="vh-100 bg-dark text-white  p-5 width-100">
        <h2 className="text-center">
          Redux <span className="text-danger">Crud</span>
        </h2>
        <AddForm />
        <ListTodos />
      </div>
    </>
  );
};

export default App;
