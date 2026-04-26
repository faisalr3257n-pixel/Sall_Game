function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(u && p){
    document.getElementById("msg").innerText = "Connecting server...";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  } else {
    document.getElementById("msg").innerText = "Isi dulu.";
  }
}