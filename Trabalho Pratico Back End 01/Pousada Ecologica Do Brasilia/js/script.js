document.getElementById("botao-menu").addEventListener("click", function(){
    var navbar = document.getElementById("navbar-secundaria");
    if (navbar.style.display === "none"){
        navbar.style.display = "block";
    }else{
        navbar.style.display = "none";
    }
});