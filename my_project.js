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
   // document.querySelector(".articleHeaderImage").classList.add("displayNone");
   // document.querySelector(".articleHeaderImage").classList.add("opacityStyle");



/* ----- Routing ----- */
let contentSection = document.querySelector('.section80');

let homePage = `<article class="article">
<h2 class="articleHeaderImage"></h2>
<header class="sectionStyle">
  <!-- <div id="styleAbbreviation"></div> -->
  <p class="articlesP">Articles</p>
  <h3>The chalenges of ICT</h3>
  <p>Author1, Author2, Author3, and Author4*</p>
  <p>Human-centric Computing and Information Sciences volume 12, Article number: 48 (2022) Cite this article 2 Accesses</p>
</header>

<section class="styleAbstract">
  <h4 id="abstract">Abstract</h4>
  <hr>
   <p><img src="/assets1/research.jpeg" class="responsiveImage"/>
    Lorem Ipsum è un testo segnaposto utilizzato nel settore della
    tipografia e della stampa. Lorem Ipsum è considerato il testo
    segnaposto standard sin dal sedicesimo secolo, quando un anonimo
    tipografo prese una cassetta di caratteri e li assemblò per preparare
    un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
    anche al passaggio alla videoimpaginazione, pervenendoci
    sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
    diffusione dei fogli di caratteri trasferibili “Letraset”, che
    contenevano passaggi del Lorem Ipsum, e più recentemente da software
    di impaginazione come Aldus PageMaker, che includeva versioni del
    Lorem Ipsum.</p>
    <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della
      tipografia e della stampa. Lorem Ipsum è considerato il testo
      segnaposto standard sin dal sedicesimo secolo, quando un anonimo
      tipografo prese una cassetta di caratteri e li assemblò per preparare
      un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
      anche al passaggio alla videoimpaginazione, pervenendoci
      sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
      diffusione dei fogli di caratteri trasferibili “Letraset”, che
      contenevano passaggi del Lorem Ipsum, e più recentemente da software
      di impaginazione come Aldus PageMaker, che includeva versioni del
      Lorem Ipsum.
</section>
<section class="styleAbstract">
  <h4 id="introduction">Introduction</h4>
  <hr>
   <p> Lorem Ipsum è un testo segnaposto utilizzato nel settore della
    tipografia e della stampa. Lorem Ipsum è considerato il testo
    segnaposto standard sin dal sedicesimo secolo, quando un anonimo
    tipografo prese una cassetta di caratteri e li assemblò per preparare
    un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
    anche al passaggio alla videoimpaginazione, pervenendoci
    sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
    diffusione dei fogli di caratteri trasferibili “Letraset”, che
    contenevano passaggi del Lorem Ipsum, e più recentemente da software
    di impaginazione come Aldus PageMaker, che includeva versioni del
    Lorem Ipsum.</p>
    <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della
      tipografia e della stampa. Lorem Ipsum è considerato il testo
      segnaposto standard sin dal sedicesimo secolo, quando un anonimo
      tipografo prese una cassetta di caratteri e li assemblò per preparare
      un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
      anche al passaggio alla videoimpaginazione, pervenendoci
      sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
      diffusione dei fogli di caratteri trasferibili “Letraset”, che
      contenevano passaggi del Lorem Ipsum, e più recentemente da software
      di impaginazione come Aldus PageMaker, che includeva versioni del
      Lorem Ipsum.</p>
</section>
<section class="styleAbstract">
  <h4 id="study1">Study 1</h4>
  <hr>
   <p> Lorem Ipsum è un testo segnaposto utilizzato nel settore della
    tipografia e della stampa. Lorem Ipsum è considerato il testo
    segnaposto standard sin dal sedicesimo secolo, quando un anonimo
    tipografo prese una cassetta di caratteri e li assemblò per preparare
    un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
    anche al passaggio alla videoimpaginazione, pervenendoci
    sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
    diffusione dei fogli di caratteri trasferibili “Letraset”, che
    contenevano passaggi del Lorem Ipsum, e più recentemente da software
    di impaginazione come Aldus PageMaker, che includeva versioni del
    Lorem Ipsum.</p>
    <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della
      tipografia e della stampa. Lorem Ipsum è considerato il testo
      segnaposto standard sin dal sedicesimo secolo, quando un anonimo
      tipografo prese una cassetta di caratteri e li assemblò per preparare
      un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
      anche al passaggio alla videoimpaginazione, pervenendoci
      sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
      diffusione dei fogli di caratteri trasferibili “Letraset”, che
      contenevano passaggi del Lorem Ipsum, e più recentemente da software
      di impaginazione come Aldus PageMaker, che includeva versioni del
      Lorem Ipsum.</p>
</section>
<section class="styleAbstract">
  <h4 id="study2">Study 2</h4>
  <hr>
   <p> Lorem Ipsum è un testo segnaposto utilizzato nel settore della
    tipografia e della stampa. Lorem Ipsum è considerato il testo
    segnaposto standard sin dal sedicesimo secolo, quando un anonimo
    tipografo prese una cassetta di caratteri e li assemblò per preparare
    un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
    anche al passaggio alla videoimpaginazione, pervenendoci
    sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
    diffusione dei fogli di caratteri trasferibili “Letraset”, che
    contenevano passaggi del Lorem Ipsum, e più recentemente da software
    di impaginazione come Aldus PageMaker, che includeva versioni del
    Lorem Ipsum.</p>
    <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della
      tipografia e della stampa. Lorem Ipsum è considerato il testo
      segnaposto standard sin dal sedicesimo secolo, quando un anonimo
      tipografo prese una cassetta di caratteri e li assemblò per preparare
      un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
      anche al passaggio alla videoimpaginazione, pervenendoci
      sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
      diffusione dei fogli di caratteri trasferibili “Letraset”, che
      contenevano passaggi del Lorem Ipsum, e più recentemente da software
      di impaginazione come Aldus PageMaker, che includeva versioni del
      Lorem Ipsum.</p>
</section>
<section class="styleAbstract">
  <h4 id="generalDiscussion">General discussion</h4>
  <hr>
   <p> Lorem Ipsum è un testo segnaposto utilizzato nel settore della
    tipografia e della stampa. Lorem Ipsum è considerato il testo
    segnaposto standard sin dal sedicesimo secolo, quando un anonimo
    tipografo prese una cassetta di caratteri e li assemblò per preparare
    un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
    anche al passaggio alla videoimpaginazione, pervenendoci
    sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
    diffusione dei fogli di caratteri trasferibili “Letraset”, che
    contenevano passaggi del Lorem Ipsum, e più recentemente da software
    di impaginazione come Aldus PageMaker, che includeva versioni del
    Lorem Ipsum.</p>
    <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della
      tipografia e della stampa. Lorem Ipsum è considerato il testo
      segnaposto standard sin dal sedicesimo secolo, quando un anonimo
      tipografo prese una cassetta di caratteri e li assemblò per preparare
      un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
      anche al passaggio alla videoimpaginazione, pervenendoci
      sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
      diffusione dei fogli di caratteri trasferibili “Letraset”, che
      contenevano passaggi del Lorem Ipsum, e più recentemente da software
      di impaginazione come Aldus PageMaker, che includeva versioni del
      Lorem Ipsum.</p>
</section>
<section class="styleAbstract">
  <h4 id="conclusion">Conclusion</h4>
  <hr>
   <p> Lorem Ipsum è un testo segnaposto utilizzato nel settore della
    tipografia e della stampa. Lorem Ipsum è considerato il testo
    segnaposto standard sin dal sedicesimo secolo, quando un anonimo
    tipografo prese una cassetta di caratteri e li assemblò per preparare
    un testo campione. È sopravvissuto non solo a più di cinque secoli, ma
    anche al passaggio alla videoimpaginazione, pervenendoci
    sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la
    diffusione dei fogli di caratteri trasferibili “Letraset”, che
    contenevano passaggi del Lorem Ipsum, e più recentemente da software
    di impaginazione come Aldus PageMaker, che includeva versioni del
    Lorem Ipsum.</p>
</section>
<section class="styleAbstract">
  <h4 id="references">References</h4>
  <hr>
</section>
</article>`;
let articlesPage = ` <div class="videoContainer">
<video controls autoplay="true" muted="false" class="responsiveVideo">
    <source src="videos/big_buck_bunny_720p_2mb.mp4" type="video/mp4">
    <!--.ogg-->
    <!--.webm-->
    Il tuo browser non supporta video.
</video>
</div>`;

let router = {
    '/my_project.html': homePage,
    '/articles.html': articlesPage
};

let loadInternalData = () => {
    let route = window.location.pathname;
    //console.log(route);
    contentSection.innerHTML = router[route];

    if(route == '/my_project.html') 
    {
        loadExternalData(); //caricare references 
        
        /* ----- temporizzatore Article Header -----*/
        
        const theme = ["I", "n", "t", "e", "r", "n", "e", "t", " ", "o", "f", " ", "T", "h", "i", "n", "g", "s"]
        //const totalCycles = 3;
        const id = document.querySelector("h2");
        const style = "styleH2";
        const delay = 100;

        timerId = setInterval(setThemeOfBackground, delay, theme, id, style); //temporizzatore
    }
}

let onNavItemClick = (pathname) => {
    let route = window.location.origin;
    let totalPath = route + pathname;
    window.history.pushState({}, "", totalPath);
    contentSection.innerHTML = router[pathname];

    if(pathname == '/my_project.html')
    {    
        loadExternalData(); 
    } 

    if(pathname == '/articles.html')
    {
        createArticle();
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


/* ----- Create article ----- */
function createArticle()
{
    const article = document.createElement('article');
    //const header = document.createElement('header');
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
};
