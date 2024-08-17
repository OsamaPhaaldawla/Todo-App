// Sun & Moon Icons
let moon_icon = document.querySelector(".moon");
let sun_icon = document.querySelector(".sun");

// dark theme
moon_icon.addEventListener("click", () => {
  document.body.classList.add("dark");
});
// light theme
sun_icon.addEventListener("click", () => {
  document.body.classList.remove("dark");
});

// list Content
let listContent = document.querySelector(".list-content");
// Adding item to the list
let adding_input = document.querySelector(".new input");
// list items
let items = [];
adding_input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    // Add the item to the list
    let listItem = document.createElement("li");
    listContent.appendChild(listItem);

    // Create the item circle
    let itemCircle = document.createElement("div");
    itemCircle.classList.add("circle");
    listItem.appendChild(itemCircle);
    let circleImg = document.createElement("img");
    circleImg.src = "images/icon-check.svg";
    checkEvents(itemCircle);
    itemCircle.appendChild(circleImg);

    // Add the item text
    let itemText = document.createElement("span");
    itemText.innerHTML = adding_input.value;
    checkEvents(itemText);
    listItem.appendChild(itemText);

    // Add the cross icon
    let crossIcon = document.createElement("img");
    crossIcon.classList.add("cross");
    crossIcon.src = "images/icon-cross.svg";
    crossIcon.alt = "cross";
    removeElement(crossIcon);
    listItem.appendChild(crossIcon);
    // Reset Input Value and adding items and check events to the list
    adding_input.value = "";
    AddingElementsToList();
  }
});

// Adding Check Event
function checkEvents(ele) {
  ele.addEventListener("click", () => {
    ele.parentElement.classList.toggle("check");
    leftElements();
  });
}
// Remove Event
function removeElement(ele) {
  ele.addEventListener("click", () => {
    ele.parentElement.remove();
    AddingElementsToList();
  });
}

function AddingElementsToList() {
  items = document.querySelectorAll(".list-content li span");
  leftElements();
}

// Left Elements
function leftElements() {
  let leftItems = document.querySelector("span.left .count");
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (!items[i].parentElement.classList.contains("check")) {
      count++;
    }
  }
  leftItems.innerHTML = count;
}

// display all Elements
document.querySelector("span.all").addEventListener("click", (e) => {
  listContent.innerHTML = "";
  removeActiveClass();
  e.target.classList.add("active");
  for (let i = 0; i < items.length; i++) {
    listContent.appendChild(items[i].parentElement);
  }
});

// display active Elements
document.querySelector("span.active-span").addEventListener("click", (e) => {
  listContent.innerHTML = "";
  removeActiveClass();
  e.target.classList.add("active");
  for (let i = 0; i < items.length; i++) {
    if (!items[i].parentElement.classList.contains("check")) {
      listContent.appendChild(items[i].parentElement);
    }
  }
});

// Display Completed Elements
document.querySelector("span.completed").addEventListener("click", (e) => {
  listContent.innerHTML = "";
  removeActiveClass();
  e.target.classList.add("active");
  for (let i = 0; i < items.length; i++) {
    if (items[i].parentElement.classList.contains("check")) {
      listContent.appendChild(items[i].parentElement);
    }
  }
});

// Remove Active Class
function removeActiveClass() {
  document.querySelectorAll(".details span").forEach((ele) => {
    ele.classList.remove("active");
  });
}

// Clear Completed Elements
document.querySelector("span.clear-completed").addEventListener("click", () => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].parentElement.classList.contains("check")) {
      items[i].parentElement.remove();
    }
  }
  AddingElementsToList();
});
