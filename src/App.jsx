import React from 'react';
import './index.css';
import './App.css';

export const App = ()　=> {
  return(
  <>
  <div className="input-area">
    <input placeholder="TODOを入力" />
    <button>追加</button>
  </div>
  <div>
    <p>未完了のTODO</p>
    <ul>
      <div>
        <li>ああああ</li>
        <button>完了</button>
        <button>削除</button>
      </div>
      <li>いいいい</li>
        <button>完了</button>
        <button>削除</button>
    </ul>
  </div>
  <div>
  <p>未完了のTODO</p>
    <ul>
      <div>
        <li>うううう</li>
        <button>戻す</button>
      </div>
    </ul>
  </div>
  </>
  );
}