//CS10 GRADE CALCULATOR

//BTN EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let P = +document.getElementById("P").value;
  let r = +document.getElementById("r").value;
  let n = +document.getElementById("n").value;
  let t = +document.getElementById("t").value;

  //PROCESS
  let A = (P*(1+(r/n))**(n*t))

 //OUTPUT
document.getElementById("output").innerHTML = A;
}
