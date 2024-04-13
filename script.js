const text = document.getElementById("input");

const button = document.getElementById("add");

const list = document.getElementById("list");

button.addEventListener("click", function () {
  console.log(text.value);
  const li = document.createElement("li");
  const chk = document.createElement("input");
  const listbutton = document.createElement("button");

  li.innerText = text.value;

  chk.setAttribute("type", "checkbox");

  listbutton.innerText = "삭제";

  list.appendChild(li);
  list.appendChild(listbutton);
  list.appendChild(chk);

  chk.addEventListener("click", function (event) {
    console.log(event);
    if (event.target.checked == true) {
      li.style.textDecoration = "line-through";
    } else if (event.target.checked == false) {
      li.style.textDecoration = "none";
    }
  });

  listbutton.addEventListener("click", function () {
    li.remove();
    listbutton.remove();
    chk.remove();
  });
});
