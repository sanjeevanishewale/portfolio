var user, mob, subject, text, access;

const read = () => {
    access = document.querySelectorAll(".inp");
    user = access[0].value;
    mob = access[1].value;
    subject = access[2].value;
    text = access[3].value;
}

const sendMail = () => {
    if (!user || !mob || !subject || !text) {
        window.alert("Fill the fileds properly....")
    }
    else {

        var link = "mailto:sanjeevanishewale777@gmail.com"
            + "?cc="
            + "&subject=" + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(` name : ${user} \n Mobile Number : ${mob} \n Message : ${text} `)
            ;

        window.location.href = link;
        access[0].value = "";
        access[1].value = "";
        access[2].value = "";
        access[3].value = "";
    }

}

//sticky navbar
var nav = document.querySelector("nav");
var scrollBtn = document.querySelector(".scroll_To_Top")

window.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 200) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    }
    else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
});

//menu button
var menuBtn = document.querySelector(".menu_btn");
var cancelBtn = document.querySelector(".cancel_btn");
var body = document.querySelector("body");
var navBar = document.querySelector(".navbar");

const addActive = ()=>{
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none"
}

const removeActive = ()=>{
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto"
}