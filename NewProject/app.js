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

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url1 = "https://quotes-api-self.vercel.app/quote";


const getquote = async(url) => {
  try{
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  }
  catch(e){
    quote.innerHTML = `error in fetching the data `;
  }

}

getquote(api_url1);


const inputBox = document.getElementById("goalInput");
const listContainer = document.getElementById("list-container");


inputBox.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        if (inputBox.value.trim() === '') {
            alert("You must write something!");
        } 
        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            saveData();
            inputBox.value = "";
        }
    }
});
listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        // console.log(e.target.tagName);
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // console.log(e.target.tagName);
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData=()=>{
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTask=()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();