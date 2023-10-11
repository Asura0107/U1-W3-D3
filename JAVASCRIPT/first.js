window.onload = function () {
  const addtask = document.getElementById("todolist");
  const btn2 = document.getElementById("btn");
  const tasklist = document.getElementById("listul");

  btn2.onclick = function () {
    const tasktext = addtask.value;
    const items = document.createElement("li");
    items.innerText = tasktext;
    items.className = "classli";
    console.log(items);
    tasklist.appendChild(items);
  };
  tasklist.value = "";
};
