import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	
	const onChange = (event) => {
		setTodo(event.target.value);
		// console.log(event.target.value);
	};
	
	
	
	function onSubmit(event) {
		// preventDefault()
		// 1. a 태그를 눌러도 href 링크로 이동하지 않도록 하는 용도
		// 2. form 버튼을 눌러 submit을 해도 페이지를 새로고침하고 싶지 않을 때
		// 이거 없으면 form 버튼 눌러서 submit 할 때 내가 만든 input text가 날라감
		event.preventDefault();
		
		if (todo === "") {
			return ;
		}
		setTodos((current) => [todo, ...current]);
		setTodo("");
	}
	
	return (
		<div className="App">
			<div style={{backgroundColor:"black", color:"white"}}>
				<img src={logo} alt="logo" height="50px" width="50px"/>
				<h4><b>To do List</b></h4>
			</div>
			<h1>My Todos ({todos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={todo}
					type="text"
					placeholder="Write your to do"
				/>
				<button>Add To Do</button>
			</form>
			<hr />
			{todos.map((item, index) => (
				<li key={index}>{index} : {item}</li>
			))}
		</div>
	);
}
export default App;