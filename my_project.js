"use strict";

let counter = 0;
let nameHeader = "";
let timerId = null;

function pageLoaded()
{
    loadInternalData();
}
window.onload = pageLoaded;  


function setThemeOfBackground(themeParam, idParam, styleParam)
{
    nameHeader += themeParam[counter];
    let h2 = idParam;
    h2.classList.add(styleParam);
    h2.textContent = nameHeader;

    counter++;
    if(counter == themeParam.length)
        clearInterval(timerId);
};


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
    /* let section = document.querySelectorAll("section.styleAbstract");
    console.log(section.length);
    for (const key of section)
    {
        key.classList.remove("styleAbstract");
        key.classList.add("sectionStyle");
        console.log(key);
        //console.log(sectionStyle);
    }  */


/* ----- create footer class ----- */
    /* let footer = document.body.lastElementChild.previousElementSibling;
    console.log(footer);
    footer.id = "footerStyle";
    let paragraph = document.createElement("p");
    paragraph.textContent = "SJ";
    footer.prepend(paragraph); */


/* ------ add class ------ */
   // document.querySelector(".articleHeaderImage").classList.add("displayNone");
   // document.querySelector(".articleHeaderImage").classList.add("opacityStyle");



/* ----- Routing ----- */
let contentSection = document.querySelector('.section80');

let publication = "../article.json"
/* let articlesPage = ` <div class="videoContainer">
<video controls autoplay="true" muted="false" class="responsiveVideo">
    <source src="videos/big_buck_bunny_720p_2mb.mp4" type="video/mp4">
    <!--.ogg-->
    <!--.webm-->
    Il tuo browser non supporta video.
</video>
</div>`; */

let router = {
    '/article': publication,
    //'/articles.html': articlesPage
};

let loadInternalData = () => {
    let route = window.location.pathname;
    //contentSection.innerHTML = router[route];
    //loadExternalData(router[route]);
    //console.log(router[route]);
    /* if(route == '/my_project.html') 
    {
        
        /* ----- temporizzatore Article Header -----*/
        
      /*  const theme = ["I", "n", "t", "e", "r", "n", "e", "t", " ", "o", "f", " ", "T", "h", "i", "n", "g", "s"]
        //const totalCycles = 3;
        const id = document.querySelector("h2");
        const style = "styleH2";
        const delay = 100;

        timerId = setInterval(setThemeOfBackground, delay, theme, id, style); //temporizzatore
    } */
}

let onNavItemClick = (pathname) => {
    let route = window.location.origin;
    let totalPath = route + pathname;
    console.log(totalPath);
    window.history.pushState({}, "", totalPath);
    contentSection.innerHTML = router[pathname];

    if(pathname == '/my_project.html')
    {    
        loadExternalData(router[route]); 
    } 

    if(pathname == '/article')
    {
        loadExternalData(router[pathname]); 
    }
}

window.onpopstate = () => {
    let route = window.location.pathname;

    console.log("onpopstate().");
    console.log("route: " + route);

  /*   if(route == '/index.html')
        route = "/"; */

    contentSection.innerHTML = router[route];

    if(route == '/my_project.html')
    {  
        loadExternalData(); 
    }
}


/* ------ caricare file 'references.json' ----- */
function loadExternalData(route)
{
    //let path = "../references.json"
    
    let fetchPromise = fetch(route)

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
        //console.log("JSON.stringify(jsonObject): " + JSON.stringify(jsonObject));

        createArticle(jsonObject);
        //costruisciTabella2(jsonObject);
    })
    .catch(function(error)
    {
        console.log("error!!!: " + error);
    });

    console.log(fetchPromise);
}

function createArticle(jsonObjectParam)
{
    const article = jsonObjectParam.article;
    const section80 = document.querySelector('.section80');
    for (let i = 0; i < article.length; i++)
    {
        const articleAttributes = article[i];

        const newArticle = createArticle2(
                                        articleAttributes.imgPath,
                                        articleAttributes.imgAlt,
                                        articleAttributes.mediaType,
                                        articleAttributes.h2,
                                        articleAttributes.authors,
                                        articleAttributes.journal,
                                        articleAttributes.sections,
                                        articleAttributes.references);
        section80.append(newArticle);
    }
}

function createArticle2(imgPath, imgAlt, mediaType, h2, authorsParam, journalParam, sections,referencesParam)
{
    const article = document.createElement('article');
    const header = document.createElement('header');
    const h2Text = document.createElement('h2');
    const authors = document.createElement('p');
    const journal = document.createElement('p');
    const references = document.createElement('div');
   
    article.append(header);

    if(mediaType == "image")
    header.innerHTML = "<img src=\"" + imgPath + "\" alt=\"" + imgAlt + "\"" + "class=\"responsiveImage\">";
    else if(mediaType == "video")
    header.innerHTML = `<video controls autoplay="true" muted="false" class="responsiveImage">
                        <source src=${imgPath} type="video/mp4">
                        Il tuo browser non supporta video.
                    </video>`;
    else
    div.innerHTML = "Content not defined."
    
    h2Text.textContent = h2;
    authors.textContent = authorsParam;
    journal.textContent = journalParam;
    header.append(h2Text);
    header.append(authors);
    header.append(journal);

        for(let i = 0; i <sections.length; i++)
        {
            //console.log(sections[i]);
            const section = document.createElement('section');
            section.className = "sectionStyle";
            article.append(section);

            if(sections[i].hasOwnProperty("h4Text")) 
            {   
                const h4 = document.createElement('h4');
                h4.textContent = sections[i].h4Text;
                section.append(h4); 
            }
            
            if(sections[i].paragraph);
            {
                const paragraph = document.createElement("p");
                paragraph.textContent = sections[i].paragraph;
                section.append(paragraph);
                //console.log(sections[i].paragraph);
            }
        }

    let isFirstTime = true;
        if(isFirstTime == true)
        {
            let h4References = document.createElement('h4');
            h4References.textContent = "References";
            h4References.className = "sectionStyle"
            references.append(h4References);
        }
        isFirstTime = false;
        
    let rf = []
    for(let y = 0; y <referencesParam.length; y++)
    {
        //console.log(referencesParam[y]);
        const p = document.createElement('p');
        p.textContent = referencesParam[y];
        rf[y] = p;
        //console.log(ps);
        references.append(p); 
        }
    article.append(references);
    return article;
} 


/* ----- Create article ----- */
/* function createArticle(jsonObjectParam)
{
    const article = document.createElement('article');
    const header = document.createElement('header');
    //const divVideo = document.createElement('video');
    const h3 = document.createElement('h3');
    const authors = document.createElement('div');
    const journal = document.createElement('div');
    const section = document.createElement('section');
    const h4 = document.createElement('h4');
    //const authorsNode = document.createElement('p');
    //const journalNode = document.createElement('p');
    //const paragraph = document.createElement('p');

    article.append(h3);
    article.append(authors);
    article.append(journal);
    article.append(section);
    section.append(h4);
    section.append(h4);


    h3.textContent = "Rethinking Social sciences";;
    authors.textContent = "Author1, Author2, Author3, and Author4";
    journal.textContent = "Social science volume 12, Article number: 48 (2022) Cite this article 2 Accesses";
    h4.textContent = "Abstract";

    let ps = [];
    let paragraph = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"];
        
    for(let i = 0; i <paragraph.length; i++)
    {
        const paragraph1 = document.createElement('p');
        paragraph1.textContent = paragraph[i];
        ps[i] = paragraph1;
        //console.log(ps);
        section.append(ps[i]);
    }
    contentSection.append(article);
}; */
