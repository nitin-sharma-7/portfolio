const inputs = [...document.querySelectorAll(".input")];
const addBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
let datas = JSON.parse(localStorage.getItem("localDatas")) || [];

//
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputs[0].value !== "" && inputs[0].value !== "") {
    let data = {
      fname: inputs[0].value,
      lname: inputs[1].value,
    };
    datas.push(data);
    render(datas);
  }
  //   console.log(datas);
  addToLocal(datas);

  inputs[0].value = "";
  inputs[1].value = "";
  inputs[0].focus();
});

function addToLocal(p) {
  localStorage.localDatas = JSON.stringify(p);
}
function clearLocal() {
  localStorage.clear();
}
function render(datas) {
  container.innerHTML = "";
  datas.map((data, index) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    div.classList.add("student");
    p.innerText = `${data.fname} ${data.lname}`;
    delBtn.innerText = "X";
    delBtn.classList.add("delbtn");
    delBtn.addEventListener("click", () => del(index));
    editBtn.innerText = "edit";
    editBtn.classList.add("edit");
    editBtn.addEventListener("click", () => edit(index));
    div.append(p, delBtn, editBtn);
    container.append(div);
  });
}

function del(index) {
  //   console.log(index);
  datas.splice(index, 1);
  clearLocal();
  addToLocal(datas);
  render(datas);
}

//
function edit(index) {
  //   console.log(index);
  inputs[0].value = datas[index].fname;
  inputs[1].value = datas[index].lname;
  del(index);
}
// console.log(JSON.parse(localStorage.getItem("localDatas")));
render(JSON.parse(localStorage.getItem("localDatas")));
