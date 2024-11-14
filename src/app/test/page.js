"use client";

import { useState, useEffect } from "react";
 
import Alert from "@/Component/Alert";
import Input from "@/Component/Input";
import Button from "@/Component/Button";
import Checkbox from "@/Component/Checkbox";
import Tabs, { TabContent, TabList, TabTrigger } from "@/Component/Tabs";

export default function TodoPage() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");
	const [alertVariant, setAlertVariant] = useState("info");

	// Load todos from local storage on page load
	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);

	// Save todos to local storage whenever todos changes
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleNewTodoChange = (e) => {
		setNewTodo(e.target.value);
	};

	const addTodo = () => {
		if (newTodo.trim() === "") {
			setShowAlert(true);
			setAlertMessage("Please enter a task!");
			setAlertVariant("warning");
			return;
		}

		setTodos([...todos, { text: newTodo, completed: false }]);
		setNewTodo("");
		setShowAlert(true);
		setAlertMessage("Task added successfully!");
		setAlertVariant("success");
	};

	const toggleTodo = (index) => {
		const updatedTodos = [...todos];
		updatedTodos[index].completed = !updatedTodos[index].completed;
		setTodos(updatedTodos);
	};

	const deleteTodo = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	const handleAlertClose = () => {
		setShowAlert(false);
	};

	return (
		<div className="w-full mx-auto p-4">
			<h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
			{showAlert && (
				<Alert
					variant={alertVariant}
					onClose={handleAlertClose}
					duration={10000}
					position="top-center"
				>
					{alertMessage}
				</Alert>
			)}
			<div className="flex gap-2 mb-4">
				<Input
					placeholder="Add new task..."
					value={newTodo}
					onChange={handleNewTodoChange}
				/>
				<Button variant="primary" onClick={addTodo}>
					Add
				</Button>
			</div>

			<Tabs defaultActiveKey={0}>
				<TabList>
					<TabTrigger tabKey={0}>
						<span className="font-medium">Active Tasks</span>
					</TabTrigger>
					<TabTrigger tabKey={1}>
						<span className="font-medium">Completed Tasks</span>
					</TabTrigger>
				</TabList>
				<TabContent tabKey={0}>
					<ul className="list-disc p-2">
						{todos
							.filter((todo) => !todo.completed)
							.map((todo, index) => (
								<li key={index} className="flex gap-2 items-center mb-1">
									<Checkbox
										checked={todo.completed}
										onChange={() => toggleTodo(index)}
									/>
									<span className={`font-medium ${todo.completed ? "line-through text-gray-400" : ""}`}>
										{todo.text}
									</span>
									<Button variant="danger" size="xs" onClick={() => deleteTodo(index)}>
										Delete
									</Button>
								</li>
							))}
					</ul>
				</TabContent>
				<TabContent tabKey={1}>
					<ul className="list-disc p-2">
						{todos
							.filter((todo) => todo.completed)
							.map((todo, index) => (
								<li key={index} className="flex gap-2 items-center mb-1">
									<Checkbox
										checked={todo.completed}
										onChange={() => toggleTodo(index)}
									/>
									<span className={`font-medium ${todo.completed ? "line-through text-gray-400" : ""}`}>
										{todo.text}
									</span>
									<Button variant="danger" size="xs" onClick={() => deleteTodo(index)}>
										Delete
									</Button>
								</li>
							))}
					</ul>
				</TabContent>
			</Tabs>
		</div>
	);
}

