import "./TaskItem.css";

function MarkButton(props) {
	if (props.completed)
		return <button disabled>Set as Done</button>;
	else
		return <button onClick={(e) =>
		{
			e.preventDefault();
			props.onClick({
				target: e.target,
				id: props.taskId
			});
		}}>Set as Done</button>;
}
function TaskItem(props){
	return (
		<div className="task-item-container">
			<span className={"task-label " + (props.completed ? "done" : "")}>({props.taskId}) To-Do: {props.taskTitle}</span>
			<MarkButton className="task-button" taskId={props.taskId} completed={props.completed} onClick={props.onClick}/>
		</div>
	);
}

export default TaskItem;