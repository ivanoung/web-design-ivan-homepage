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
            `<div class="box-frame one-forth">
            <a href="${this.preview}">
                <img class="sqimg" src="${this.preview}"
                    alt="${this.name}">
            </a>
        </div>`
        );
    }
}

// ## 2. Functions declarations
// ### 2.1 Ajax calling for website info

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
        // console.log(updates);
        // Now updates is an array of shit
        updates.forEach(function (ele) {
            let nuEntity = new Updates(ele);
            nuEntity.crtNewEntity();
        });

        projects.forEach(function (boxes){
            let newBox = new Projectent(boxes);
            newBox.fetch();
        });

    } else {
        console.log(`error occured: ${http.status}`);
    }
}
http.send();