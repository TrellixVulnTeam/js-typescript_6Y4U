import React from "react";

const TodoItem: React.FC<{ gosu: string }> = (props) => {
  //프롭스로 받을 때 함수에서 받는 타입을 정해줄 때, 앞에 프롭스에서 내려주는 것과 이름은 똑같이 하여야 한다. 부모에서 gosu로 내려주면 gosu로 받기.
  //   console.log(props);
  return <li>{props.gosu}</li>;
};

export default TodoItem;
