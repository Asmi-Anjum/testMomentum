const imageContainer = document.getElementById("image-container");



const apiKey ="6KDyI1m5QNSK6qSrIxmCl452f_G7VbIeCVU9g2mRiZ8";
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const api_url = `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&w=${screenWidth}&h=${screenHeight}&client_id=${apiKey}`;

async function fetchImages(url) {

    try {        
            const response = await fetch(url);
            const data = await response.json();
            document.body.style.backgroundImage = `url('${data.urls.full}')`;
        
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

fetchImages(api_url);

const time = document.getElementById("time");

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");

    hours = hours % 12 || 12; 

    const timeString = `${hours}:${minutes} `;
    time.innerHTML = timeString;
}

setInterval(updateTime, 1000);
updateTime();

const greet = document.getElementById("greeting");

function setGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    greet.innerText = `Hello, ${greeting}`;
}
setGreeting();


const question = document.getElementById("question");
const input = document.getElementById("goalInput");
const goalContainer = document.getElementById("goalContainer");
const goalDisplay = document.getElementById("goalDisplay");
const deleteTask = document.getElementById("deleteTask");
deleteTask.innerHTML = "\u00d7";


input.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && input.value.trim() !== "") {
        const task = input.value.trim();
        localStorage.setItem("task", task);

        question.style.display = "none";
        goalDisplay.textContent = task;
        input.style.display = "none"; 
        goalDisplay.classList.remove("hidden"); 
        goalDisplay.classList.add("goal-display");
    }
});

function loadTask() {
    const savedTask = localStorage.getItem("task");
    if (savedTask) {
        goalDisplay.textContent = savedTask;
        question.style.display = "none";

        input.style.display = "none"; // Hide input if a task is stored
        goalDisplay.classList.remove("hidden"); // Show saved task
        goalDisplay.classList.add("goal-display");
    }
}
window.onload = loadTask;

deleteTask.addEventListener("click", () => {
    localStorage.removeItem("task"); // Remove from localStorage
    goalContainer.classList.add("hidden"); // Hide goal
    goalDisplay.textContent = ""; 
    question.style.display = "block"; 
    input.style.display = "block"; 
    deleteTask.style.display = "none"; 
    input.value = ""; // Clear input
});


const quote = document.getElementById("quote");
const quote_url = "https://quotes-api-self.vercel.app/quote";

const getquote = async(url) => {
  try{
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.quote;
  }
  catch(e){
    quote.innerHTML = `error in fetching the data `;
  }

}

getquote(quote_url);

document.addEventListener("DOMContentLoaded", () => {
    const taskButton = document.getElementById("taskButton");
    const taskPopup = document.getElementById("taskPopup");
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${task} <span class="delete" data-index="${index}"> \u00d7 </span>`;
            taskList.appendChild(li);
        });
    }

    renderTasks();

    // Show/Hide Task Popup
    taskButton.addEventListener("click", () => {
        taskPopup.classList.toggle("pop");
    });

    // Add Task
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && taskInput.value.trim() !== "") {
            tasks.push(taskInput.value.trim());
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            renderTasks();
        }
    });

    // Delete Task
    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            const index = e.target.getAttribute("data-index");
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        }
    });

});
