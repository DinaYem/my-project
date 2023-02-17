"use strict";

/* ----- temporizzatore -----*/
let counter = 0;
let nameHeader = "";
let timerId = null;

function pageLoaded()
{
    const theme = ["I", "n", "t", "e", "r", "n", "e", "t", " ", "o", "f", " ", "T", "h", "i", "n", "g", "s"]
    //const totalCycles = 3;
    const id = document.querySelector(".articleHeader > h2");
    const style = "styleH2" 
    const delay = 100;
    timerId = setInterval(setThemeOfBackground, delay, theme, id, style); //temporizzatore
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


//correct the class name styleAbstract
    let section = document.querySelectorAll("section.styleAbstract");
    console.log(section.length);
    for (const key of section)
    {
        key.classList.remove("styleAbstract");
        key.classList.add("sectionStyle");
        console.log(key);
        //console.log(sectionStyle);
    } 


//create footer class
    let footer = document.body.lastElementChild.previousElementSibling;
    console.log(footer);
    footer.id = "footerStyle";
    let paragraph = document.createElement("p");
    paragraph.textContent = "SJ";
    footer.prepend(paragraph);


//add class
    document.querySelector(".articleHeaderImage").classList.add("displayNone");
    document.querySelector(".articleHeaderImage").classList.add("opacityStyle");


/* insert references in run time */
function insertReferences()
{
    //database
    const reference1 = new Object();
    reference1.p = "[1] J. H. Nord, A. Koohang, and J. Paliszkiewicz, “The Internet of Things: review and theoretical framework,” Expert Systems with Applications, vol. 133, pp. 97-108, 2019.";
    
    const reference2 = new Object();
    reference2.p = ["[2] C. Ardito, P. Buono, G. Desolda, and M. Matera, “From smart objects to smart experiences: an end-user development approach,” International Journal of Human-Computer Studies, vol. 114, pp. 51-68, 2018. "];
    
    const reference3 = new Object();
    reference3.p = ["[3] H. Lieberman, F. Paterno, M. Klann, and V. Wulf, “End-user development: an emerging paradigm,” in End User Development. Dordrecht, Netherlands: Springer, 2006, pp. 1-8."];
    
    const reference4 = new Object();
    reference4.p = ["[4] F. Paterno and C. Santoro, “End-user development for personalizing applications, things, and robots,” International Journal of Human-Computer Studies, vol. 131, pp. 120-130, 2019."];
    
    const reference5 = new Object();
    reference5.p = ["[5] D. J. Langley, J. van Doorn, I. C. Ng, S. Stieglitz, A. Lazovik, and A. Boonstra, “The Internet of everything: smart things and their impact on business models,” Journal of Business Research, vol. 122, pp. 853-863, 2021. "];
    
    const reference6 = new Object();
    reference6.p = ["[6] G. Fischer, E. Giaccardi, Y. Ye, A. G. Sutcliffe, and N. Mehandjiev, “Meta-design: a manifesto for end-user development,” Communications of the ACM, vol. 47, no. 9, pp. 33-37, 2004."];
    
    const reference7 = new Object();
    reference7.p = ["[7] F. Paterno, “End user development: Survey of an emerging field for empowering people,” International Scholarly Research Notices, vol. 2013, article no. 532659, 2013."];
    
    const reference8 = new Object();
    reference8.p = ["[8] IFTT Web-Based Service [Online]. Available: https://ifttt.com/."];
    
    const reference9 = new Object();
    reference9.p = ["[9] B. Ur, M. Pak Yong Ho, S. Brawner, J. Lee, S. Mennicken, N. Picard, D. Schulze, and M. L. Littman, “Trigger-action programming in the wild: An analysis of 200,000 IFTTT recipes,” in Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems, San Jose, CA, 2016, pp. 3227-3231."];
    
    const reference10 = new Object();
    reference10.p = ["[10] Amazon's Alexa [Online]. Available: https://developer.amazon.com/en-US/alexa."];
    
    const referencesArray = [reference1, reference2, reference3, reference4, reference5, reference6, reference7, reference8, reference9, reference10];
    const appendBody = document.querySelector('.article');
    
    for (let i = 0; i < referencesArray.length; i++)
    {
        const references = referencesArray[i];
        const newReferences = createReferences(references.p);
        appendBody.append(newReferences);
        //console.log('script');
    }
}

function createReferences(pParam)
{
//const references = document.createElement('section');
const p = document.createElement('p');
p.textContent = pParam;
//references.append(p);

//references.classList.add = sectionStyle;

return p;
}

insertReferences();

