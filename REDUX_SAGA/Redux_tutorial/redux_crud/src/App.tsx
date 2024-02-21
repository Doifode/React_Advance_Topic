import { useEffect } from "react";
import { TodoForm } from "./Components/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { callForTodos } from "./Redux/Actions";

function App() {
  const dispatch = useDispatch();
  const state: any = useSelector((state: any) => state)

  useEffect(() => {
    dispatch(callForTodos())
  }, [dispatch])
  
  console.log('states', state)
  return (
    <div className="container text-center d-flex justify-content-center">
      <TodoForm />
    </div>
  );
}

export default App;
