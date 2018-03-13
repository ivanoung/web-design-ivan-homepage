// Ivan's homepage
// ---> by Ivan Oung
// --------------------------------
// ## 1. Variable declarations
// --------------------------------
// ## 2. Functions declarations
// ### 2.1 Related topic
// --------------------------------
// ## 3. Interaction declarations
// ### 3.1 Related topic
// --------------------------------
// ## 4. Possible code improvements


// ## 1. Variable declarations
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
                <img class="ck-receiver sqimg"  id = "${this.uid}" src="${this.preview}"
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
        <h1>${this.name}</h1>
        <div class="project-grid">
            <div class="" id="pj-details">
                <div class="thicc mg-bot-md">
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
// ### 2.1 Ajax calling for website info
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


// Don't even know what I am doing
function asyncRetrive(checker) {

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

// Load on click


// asyncRetrive("omg");


$(document).ready(() => {
    $(".page1").show();
    $(".page2, .page3").hide();
    $("body").attr("id", "theme1");
})

$("a").click(el => el.preventDefault());

$("#rthome").click(() => {
    $(".page1").show();
    $(".page2, .page3").hide();
    $("body").attr("id", "theme1");
})

$("#epv").click(() => {
    $(".page2").show();
    $(".page1, .page3").hide();
    $("body").attr("id", "theme2");
})

$('body').on('click', ".ck-receiver", function () {

    $(".page1, .page2").hide();
    $(".page3").show();
    $("body").attr("id", "theme3");
    let checker = $(this).attr("id");
    asyncRetrive(checker);
    
})