import Todos from "./component/Todos";
import Todo from "./models/todo";
import NewTodo from "./component/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); //Todo라는 객체를 만듬.

  const addtodoHandler = (todoText: string) => {
    //NewTodo에서 받고있는 함수의 매개변수가 이런 모양이기 때문에 여기서도 이런 식으로 똑같이 써줘야 함. 매개변수명은 아무렇게나 상관없음. 또한 뒤에서 void로 정의했기 때문에 return을 쓰지 않음.
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoid: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoid);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addtodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
