import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //onAddTodo를 프롭스로 받을 것이기 때문에 함수형 컴포넌트라는 React.FC에 onAddTodo를 받을 것이라고 명시. 또한 이것은 함수라는 것을 의미하기위해 화살표함수를 사용하였는데, 리턴을 해버리면 밑에서 변수도 못 넣고 상수도 못 넣을 것이기 때문에 return값을 넣지 않고 그냥 void로 처리. //! 원래는 매개변수를 비워뒀지만, 아래에서 onAddTodo에 매개변수를 넣었기 때문에 위에도 넣어야 한다. 변수명은 아무렇게나 넣어도 되지만 이 또한 type을 정의해주어야 한다.
  const todoTextInputRef = useRef<HTMLInputElement>(null); //input은 inputElement, button은 HTMLButtonElement, paragraph는 HTMLParagraphElement. input,button,paragraph는 각각의 type에 기반한 것이기 때문에 이런 식으로 적어야 한다.

  const submitHandler = (e: React.FormEvent) => {
    //리액트 패키지가 제공하는 특별한 타입. MoustEvent 등도 사용 가능. 즉, Event에 event type을 넣을 수 있다. 보통 return 부분에 마우스를 올리면 나온다. 여기서는 onSubmit 이벤트는 React.FormEvent이기 때문에 사용
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value; //?는 아직 사용을 안했기 때문에 타입스크립트에서 무엇이 들어올 지 몰라서 ?를 자동으로 넣어준다. 100% current가 null이 아닐 거라고 확신이 든다면 ?를 !로 바꿀 수 있다.

    if (enteredText?.trim().length === 0) {
      //Throw an error
      return;
    }

    props.onAddTodo(enteredText); //! 여기서 들어감
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">TodoText</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button onClick={submitHandler}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
