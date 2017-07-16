document.addEventListener("DOMContentLoaded", function(){

var dropDownLists = document.querySelectorAll(".drop_down_list");
for (var i = 0; i < dropDownLists.length; i++) {
    dropDownLists[i].querySelector(".list_arrow").addEventListener("click", function(){
        if(this.parentElement.querySelector(".list_panel").style.display != "block"){
            this.parentElement.querySelector(".list_panel").style.display = "block";
        }else{
            this.parentElement.querySelector(".list_panel").style.display = "none"
        }
    });
}

var titleField = document.querySelector(".title");
var colorField = document.querySelector(".color");
var patternField = document.querySelector(".pattern");
var transportField = document.querySelector(".transport");

var titleValueField = document.querySelector(".title.value");
var colorValueField = document.querySelector(".color.value");
var patternValueField = document.querySelector(".pattern.value");
var transportValueField = document.querySelector(".transport.value");
var sumValueField = document.querySelector(".sum");

var titles = document.querySelectorAll(".drop_down_list:first-of-type li");
var colors = document.querySelectorAll(".drop_down_list:nth-of-type(2) li");
var patterns = document.querySelectorAll(".drop_down_list:nth-of-type(3) li");
var transport = document.querySelector("#transport");

function setSum(){
    var sum = 0;
    if (titleValueField.innerText != ""){
        sum += parseInt(titleValueField.innerText);
    }
    if (colorValueField.innerText != ""){
        sum += parseInt(colorValueField.innerText);
    }
    if (patternValueField.innerText != ""){
        sum += parseInt(patternValueField.innerText);
    }
    if (transportValueField.innerText != ""){
        sum += parseInt(transportValueField.innerText);
    }
    sumValueField.innerText = sum + " zł";
}

for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function(){
        titleField.innerText = this.innerText;
        switch(this.innerText){
            case "Clair":
                titleValueField.innerText = "200";
                break;
            case "Margarita":
                titleValueField.innerText = "250";
                break;
            case "Selena":
                titleValueField.innerText = "275";
                break;
        }
        setSum()
    });
}

for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function(){
        colorField.innerText = this.innerText;
        switch(this.innerText){
            case "Czerwony":
                colorValueField.innerText = "60";
                break;
            case "Czarny":
                colorValueField.innerText = "70";
                break;
            case "Pomarańczowy":
                colorValueField.innerText = "65";
                break;
        }
        setSum()
    });
}

for (var i = 0; i < patterns.length; i++) {
    patterns[i].addEventListener("click", function(){
        patternField.innerText = this.innerText;
        switch(this.innerText){
            case "Tkanina":
                patternValueField.innerText = "0";
                break;
            case "Skóra":
                patternValueField.innerText = "150";
                break;
        }
        setSum()
    });
}

transport.addEventListener("change", function(){
    if(this.checked){
        transportField.innerText = "Transport";
        transportValueField.innerText = "80";
    }
    else{
        transportField.innerText = "";
        transportValueField.innerText = "";
    }
    setSum()
});


});
