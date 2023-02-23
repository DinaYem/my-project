"use strict";

function pageLoaded()
{
    //---- database -----
    /* const articleObj1 = new Object();
        img: "/Users/macbook/Desktop/front_end_developer/my project/assets1/science.jpeg",
    articleObj1.img = "<img src='/Users/macbook/Desktop/front_end_developer/my project/assets1/science.jpeg' alt='cognitive science'>"
    articleObj1.h3 = "Article 1"
    articleObj1.authors = "Author1, Author2, Author3, and Author4";
    articleObj1.journal = "Cognitive science";
    articleObj1.h4 = "Mental Models of smart homes users";
    articleObj1.paragraph = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"];
     */

    const articleObj2 = new Object();
    //articleObj2.video = "videos/big_buck_bunny_720p_2mb.mp4"; 
    articleObj2.h3 = "Rethinking Social sciences";
    articleObj2.authors = "Author1, Author2, Author3, and Author4";
    articleObj2.journal = "Social science volume 12, Article number: 48 (2022) Cite this article 2 Accesses";
    articleObj2.h4 = ["Abstract"];
    articleObj2.paragraph = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"];
    
    /* const articleObj3 = new Object();
    articleObj3.img = null;
    articleObj3.h3 = "Article 3";
    articleObj3.authors = "Author1, Author2, Author3";
    articleObj3.journal = "Linguistica";
    articleObj3.h4 = "Types of liguistic communities";
    articleObj3.paragraph = ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"];
    
    const articleObj4 = new Object();
    articleObj4.img = null;
    articleObj4.h3 = "Article 4";
    articleObj4.authors = "Author1, Author2, Author3, and Author4";
    articleObj4.journal = "Neuroscience";
    articleObj4.h4 = "Social Neuroscience";
    articleObj4.paragraph = ["On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"]
     */
    
    const articles = [articleObj2];
    const toAppend = document.querySelector('.section80');
    
    for (let i = 0; i < articles.length; i++)
    {
        const articleObj = articles[i];
        const newArticle = createArticle(articleObj.h3, 
                                        articleObj.authors, 
                                        articleObj.journal, 
                                        articleObj.h4, 
                                        articleObj.paragraph);
        toAppend.append(newArticle);
        //console.log('script');
    }
}
window.onload = pageLoaded;

function createArticle(h3Param, authorsParam, journalParam, h4Param, paragraphParam)
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


h3.textContent = h3Param;
authors.textContent = authorsParam;
journal.textContent = journalParam;
h4.textContent = h4Param;

let ps = [];

for(let i = 0; i <paragraphParam.length; i++)
{
    const paragraph = document.createElement('p');
    paragraph.textContent = paragraphParam[i];
    ps[i] = paragraph;
    //console.log(ps);
    section.append(ps[i]);
}

//paragraphNode.textContent = paragraphParam;

//header.innerHTML = imgParam;
//divVideo.innerHTML = "<source src=\"" + videoParam + "\" type=\"video/mp4\"></video>";

//header.append(divVideo);
//header.classList.add("articleHeader");
section.classList.add("sectionStyle");

//sectionNode.append(paragraphNode);
//article.append(header);

return article;
} 



/* let IoT = "";
let IotCounter = 0;
let timerId = null;
const InternetOfThings = ["Internet of Things"]; */
//const ICT = document.getElementById("ict");
  //  ICT.textContent = "Internet of Things";
    //return ICT;
    //IoT = param1[IotCounter];
    //const abbrOwner = document.getElementById("styleAbbreviation");
   // abbrOwner.innerHTML = IoT;
    //IotCounter++;
    //    if(IotCounter == 3)
    //        clearInterval(timerId)


