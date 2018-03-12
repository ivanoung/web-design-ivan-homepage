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
    constructor(obj){
        this.title = obj.title;
        this.link = obj.link;
        this.date = obj.date;
        this.platform = obj.platform
    }
    crtNewEntity(){
        $(".content-list").append(`<li><a href = ${this.link}><span class = "content-name bold-ul">${this.title}</span></a> - <span class = "content-platform">${this.platform}</span></li>`);
    }
}

// ## 2. Functions declarations
// ### 2.1 Ajax calling for website info

let http = new XMLHttpRequest();

http.open('GET','https://raw.githubusercontent.com/ivanoung/web-design-ivan-homepage/master/v2/content.json');
// http.setRequestHeader("Date","Fri, Dec 31 1999 23:59:59 GMT");
http.onreadystatechange = function () {
    if  (http.readyState != XMLHttpRequest.DONE){
        return;
    }
    else if (http.status==200){
        let respTxt = JSON.parse(http.responseText);
        let updates = respTxt.updates;
        console.log(updates);
        // Now updates is an array of shit
        updates.forEach(function(ele){
            let nuEntity = new Updates(ele);
            nuEntity.crtNewEntity;
        });
        
    }
    else {
        console.log(`error occured: ${http.status}`);
    }
}
http.send();
