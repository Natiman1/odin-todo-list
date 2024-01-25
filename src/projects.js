export default function Project(name) {
	this.name = name;
	this.projectToDos = [];
}

Project.prototype.addTodo = function (todo) {
	this.projectToDos.push(todo);
};

export let projectList = [];

if (localStorage.getItem("projects") === null) {
	projectList = [
		{
			name: "Personal",
			projectToDos: [
				{
					title: "Go to gym",
					project: "Personal",
					dueDate: new Date(),
					priority: "high",
					completed: false,
				},
			],
		},
		{
			name: "Work",
			projectToDos: [
				{
					title: "Get some work done",
					project: "School",
					dueDate: "02/5/2024",
					priority: "mid",
					completed: false,
				},
			],
		},
	];
} else {
	const projectsFromStorage = JSON.parse(localStorage.getItem("projects"));
	projectList = projectsFromStorage;
}