/* let secCounter = 0;
let timerId = null; 

function pageLoaded()
{
    const seconds = [1, 2, 3, 4, 5];
    const idAdv = "timer";
    timerId = setInterval(setTimer, 1000, seconds, idAdv);
}
window.onload = pageLoaded;  

function setTimer(secondsParam, advContainerParam)
{
    const secOwner = secondsParam[secCounter];
    const getInhtml = document.getElementById(advContainerParam);
    console.log(secOwner);
    getInhtml.innerHTML = secOwner;
    secCounter++;
    if(secCounter == secondsParam.length)
        clearInterval(timerId);
}   */

/* 
let timerId = null;

function pageLoaded()
{
    //setTimeout(setThemeOfBackground, 2000);

    const theme = ["Internet of things"]
    const paramId = document.querySelector(".articleHeader > h2");
    const delay = 500;
    timerId = setInterval(setThemeOfBackground, delay, theme, totalCycles, paramId); //temporizzatore
}
window.onload = pageLoaded;  

function setThemeOfBackground()
{
    
    let h2 = document.createElement('h2');
    document.querySelector(".articleHeader").prepend(h2);
    h2.textContent = "Internet of Things";
    h2.classList.add("styleH2");
    return h2;
}   */


/* function caricaScriptEsterno(source, callback)
{
    let script = document.createElement("script");
    script.src = source;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error `Error: ${source}`, null);

    document.body.append(script);
}

caricaScriptEsterno('https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js', gestisciCaricaScriptAnime);

function gestisciCaricaScriptAnime(error, s)
{
    
    if(error != null)
    {
        console.log(`Downloading error ${s.src}`);
        
    }
    else
    {
        console.log(`File ${s.src} is downloaded successfully`);
        
        let logEls = document.querySelector('.articleHeader > h3');
        logEls.textContent = "ICT";
        console.log(logEls);

        anime({
            targets: logEls,
            translateX: 370,
          });
    }
} */

/* //download local file article.js
function downloadFile (source)
{
    let promise = new Promise((resolve, reject) =>
    {
        let script = document.createElement("script");
        script.src = source;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("File is not downloaded"))

        const article = document.querySelector(".article");
        article.append(script);
    });
    return promise;
};

downloadFile("/Users/macbook/Desktop/front_end_developer/my project/js/articles.js")
.then((s) =>
{
        console.log(`File: ${s.src} is downloaded`)
        //const divReferences = document.createElement("div");
        //divReferences.textContent = pageLoaded;
        //const toAppend = document.querySelector(".article");
        //toAppend.append(pageLoaded); 
        pageLoaded();
},
(er) => 
{
    console.log(`${er.name} ${er.message}`);
}); */


/*function caricaScriptEsternoPromise(sorgente)
{
  const promise = new Promise(function(resolve, reject)
  {
    let s = document.createElement('script');
    s.src = sorgente;

    s.onload = () => resolve(s);
    s.onerror = () => reject(new Error(`Errore di caricamento relativo a: ${sorgente}`));

    document.body.append(s);
  });

  return promise;
}

let promise1 = caricaScriptEsternoPromise("https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js");

//si possa usare diversi .then in risposta al promise, ovvero diversi azioni(funzioni) rispetto alla resolve, reject che sono stati eseguiti.
//come se fossero diversi istruzioni(.then) alla medessima evento(promise)
promise1.then(
  ok => console.log(`${ok.src} è stato caricato con successo!`),
  ko => console.log(`${ko.name}: ${ko.message}`)
);
//ok - (s) r.24 passa a (ok) r.36
//ko - (new Error(`Errore di caricamento relativo a: ${sorgente}`) passa a (ko.name e ko.message)

promise1.then(
  () => buildInterface(), //allora vado ad agire sul DOM della mia interfaccia
  ko => console.log(`${ko.name}: ${ko.message + " OPS!"}`)
);

promise1.then(
  () => alert("CIAO A TUTTI!")
)

//promise1.then(() => console.log("sono felicissimo di avere dei paragrafi così belli!"));

function buildInterface()
{
  let logEl = document.querySelector('body > p:first-of-type');

  console.log(logEl)

  //https://animejs.com/documentation/
  anime({
    targets: logEl,
    translateX: 250
  });
}*/