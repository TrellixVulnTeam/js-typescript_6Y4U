import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ gosu: string; onRemoveTodo: () => void }> = (
  //onRemoveTodo는 함수. click 함수이기 때문에 매개변수에 event: React.MouseEvent로 넣고 return값에는 관심이 없기 때문에 void로 넣는다.(여기서는 뺌, 선택사항) 그리고 두 개 이상 넣을 때는 ;를 넣는다.
  props
) => {
  //프롭스로 받을 때 함수에서 받는 타입을 정해줄 때, 앞에 프롭스에서 내려주는 것과 이름은 똑같이 하여야 한다. 부모에서 gosu로 내려주면 gosu로 받기.
  //   console.log(props);
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.gosu}
    </li>
  );
};

export default TodoItem;
