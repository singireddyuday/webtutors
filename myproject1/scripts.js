import { Tutorials } from "./Data/Tutorials.js"

// Selection mobile btn
let MenuBtnMobileE1 = document.getElementById("menu-btn-mobile")
let MenuBtnMobileE1OpenBoolen = true
let MobileMenuNavE1 = document.getElementById("mobile-menu-nav")
MenuBtnMobileE1.addEventListener("click", () => {
    if (!MenuBtnMobileE1OpenBoolen) {
        MobileMenuNavE1.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileE1OpenBoolen = true
    } else {
        MobileMenuNavE1.classList.add("mobile-menu-nav-hidden")
        MenuBtnMobileE1OpenBoolen = false
    }
})

let MobileNavCloseE1 = document.getElementById("mobile-nav-close")
MobileNavCloseE1.addEventListener("click", () => {
    MobileMenuNavE1.classList.remove("mobile-menu-nav-hidden")
    MenuBtnMobileE1OpenBoolen = true
})

// Tutorials button
const NestedNavigationContainer = document.getElementById("nested-navigation-container_id")
let TutorialsE1 = document.getElementById("Tutorials-btn")
const NestedNavigitionContainerCloseBtn = document.getElementById("nested-navigition_container_close-Btn")
TutorialsE1.addEventListener("click", toggleTutorials)
NestedNavigitionContainerCloseBtn.addEventListener("click", toggleTutorials)

function toggleTutorials() {
    TutorialsE1.classList.toggle("bg-black")
    TutorialsE1.classList.toggle("text-white")
    NestedNavigationContainer.classList.toggle("nested-navigation_hidden")
}

// Tutorial Data
console.log(Tutorials)

let NestedNavigationContainerId = document.getElementById("nested-navigation-container_id");
let NestedNavigationHeading = '';
let NestedNavigationTab1 = '';
let NestedNavigationTab2 = '';
let NestedNavigationTab3 = '';
let NestedNavigationTab4 = '';

// Heading
NestedNavigationHeading += `<h1>${Tutorials.name}</h1>`;

