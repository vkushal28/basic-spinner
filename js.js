document.querySelector(".main p").style.display = "none";
document.querySelector(".main").classList.add("spinner-1");

setTimeout(() => {
  document.querySelector(".main").classList.remove("spinner-1");
  document.querySelector(".main p").style.display = "block";
},30000);