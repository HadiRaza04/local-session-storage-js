localStorage.setItem("name", "Hadi");
document.getElementById("demo").innerHTML = localStorage.getItem("name");
localStorage.setItem("email", "hadi@gmail.com");
document.getElementById("demo1").innerHTML = localStorage.getItem("email");

sessionStorage.setItem("name", "Raza");
document.getElementById("demo2").innerHTML = sessionStorage.getItem("name");
sessionStorage.setItem("email", "raza@gmail.com");
document.getElementById("demo3").innerHTML = sessionStorage.getItem("email");

