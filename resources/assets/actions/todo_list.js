import { TODO_LIST } from 'constants';
import fetch from 'isomorphic-fetch';

let nextTodoId = 0;

export const addTodo = (text) => {
  const action = {
    type: TODO_LIST.ADD_TODO,
    id: nextTodoId++,
    text
  };
  return action;
};

export function loadTodos() {
  return {
    // 要在之前和之後發送的 actions types
    types: [
      TODO_LIST.LOAD_TODOS_REQUEST,
      TODO_LIST.LOAD_TODOS_SUCCESS,
      TODO_LIST.LOAD_TODOS_FAILURE
    ],
    // 檢查快取 (可選擇的)：
    shouldCallAPI: (state) => state.todos,
    // 執行抓取資料：
    callAPI: () => fetch('/todo', { method: 'GET' }),
    // 要在開始/結束 actions 注入的參數
    payload: {}
  };
}
