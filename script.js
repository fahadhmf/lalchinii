// ==========================
// Lalchini PWA Script v1.0
// ==========================

// Splash Screen
window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("app").style.display = "block";
    }, 2000);

});

// Dark Mode

const darkBtn = document.getElementById("darkBtn");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    darkBtn.innerHTML = "☀️";

}

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        darkBtn.innerHTML="☀️";

    }else{

        localStorage.setItem("theme","light");

        darkBtn.innerHTML="🌙";

    }

});

// Search

const searchInput=document.querySelector(".search input");

const searchButton=document.querySelector(".search button");

searchButton.addEventListener("click",()=>{

    let text=searchInput.value.trim();

    if(text===""){

        alert("Please enter something.");

    }else{

        alert("Searching: "+text);

    }

});

// Card Click

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

alert(card.innerText);

});

});

// Bottom Navigation

document.querySelectorAll("nav button").forEach(btn=>{

btn.addEventListener("click",()=>{

console.log("Navigation Clicked");

});

});

// Online / Offline

window.addEventListener("online",()=>{

console.log("Internet Connected");

});

window.addEventListener("offline",()=>{

alert("No Internet Connection");

});

// Register Service Worker

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("service-worker.js")

.then(()=>{

console.log("Service Worker Registered");

})

.catch(err=>{

console.log(err);

});

});

}
// Login

document.getElementById("loginBtn").onclick=()=>{

let user=document.getElementById("username").value.trim();

let pass=document.getElementById("password").value.trim();

if(user===""||pass===""){

showToast("Please fill all fields");

return;

}

localStorage.setItem("user",user);

showToast("Welcome "+user);

};

// Toast

function showToast(text){

let toast=document.getElementById("toast");

toast.innerHTML=text;

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},2500);

}

// Live Search

searchInput.addEventListener("keyup",()=>{

console.log(searchInput.value);

});

// Bottom Navigation

document.querySelectorAll("nav button").forEach((btn,index)=>{

btn.onclick=()=>{

switch(index){

case 0:

showToast("Home");

break;

case 1:

showToast("Search");

break;

case 2:

showToast("Profile");

break;

case 3:

showToast("Settings");

break;

}

};

});