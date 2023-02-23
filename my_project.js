"use strict";

/* ----- temporizzatore -----*/
let counter = 0;
let nameHeader = "";
let timerId = null;

function pageLoaded()
{
    const theme = ["I", "n", "t", "e", "r", "n", "e", "t", " ", "o", "f", " ", "T", "h", "i", "n", "g", "s"]
    //const totalCycles = 3;
    const id = document.querySelector("h2");
    const style = "styleH2" 
    const delay = 100;
    timerId = setInterval(setThemeOfBackground, delay, theme, id, style); //temporizzatore

    //caricare references
    loadExternalData()
}
window.onload = pageLoaded;  

function setThemeOfBackground(themeParam, idParam, styleParam)
{
    nameHeader += themeParam[counter];
    let h2 = idParam
    h2.classList.add(styleParam);
    h2.textContent = nameHeader;

    counter++;
    if(counter == themeParam.length)
        clearInterval(timerId);
} 


/* ----- Dropdown list Sections ----- */ 
function changeHamburgerIcon()
{
    let hamburgerContainer = document.getElementById("hamburgerContainer");
    hamburgerContainer.classList.toggle("changeHamburgerIcon");
}

function setInnerNavbarVisibility() 
{
    let innerNavbarContainer = document.getElementById("innerNavbarContainer");
    if (innerNavbarContainer.classList.contains("showInnerNavbar")) 
    {
        innerNavbarContainer.classList.remove("showInnerNavbar");
        innerNavbarContainer.classList.add("hideInnerNavbar");
    }
    else 
    {
        innerNavbarContainer.classList.remove("hideInnerNavbar");
        innerNavbarContainer.classList.add("showInnerNavbar");
    }
} 


/* ------ correct the class name styleAbstract ------ */
    let section = document.querySelectorAll("section.styleAbstract");
    console.log(section.length);
    for (const key of section)
    {
        key.classList.remove("styleAbstract");
        key.classList.add("sectionStyle");
        console.log(key);
        //console.log(sectionStyle);
    } 


/* ----- create footer class ----- */
    /* let footer = document.body.lastElementChild.previousElementSibling;
    console.log(footer);
    footer.id = "footerStyle";
    let paragraph = document.createElement("p");
    paragraph.textContent = "SJ";
    footer.prepend(paragraph); */


/* ------ add class ------ */
    document.querySelector(".articleHeaderImage").classList.add("displayNone");
    document.querySelector(".articleHeaderImage").classList.add("opacityStyle");


/* ------ caricare references.json ----- */
function loadExternalData()
{
    let path = "../references.json"
    
    let fetchPromise = fetch(path)

    fetchPromise.then(function(response)
    {
        console.log("response.headers: " + response.headers);

        console.log("response.ok: " + response.ok);
        console.log("response.status: " + response.status);
        console.log("response.type: " + response.type); 
        console.log("response.url: " + response.url);

        //console.log("response.body: " + response.body);
        //console.log("response.bodyUsed: " + response.bodyUsed);

        if(response.ok)
        {
            console.log("response.bodyUsed: " + response.bodyUsed);

            let jsonPromise = response.json();

            console.log("jsonPromise: " + jsonPromise);
            console.log(jsonPromise);

            console.log("response.bodyUsed: " + response.bodyUsed);

            return jsonPromise;
        }
        
        return Promise.reject(new Error("Problema!"));
    })
    .then(function(jsonObject)
    {
        //console.log(JSON.stringify({ x: 15, y: 16 }));
        //Il contenuto remoto.
        console.log("jsonObject: " + jsonObject);
        console.log("JSON.stringify(jsonObject): " + JSON.stringify(jsonObject));

        createReferences(jsonObject);
        //costruisciTabella2(jsonObject);
    })
    .catch(function(error)
    {
        console.log("error!!!: " + error);
    });

    console.log(fetchPromise);
}

function createReferences(jsonObjectParam)
{
    const referencesArray = jsonObjectParam.references;
    const appendBody = document.querySelector('.section80');
    for (let i = 0; i < referencesArray.length; i++)
    {
        const reference = referencesArray[i];
        const newReferences = insertReferences(reference.p);
        appendBody.append(newReferences);
    }
}

function insertReferences(pParam)
{
//const references = document.createElement('section');
const p = document.createElement('p');
p.textContent = pParam;
//references.append(p);

//references.classList.add = sectionStyle;

return p;
}
