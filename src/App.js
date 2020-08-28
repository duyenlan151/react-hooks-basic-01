import React, { useEffect, useState } from 'react';
import './App.scss';
// import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😊' },
    { id: 2, title: 'We love Easy Frontend!  🎉' },
    { id: 3, title: 'They love Easy Frontend! ❤️ ' },
  ]);

  // 07 useEffect
  const [postList, setPostList] = useState([]);


  // không dùng async cho useEffect tru truong hop custom hook
  // khong dung useEffect(async() => ...)
  useEffect(() => {
    async function fetchPostList() {
      // ... goi api nen dung try catch de tranh loi xay ra
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log('Failed to fetch post list');
      }
    }
    console.log('POST list effect');
    fetchPostList();
  }, []);// empty array chi chay dung 1 lan, khong bi phu thuoc 


  useEffect(() => {
    console.log('TODO list effect');
  })// không có dependencies khi sau mỗi lần render sẽ chạy lại


  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    // add new todo to current todo list
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList[todoList.length - 1]['id'] + 1,
      ...formValues
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <h1>Welcome to React Hooks!</h1>
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList
        todos={todoList}
        onTodoClick={handleTodoClick}
      /> */}

      <PostList posts={postList} />
    </div>
  );
}

export default App;
