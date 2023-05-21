const textbox = document.querySelector(".textbox");
const containerToDo = document.querySelector(".containerToDo");
const containerDoing = document.querySelector(".containerDoing");
const containerDone = document.querySelector(".containerDone");

const stringifyThis = (x) =>{
    JSON.stringify(x);
}

const parseThis = (x) => {
    JSON.parse(x);
}

const storeLocally = (event) => {
  event.preventDefault();

  const input = document.querySelector(".writtenTask");

  const status = "To do"

  localStorage.setItem(input.value, status);

   
};

const retrieveInfo = () => {
  const retrieveLocalStorageKey = Object.keys(localStorage);
  const retrieveLocalStorageStatus = Object.values(localStorage);
  console.log(retrieveLocalStorageKey);
  console.log(retrieveLocalStorageStatus);
};

const renderLists = () => {
    
};

const statusContainer = (container) => {
    if (container.innerHTML.trim() === "") {
        container.style.display = "none";
} else {
    container.style.display = "block";
}}

const statusChanger = () => {
}

textbox.addEventListener("submit", statusContainer(containerToDo));
textbox.addEventListener("submit", statusContainer(containerDoing));
textbox.addEventListener("submit", statusContainer(containerDone));

textbox.addEventListener("submit", storeLocally);
textbox.addEventListener("submit", retrieveInfo);
