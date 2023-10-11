window.onload = function () {
  const addtask = document.getElementById("todolist");
  const btn2 = document.getElementById("btn");
  const tasklist = document.getElementById("listul");

  btn2.onclick = function () {
    const tasktext = addtask.value;
    const items = document.createElement("li");
    items.className = "classli";
    const lispan = document.createElement("span");
    lispan.innerText = tasktext;
    // const newDelate = document.createElement("span");
    // newDelate.innerText = "Delate";
    // newDelate.className = "bye";
    const divbtn3 = document.createElement("div");
    divbtn3.className = "divbtn3";

    const btn3 = document.createElement("button");
    btn3.className = "classbtn3";
    btn3.innerText = "Delate";
    console.log(items);
    // items.appendChild(newDelate);
    divbtn3.appendChild(btn3);
    items.appendChild(lispan);
    items.appendChild(divbtn3);
    tasklist.appendChild(items);

    btn3.onclick = function (e) {
      const clickbtn = e.target;
      clickbtn.parentNode.parentNode.remove();
    };
  };
  addtask.value = "";
};
