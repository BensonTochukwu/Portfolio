
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-content");

function opentab(event,tabname) {
    // Remove the active class from all tab links
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    // Remove the active class from all tab contents
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    // Add the active class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Add the active class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}


let sideMenu = document.getElementById("sidemenu")

function openMenu(){
    sideMenu.style.right = "0"
}

function closeMenu(){
    sideMenu.style.right = "-200px"
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbydSGGT9oogf8hpuSHrbQtf_FijVybrTZ3zAGOti-KIVrbFDAF-qY8b7xw0JaaDX9aKIQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Message sent successfully",
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000),
        form.reset()
    }  
    )
    .catch(error => console.error('Error!', error.message))
})