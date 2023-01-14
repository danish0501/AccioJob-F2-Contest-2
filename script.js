let dataArr = [];

let divData = document.getElementById("arrData");

function generateList(arg) {
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    items += `
        <li>Name: ${arg[i].name} &nbsp;&nbsp;&nbsp;&nbsp;Profession:${arg[i].profession}
        &nbsp;&nbsp;&nbsp;&nbsp;Age:${arg[i].age}</li>`;
  }
  return items;
}

document.getElementById("arrData").innerHTML = `<ol>${generateList(dataArr)}</ol>`;

let input = document.getElementsByTagName("input");

let form2 = document.forms["forAdd"];

let button1 = document.getElementById("btn1");
button1.addEventListener("click", (e) => {
  if (
    input.name.value === "" ||
    input.profession.value === "" ||
    input.age.value === ""
  ) 
  {
    document.getElementById("red").innerHTML = 
    `<p>Error : Please Make sure All the fields are filled before adding in an employee !</p>`;
  }
});

form2.onsubmit = function (e) {
  e.preventDefault();

  dataArr.push({
    id: dataArr.length + 1,
    name: input.name.value,
    profession: input.profession.value,
    age: input.age.value,
  });
  console.log(dataArr);
  input.name.value = "";
  input.profession.value = "";
  input.age.value = "";

  document.getElementById("red").innerHTML = `<p></p>`;

  document.getElementById("green").innerHTML = `<p>Success : Employee Added!</p>`;

  document.getElementById("arrData").innerHTML = `<ol>${generateList(dataArr)}</ol>`;
};
