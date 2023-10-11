window.onload = () => {
  //   const button1 = function () {
  const main = document.getElementsByTagName("main");
  const button = document.querySelector("button");
  const listinput = document.getElementById("todolist");
  const listul = document.createElement("ul");
  const contenitore = document.createElement("div");
  console.log(listul);

  button.addEventListener("click", function (e) {
    // console.log(listinput.value);
    const items = document.createElement("li");
    console.log(items);
    listul.appendChild(items);
    console.log(items);
  });
  contenitore.appendChild(listul);
  main.appendChild(contenitore);

  listinput.value = "";
  //

  //   button.onclick = function () {
  //     const items = document.createElement("li");
  //     listul.appendChild(items);
  //   };
  //
  //   console.log(listul);
  //   body.appendChild(listul);
  //   };
};
