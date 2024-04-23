const text = document.getElementById("input");

const button = document.getElementById("add");

const list = document.getElementById("listtext");

const box = document.getElementsByClassName("list");

button.addEventListener("click", function () {
  console.log(text.value);
  const li = document.createElement("li");
  const chk = document.createElement("input");
  const delbutton = document.createElement("button");
  const editbutton = document.createElement("button");

  delbutton.className = "delbutton";
  editbutton.className = "editbutton";

  li.innerText = text.value;

  chk.setAttribute("type", "checkbox");

  delbutton.innerText = "삭제";
  editbutton.innerText = "수정";

  list.appendChild(li);
  list.appendChild(chk);
  list.appendChild(delbutton);
  list.appendChild(editbutton);

  chk.addEventListener("click", function (event) {
    console.log(event);
    if (event.target.checked == true) {
      li.style.textDecoration = "line-through";
    } else if (event.target.checked == false) {
      li.style.textDecoration = "none";
    }
  });

  delbutton.addEventListener("click", function () {
    li.remove();
    delbutton.remove();
    chk.remove();
    editbutton.remove();
  });

  editbutton.addEventListener("click", function () {
    li.innerText = text.value;
  });
});
