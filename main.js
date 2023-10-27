//CS10 COMPOUND INTEREST CALCULATOR BY ZAINA

//BTN EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT VARIABLES

  //INITIAL INVESTEMENT
  let P = +document.getElementById("P").value;
  //RATE OF RETURN
  let r = +document.getElementById("r").value;
  //NUMBER OF TIMES COMPOUNDED ANUALLY
  let n = +document.getElementById("n").value;
  //NUMBER OF YEARS OF INVESTEMENT
  let t = +document.getElementById("t").value;

  //PROCESS (FORMULA)
  let A = (P*(1+(r/n))**(n*t))

 //OUTPUT
document.getElementById("output").innerHTML = A;
}
