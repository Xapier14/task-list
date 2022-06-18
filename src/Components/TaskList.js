import React, { Component } from "react"
import TaskItem from "./TaskItem"
import "./TaskList.css"

class TaskList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [{
				id: 1,
				title: "Learn React",
				completed: false
			}, {
				id: 2,
				title: "Learn Vue",
				completed: false
			}, {
				id: 3,
				title: "Learn Angular",
				completed: false
			}],
			currentTaskInput: ""
		};
		this.handleClick = this.handleClick.bind(this);
		this.addTask = this.addTask.bind(this);
	}
	handleClick(e) {
		const copy = [...this.state.tasks];
		copy.forEach((task) => {
			if (task.id === e.id) {
				task.completed = !task.completed;
			}
		});
		this.setState({
			tasks: copy
		});
	}
	addTask() {
		const copy = [...this.state.tasks];
		copy.push({
			id: copy.length + 1,
			title: this.state.currentTaskInput,
			completed: false
		});
		this.setState({
			tasks: copy,
			currentTaskInput: ""
		});
		document.getElementById("name").value = "";
	}
	render() {
		return (
			<div className="task-list">
				<h1>Task List</h1>
				<hr/>
				<ul>
					{this.state.tasks.map((task) => (
						<li className="task-item" key={task.id}>
							<TaskItem
								taskId={task.id}
								taskTitle={task.title}
								completed={task.completed}
								onClick={this.handleClick}
							/>
						</li>
					))}
				</ul>
				<hr/>
				<input
					type="text"
					id="name"
					onChange={(e) => {
						this.setState({
							currentTaskInput: e.target.value
						});
					}}
				/>
				<button onClick={this.addTask}>Add Task</button>
			</div>
		);
	}
}

export default TaskList;