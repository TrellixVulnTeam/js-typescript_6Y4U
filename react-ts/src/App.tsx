import Todos from "./component/Todos";
import Todo from "./models/todo";
import NewTodo from "./component/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")]; //Todo라는 객체를 만듬.

  const addtodoHandler = (todoText: string) => {
    //NewTodo에서 받고있는 함수의 매개변수가 이런 모양이기 때문에 여기서도 이런 식으로 똑같이 써줘야 함. 매개변수명은 아무렇게나 상관없음.
  };

  return (
    <div>
      <NewTodo onAddTodo={addtodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
