const body = document.querySelector("body");
const arrow_btn = document.querySelector(".greaterthan");
const sideBar = document.querySelector(".sidebar");
const my_h2 = document.querySelector(".my_h2");
const lessThan_arrow = document.querySelector(".lessthan");
const f = document.querySelector('#facebook');
const m = document.querySelector('#messenger');
const t = document.querySelector('#telegram');
const d = document.querySelector('#discord');

arrow_btn.addEventListener("click",()=>{
    // body.style.background = "#fff";
    arrow_btn.style.visibility = "hidden";
    sideBar.style.minWidth = "50%" ;
    my_h2.style.width = "57px";
    lessThan_arrow.style.display = "block";
    sideBar.classList.add("t_out");
    sideBar.classList.remove("t_in");
});

lessThan_arrow.addEventListener("click",()=>{
    // body.style.background = "#95FFD2";
    arrow_btn.style.visibility = "visible";
    my_h2.style.width = "185px";
    sideBar.classList.remove("t_out");
    sideBar.classList.add("t_in");
    lessThan_arrow.style.display = "none";
});


