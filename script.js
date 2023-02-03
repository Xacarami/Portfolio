const themeButton = document.getElementById("themeButton");
const linkCss = document.getElementById("linkCss");

if (themeButton) {
    themeButton.addEventListener("click", ()=>{
        if (linkCss.attributes[1].value == "style/dark.css"){
            linkCss.attributes[1].value = "style/light.css";
            themeButton.innerHTML = "Light Mode"
        }
        else {
            linkCss.attributes[1].value = "style/dark.css"
            themeButton.innerHTML = "Dark Mode"
        }
    })
}