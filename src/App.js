import React, { useState } from "react";

export const App = () => {
  // 入力フォームを読み取るルルル
  const [todoText, setTodoText] = useState("");
  const [todoList, setNewTodoList] = React.useState([]);

  // インプットフォームの状態を管理
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  // 追加ボタンを押すとタスクがToDoリストに追加される,,
  const onClickAdd = () => {
    // 空だったら速攻終わらす
    // todotextフォームに入力した値
    if (todoText === "") return;
    // todotextをnewTodoに入れる
    // 連想配列のリテラルは配列と違い、中括弧「 { 」で囲い、コロン「 : 」で key と value を紐付けます。
    const newTodo = {
      comment: todoText
    };
    // DOMが更新される
    // push() メソッドは、todolist配列の末尾に 1 つ以上の要素を追加することができます
    todoList.push(newTodo);
    // 入力フォーム内を""にする
    setTodoText("");
  };

  return (
    <>
      <div className="add-todo">
        {/* 入力フォーム設置 */}
        <input value={todoText} onChange={onChangeTodoText} />
        {/* ボタン設置 */}
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="task-area">
        {/* ？？？？？？？？？？？ */}
        {todoList.map((todo) => (
          <tr>
            <h1>heloo</h1>
            <td>{todo.comment}</td>
          </tr>
        ))}
      </div>
    </>
  );
};
