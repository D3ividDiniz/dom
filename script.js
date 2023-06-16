// EVENTOS LISTENNERS
// click ; blur; onkeydown onkeyup onkeypress onmouseenter onmouseleave 

const navBarItems = document.getElementsByClassName("ul__links");

console.log(navBarItems)

const logoWeb = document.getElementById("header__logo");

function aprecerAlertLogo(){
    alert("voce alertou");
}

// ()=>{

// }

const topBar = document.body.getElementsByTagName("header");
console.log(topBar);

for (let i = 0; i < navBarItems.length ; i++){
    navBarItems[i].addEventListener("mouseenter",()=>{
        topBar[0].style.height="80%";
    })
}

topBar[0].addEventListener("mouseleave", ()=>topBar[0].style.height="")

// logoWeb.addEventListener("mouseenter", aprecerAlertLogo)



// aprecerAlertLogo()