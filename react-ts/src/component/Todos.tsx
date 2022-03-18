import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//items인 문자열 배열이 올 것이다. items뒤에 ?를 넣으면 선택적 prop이 되지면 return에서 선택하지 않을 때는 어떻게 해야하는지를 처리해야 한다. //! 즉 삼항연산자를 사용하여 items가 안 올 때는 어떻게 해야하는지를 처리해야 한다. 그렇게 안 하고 이런 식으로 작성하면 부모에서 무조건 items를 string type으로 내려줘야 한다.
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  //FC -> functional component. 함수형 컴포넌트를 의미한다는 뜻. React.FC에는 이미 이 함수는 부모한테 프롭스를 받는 함수라는 것을 가지고 있다. 그래서 children prop을 항상 가지고 있다. //! 부모에서 오는 props와 children prop이 합쳐져야하기 때문에 React.FC 다음에는 유형을 확실하게 적어줘야 한다. 유형 추론을 사용하지 못하게 해야한다.
  //class를 정의하면 class가 생성자 함수로 행동해서 새 객체를 호출할 뿐만 아니라 type도 된다. class 이름으로 사용할 수 잇다. 그래서 Todo를 import로 불러와서 items type을 Todo로 할 수 있는 것이다. 이러면 Todo로 가득한 배열[]이 된다
  // console.log(props);
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          gosu={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
