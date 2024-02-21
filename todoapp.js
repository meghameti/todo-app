<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }

        #taskInput {
            padding: 5px;
            width: 200px;
        }

        #taskList {
            list-style: none;
            padding: 0;
        }

        .taskItem {
            margin: 5px;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            display: inline-block;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h2>Todo App</h2>
    
    <input type="text" id="taskInput" placeholder="Add a new task">
    <button onclick="addTask()">Add Task</button>

    <ul id="taskList"></ul>

    <script>
        function addTask() {
            var taskInput = document.getElementById("taskInput");
            var taskList = document.getElementById("taskList");

            var taskText = taskInput.value.trim();
            if (taskText !== "") {
                var listItem = document.createElement("li");
                listItem.className = "taskItem";
                listItem.innerHTML = taskText + '<span onclick="removeTask(this)"> &#10006;</span>';
                taskList.appendChild(listItem);
                taskInput.value = "";
            }
        }

        function removeTask(spanElement) {
            var taskList = document.getElementById("taskList");
            var listItem = spanElement.parentNode;
            taskList.removeChild(listItem);
        }
    </script>
</body>
</html>
