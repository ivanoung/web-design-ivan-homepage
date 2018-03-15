// Ivan's homepage
// ---> by Ivan Oung

// --------------------------------
// ## 1. Variable declarations
// ### 1.1 Updates entities (page1)
// ### 1.2 Project entities (page2 & page3)
// --------------------------------
// ## 2. Functions declarations
// ### 2.1 Ajax calling for website info, returning contents for page1 and page2
// ### 2.2 id converter for the project (page3) page
// --------------------------------
// ## 3. Interaction declarations
// ### 3.1 Page on load
// ### 3.2 Preventing link clicks to refresh page
// ### 3.3 Return home click
// ### 3.4 Project collection page (page2) showing
// ### 3.5 Individual project (page3) showing
// ### 3.6 Swaping mailbox emojiiiiiiiiiiiiiiiiiii
// ### 3.7 Send me an email with custom fields
// --------------------------------
// ## 4. Possible code improvements
// Do you know da wae. SPIT ON HER SPIT MY BROTHAS!!!!


// ## 1. Variable declarations
// ### 1.1 Updates entities (page1)
class Updates {
    constructor(obj) {
        // {this.title, this.link} = obj;
        this.title = obj.title;
        this.link = obj.link;
        this.date = obj.date;
        this.platform = obj.platform
    }
    crtNewEntity() {
        $(".content-list").append(`<li><a href = "${this.link}"><span class = "content-name bold-ul">${this.title}</span></a> - <span class = "content-platform">${this.platform}</span></li>`);
    }
}

// ### 1.2 Project entities (page2 & page3)
class Projectent {
    constructor(obj) {
        // this is strings
        this.type = obj.type;
        this.uid = obj.uniqueID;
        this.name = obj.name;
        this.preview = obj.preview;
        this.description = obj.description;
        this.objective = obj.objective;
        //    this is an array
        this.parties = obj.parties;
        this.achiv = obj.achievement;
        this.skill = obj.skills;
        //    this is an array of objects
        this.rehref = obj.relatedLinks;
    }

    fetch() {
        let targetID = "";
        switch (this.type) {
            case "project":
                targetID = "#pj-cnt";
                break;
            case "exposure":
                targetID = "#exp-cnt";
                break;
            case "venture":
                targetID = "#vn-cnt";
                break;
            default:
                break;
        }

        $(targetID).append(
            `<div class="box-frame one-forth" >
                <img class="ck-receiver sqimg clickable"  id = "${this.uid}" src="${this.preview}"
                    alt="${this.name}">
        </div>`
        );
    }

    display() {
        // reset html
        document.querySelector(".individual").innerHTML = "";

        // Clear up href
        let hrefStructure = [];
        this.rehref.forEach(anObj => hrefStructure.push(`<a class = "obl" href = "${anObj.href}">${anObj.caption}</a>`));
        hrefStructure.join(", ");

        // Append content into individual sector
        $(".individual").append(`
        <h1 class = "mg-bot-xs">${this.name}</h1>
        <div class="project-grid">
            <div class="" id="pj-details">
                <div class="thicc mg-bot-sm">
                    <img src="${this.preview}" alt="${this.name}"
                        class="sqimg">
                </div>
                <div class="text-unit mg-bot-xs">
                    <h2 class="ul">About this:</h2>
                    <p>${this.description}</p>
                </div>
                <div class="text-unit mg-bot-xs">
                    <h2 class="ul">Objective:</h2>
                    <p>${this.objective}</p>
                </div>
                <div class="text-unit mg-bot-xs">
                    <h2 class="ul">Parties:</h2>
                    <p>${this.parties.join(", ")}</p>
                </div>
                <div class="text-unit mg-bot-xs">
                    <h2 class="ul">Achievement:</h2>
                    <p>${this.achiv.join(", ")}</p>
                </div>
                <div class="text-unit mg-bot-xs">
                    <h2 class="ul">Related links:</h2>
                    <p>
                        ${hrefStructure}
                    </p>
                </div>
            </div>
            <div class="" id="pj-skills">
                <h3 class="ul">Skills</h3>
            </div>
        </div>`);

        this.skill.forEach(x => {
            $("#pj-skills").append(`<span>#${x}</span>`);
        });
    }
}

