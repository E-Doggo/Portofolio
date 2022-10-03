let buttonColor = document.querySelector("#selectManual");
let buttonSelectores = document.querySelector("#selectCICEI");
let buttonClases = document.querySelector("#selectMoneyApp");



buttonColor.addEventListener("click", (event) =>{
    event.preventDefault();
    $('#description').load("../div_text/manual.txt");
    document.getElementById("description").style.overflowY = "scroll";
    document.getElementById("description").style.border = "2px solid #F2F2F2";
    // document.getElementById("description").style.borderRadius = "2em";

}) 

buttonSelectores.addEventListener("click", (event) =>{
    event.preventDefault();
    $('#description').load("../div_text/CICEI.txt");
}) 

buttonClases.addEventListener("click", (event) =>{
    event.preventDefault();
    $('#description').load("../div_text/money.txt");
}) 
