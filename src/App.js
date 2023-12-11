import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className=" relative">
    <div className=" text-white text-4xl text-center mt-10">
      Todo List - redux toolkit
    </div>
      <AddTodo></AddTodo>
      <Todos></Todos>

      <div className=" text-sm text-white absolute right-4 -top-6">
        Created By Jitendriya Meher
      </div>
    </div>
  );
}

export default App;