// ## 2. Functions declarations
// ### 2.1 Ajax calling for website info, returning contents for page1 and page2
// Load at start
let http = new XMLHttpRequest();
http.open('GET', 'https://raw.githubusercontent.com/ivanoung/web-design-ivan-homepage/master/v2/content.json');
// http.setRequestHeader("Date","Fri, Dec 31 1999 23:59:59 GMT");
http.onreadystatechange = function () {
    if (http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if (http.status == 200) {
        let respTxt = JSON.parse(http.responseText);
        let updates = respTxt.updates;
        let projects = respTxt.getShitDone;
        // Now updates is an array of shit
        updates.forEach(function (ele) {
            let nuEntity = new Updates(ele);
            nuEntity.crtNewEntity();
        });

        projects.forEach(function (boxes) {
            let newBox = new Projectent(boxes);
            newBox.fetch();
        });

    } else {
        console.log(`error occured: ${http.status}`);
    }
}
http.send();


// ### 2.2 id converter for the project (page3) page
function asyncRetrive(checker) {
    let checkerMap = {
        "tshk": 1,
        "ips": 2
    }

    let r = checkerMap[checker];
    let i = 0;
    switch(checker){
        case "tshk":
            i = 0;
            break;
        case "ips":
            i = 1;
            break;
        case "odltg":
            i = 2;
            break;
        case "coinv":
            i = 3;
            break;
        case "swa":
            i = 4;
            break;
        case "scdd":
            i = 5;
            break;
        case "ysd":
            i = 6;
            break;
        case "pts":
            i = 7;
            break;
        case "csg":
            i = 8;
            break;

        default:
            break;
    }


    $.get("https://raw.githubusercontent.com/ivanoung/web-design-ivan-homepage/master/v2/content.json")
        .done((ele) => {
            let testres = new Projectent(JSON.parse(ele).getShitDone[i]);
            testres.display();
        })
        .fail((ele) => {
            console.log("oh shit");
        });
}



// ## 3. Interaction declarations
// ### 3.1 Page on load
$(document).ready(() => {
    $(".page1").show();
    $(".page2, .page3").hide();
    $("body").attr("id", "theme1");
    $("#in").hide();
})
// ### 3.2 Preventing link clicks to refresh page
$("a").click(el => el.preventDefault());

// ### 3.3 Return home click
$("#rthome").click(() => {
    $(".page1").show();
    $(".page2, .page3").hide();
    $("body").attr("id", "theme1");
})

// ### 3.4 Project collection page (page2) showing
$("#epv").click(() => {
    $(".page2").show();
    $(".page1, .page3").hide();
    $("body").attr("id", "theme2");
})

// ### 3.5 Individual project (page3) showing
// Bloody fracking hell use on becuase of dynamic content load on click
$('body').on('click', ".ck-receiver", function () {
    $("body, html").animate({scrollTop:0},1000);
    $(".page1, .page2").hide();
    $(".page3").show();
    $("body").attr("id", "theme3");
    let checker = $(this).attr("id");
    asyncRetrive(checker);   
})

// ### 3.6 Swaping mailbox emojiiiiiiiiiiiiiiiiiii
$("body").on("mouseenter","#mailing",()=> $("#out, #in").toggle());
$("body").on("mouseleave","#mailing",()=> $("#out, #in").toggle());

// ### 3.7 Send me an email with custom fields
$("#mailing").click(()=>{
    let subject = $("#mail-subject").text();
    let name = $("#mail-name").text();

    window.open(`mailto:ivanoung@gmail.com?subject=${subject}&body=Hey this is ${name}, let's talk about ${subject} soon!!`);
})
