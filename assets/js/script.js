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

const retrieveAndRender = () => {

  const retrieveLocalStorageKey = Object.keys(localStorage);
  const retrieveLocalStorageStatus = Object.values(localStorage);
  console.log(retrieveLocalStorageKey);
  console.log(retrieveLocalStorageStatus);

  for (let key of retrieveLocalStorageKey) {
    const value = key;
    const status = localStorage.getItem(value);

    const task = new taskGenerator(value, status);
    task.render();
  }
  
};

const statusContainer = (container, event) => {

  if (container.innerHTML.trim() === "") {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
};

class taskGenerator {
  value = "";
  status = "";

  constructor(value, status) {
    this.value = value;
    this.status = status;
  }

  render() {
    const taskContainer = document.createElement("div");
    taskContainer.className = "taskContainer";
    taskContainer.id = this.status;
    
    const taskText = document.createElement("p");
    taskText.textContent = this.value;
    taskContainer.appendChild(taskText);

    const rojitoButton = document.createElement("button");
    rojitoButton.className = "botonRojito";
    taskContainer.appendChild(rojitoButton);

    const azulitoButton = document.createElement("button");
    azulitoButton.className = "botonAzulito";
    taskContainer.appendChild(azulitoButton);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    taskContainer.appendChild(deleteButton);

    if (this.status === "To do") {
      console.log("To do");
      containerToDo.appendChild(taskContainer);
    } else if (this.status === "Doing") {
      console.log("Doing");
      containerDoing.appendChild(taskContainer);
    } else {
      console.log("Done");
      containerDone.appendChild(taskContainer);
    }

    rojitoButton.addEventListener("click", () => {
      console.log("rojo");

      if (this.status === "Done") {
        this.status = "Doing";
        taskContainer.dataset.status = "Doing";
        localStorage.setItem(this.value, "Doing");
        retrieveAndRender();

      } else if (this.status === "Doing") {
        this.status = "To do";
        taskContainer.dataset.status = "To do";
        localStorage.setItem(this.value, "To do");
        retrieveAndRender();
      }
    })

    azulitoButton.addEventListener("click", () => {
      console.log("azul")

      if (this.status === "To do") {
        this.status = "Doing";
        taskContainer.dataset.status = "Doing";
        localStorage.setItem(this.value, "Doing");
        retrieveAndRender();

      } else if (this.status === "Doing") {
        this.status = "Done";
        taskContainer.dataset.status = "Done";
        localStorage.setItem(this.value, "Done");
        retrieveAndRender();
      }

    });

    deleteButton.addEventListener("click", () => {
      console.log("BANHAMMER!!!!!")
      localStorage.removeItem(this.value)
      localStorage.removeItem(this.status)
      retrieveAndRender();
    });

  }
}



window.onload = () => {
  retrieveAndRender();
  statusContainer(containerToDo);
  statusContainer(containerDoing);
  statusContainer(containerDone);
};

textbox.addEventListener("submit", storeLocally);
textbox.addEventListener("submit", retrieveAndRender);

textbox.addEventListener("submit", (event) => statusContainer(containerToDo, event));
textbox.addEventListener("submit", (event) => statusContainer(containerDoing, event));
textbox.addEventListener("submit", (event) => statusContainer(containerDone, event));