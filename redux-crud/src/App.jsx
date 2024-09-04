import React from "react";

import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
const App = () => {
  return (
    <>
      <div className="min-vh-100 bg-dark text-white p-5">
        <h2 className="text-center">
          Redux <span className="text-warning">Crud</span>
        </h2>

        <AddForm />
        <ListTodos />
      </div>
    </>
  );
};

export default App;
