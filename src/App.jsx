import React, { useState } from 'react';
import './index.css';
import './App.css';
import { InputTodo } from './components/inputTodo';
import {IncompleteTodos} from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = ()　=> {
    //state初期設定(入力側)
    const [todoText, setTodoText] = useState('');
    //表示エリア（出力側）
    const [incompleteTodos, setIncompleteTodos] = useState([]);//未完了
    const [completeTodos,setCompleteTodos] = useState([]);//完了

    //入力フォームの値を取得
    const onChangeTodoText = (event) => setTodoText(event.target.value);
    //未完了エリアのデータ更新
    const onClickAdd = () => {
      if(todoText === "") return;
      const newTodos =[...incompleteTodos,todoText];//新しい配列にtodoTextの値を入れる(incompleteTodosの後ろにtodoTextを入れた新しい配列を作る)
      setIncompleteTodos(newTodos);
      // alert(todoText);
    }

    //削除ボタン
    const onClickDelete = (index) => {
      const newTodos = [...incompleteTodos];
      newTodos.splice(index, 1);
      setIncompleteTodos(newTodos);
      // alert(index);
    }

    //完了ボタン
    const onClickComplete = (index) => {
      //未完了エリアから削除
      const newIncompleteTodos = [...incompleteTodos];
      newIncompleteTodos.splice(index, 1);

      //完了エリアに表示
      const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // alert(index);

      //state更新
      setIncompleteTodos(newIncompleteTodos);
      setCompleteTodos(newCompleteTodos);
    }

      //戻す
      const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
      }
    
  return(
  <>
  <InputTodo 
  todoText={todoText} 
  onChange={onChangeTodoText} 
  onClick={onClickAdd}
  />
  <IncompleteTodos 
  todos={incompleteTodos} 
  onClickComplete={onClickComplete} 
  onClickDelete={onClickDelete} 
  />

<CompleteTodos 
todos={completeTodos}
onClickBack={onClickBack}
/>
  
  </>
  );
}