// Sub menu
NestedNavigationTab1 += `<h2>${Tutorials.HTMLAndCSS.name}</h2>`;
Tutorials.HTMLAndCSS.menu.forEach(el => {
    NestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`;
});
// NestedNavigationTab1 += `<h2>${Tutorials.DataAnalytics.name}</h2>`;
// Tutorials.DataAnalytics.menu.forEach(el => {
//     NestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`;
// });

NestedNavigationTab2 += `<h2>${Tutorials.JavaScript.name}</h2>`;
Tutorials.JavaScript.menu.forEach(el => {
    NestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`;
});
NestedNavigationTab2 += `<h2>${Tutorials.WebBuilding.name}</h2>`;
Tutorials.WebBuilding.menu.forEach(el => {
    NestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`;
});

NestedNavigationTab3 += `<h2>${Tutorials.Backend.name}</h2>`;
Tutorials.Backend.menu.forEach(el => {
    NestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`;
});

// Render all the menu
NestedNavigationContainerId.innerHTML = `${NestedNavigationHeading}
<div class="nested-navigation-container_content_data">
        <div class="nested-navigation_item">
            ${NestedNavigationTab1}
        </div>
        <div class="nested-navigation_item">
            ${NestedNavigationTab2}
        </div>
        <div class="nested-navigation_item">
            ${NestedNavigationTab3}
        </div>
        <div class="nested-navigation_item">
            ${NestedNavigationTab4}
        </div>
</div>`;

/********mobile_tutorial_menu***********/

const tutorialmenulinkmobileE1 = document.getElementById("tutorial_menulink_mobile")
let tutorialmenumobileE1 = document.getElementById("tutorial_menu_mobile")

let tutorialMenuTab_Mobile = NestedNavigationHeading + NestedNavigationTab1 + NestedNavigationTab2 + NestedNavigationTab3
tutorialmenulinkmobileE1.addEventListener("click", () => {
    tutorialmenulinkmobileE1.classList.toggle("mobile_menu_Active")
    tutorialmenumobileE1.classList.toggle("mobile_menuActive_tutorial")

    tutorialmenumobileE1.innerHTML = tutorialMenuTab_Mobile

})
/*****************reference************************/
function toggleReferencesDropdown() {
    var dropdown = document.getElementById("references-dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}




/**********************************************************************************************************/
const htmlcode = `
<!DOCTYPE html>
<html>
<head>
<title>HTML Tutorial</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
`
document.getElementById("htmlCode").innerText = htmlcode

/*****************css*************************/
const CSSCode = `
body {
    background-color: lightblue;
}

h1 {
    color: white;
    text-align: center;
}

p {
    font-family: verdana;
    font-size: 20px;
}
`
document.getElementById("CSSCode").innerText = CSSCode

/***************java_script*****************************/
const javascriptCode = `
<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
    let x = document.getElementById("demo");
    x.style.fontSize = "25px";
    x.style.color = "red";
}
</script>
`
document.getElementById("javascriptCode").innerText = javascriptCode

/***********************python**********************************************/
const pythonCode = `
if 5 > 2:
    print("Five is greater than two!")
`
document.getElementById("pythonCode").innerText = pythonCode

/*************************SQL***********************************************/
const sqlCode = `
SELECT * FROM Customers
WHERE Country='Mexico';
`
document.getElementById("sqlCode").innerText = sqlCode

/*******************************************************************************/
//*************************************codeEditor******************************//
let ImageAnimationCodeEditor = document.getElementById("animationcodeEditorpart")
let codeEditor_backendE1 = document.getElementById("codeEditor_backend")
let codeEditor_frontend = document.getElementById("codeEditor_frontend")

codeEditor_backendE1.addEventListener("click", () => {
    ImageAnimationCodeEditor.src = "https://www.w3schools.com/tryit/best2.gif"

    codeEditor_frontend.classList.toggle("active")
    codeEditor_backendE1.classList.toggle("active")
})
codeEditor_frontend.addEventListener("click", () => {
    ImageAnimationCodeEditor.src = "https://www.w3schools.com/codeeditor.gif"

    codeEditor_frontend.classList.toggle("active")
    codeEditor_backendE1.classList.toggle("active")
})

/***************************how_to_section_slide image******************************************/
let howtosection_itemE1 = document.querySelectorAll(".howtosection_item")
let imageSlidePreveE1 = document.getElementById("imageSlidePreve")
let imageSlideNextE1 = document.getElementById("imageSlideNext")
let slideImageCurrent = 0;
let howtosection_active_imageE1 = document.querySelectorAll(".imageslideactive")

let imageslideactive1E1 = document.getElementById("imageslideactive1")
let imageslideactive2E1 = document.getElementById("imageslideactive2")
let imageslideactive3E1 = document.getElementById("imageslideactive3")

function activeimageSlideDot(value) {
    switch (value) {
        case 0:
            imageslideactive1E1.classList.add("activeImage")
            imageslideactive2E1.classList.remove("activeImage")
            imageslideactive3E1.classList.remove("activeImage")
            break;
        case -100:
            imageslideactive1E1.classList.remove("activeImage")
            imageslideactive2E1.classList.add("activeImage")
            imageslideactive3E1.classList.remove("activeImage")
            break;
        case -200:
            imageslideactive1E1.classList.remove("activeImage")
            imageslideactive2E1.classList.remove("activeImage")
            imageslideactive3E1.classList.add("activeImage")
            break;
    }
}

imageSlideNextE1.addEventListener("click", nextSlideImage)

imageSlidePreveE1.addEventListener("click", () => {
    if (slideImageCurrent < 0) {
        slideImageCurrent += 100
    }
    howtosection_itemE1.forEach(el => {
        el.style.transform = `translateX(${slideImageCurrent}%)`
    })

    activeimageSlideDot(slideImageCurrent)
})

function nextSlideImage() {
    if (slideImageCurrent <= 0 && slideImageCurrent >= -100) {
        slideImageCurrent -= 100
    }
    howtosection_itemE1.forEach(el => {
        el.style.transform = `translateX(${slideImageCurrent}%)`
    })

    activeimageSlideDot(slideImageCurrent)
}

function renderAllImageAutoMatic() {
    if (slideImageCurrent <= 0 && slideImageCurrent >= -100) {
        slideImageCurrent -= 100
    } else {
        slideImageCurrent = 0
    }
    howtosection_itemE1.forEach(el => {
        el.style.transform = `translateX(${slideImageCurrent}%)`
    })

    activeimageSlideDot(slideImageCurrent)
    console.log(slideImageCurrent)
}

setInterval(renderAllImageAutoMatic, 2000)

console.log(howtosection_itemE1)




