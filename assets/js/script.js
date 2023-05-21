const textbox = document.querySelector(".textbox");

let keyNum = 1;

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
  
  keyNum++;

  localStorage.setItem(input.value, status);

   
};

const showList = () => {
  const retrieveLocalStorage = Object.keys(localStorage);
  console.log(retrieveLocalStorage);
};

textbox.addEventListener("submit", storeLocally);
textbox.addEventListener("submit", showList);
