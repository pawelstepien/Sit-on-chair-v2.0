document.addEventListener("DOMContentLoaded", function(){
//zad 1
    var dropdown = document.querySelector(".submenuWrapper");
    var hiddenMenu = document.querySelector(".submenu");

    dropdown.addEventListener("mouseover", function(){
        hiddenMenu.style.display = "inline-block";
    });
    dropdown.addEventListener("mouseout", function(){
        hiddenMenu.style.display = "none";
    });

//zad 2
    var photoBoxes = document.querySelectorAll(".photo");
    for (var i = 0; i < photoBoxes.length; i++) {
        photoBoxes[i].addEventListener("mouseover", function(){
            this.querySelector(".title").style.display = "none";
        });
        photoBoxes[i].addEventListener("mouseout", function(){
            this.querySelector(".title").style.display = "block";
        });
    }

//zad 3
    var leftArrow = document.querySelector("#left-arrow");
    var rightArrow = document.querySelector("#right-arrow");
    var img = document.querySelector("#see-more img");
    var counter = 0;
    sourcesArray = ["images/black_chair.png", "images/orange.png", "images/red.png"];
    leftArrow.addEventListener("click",function(){
        counter--;
        if (counter < 0){
            counter = 2;
        }
        img.setAttribute("src", sourcesArray[counter]);
    });
    rightArrow.addEventListener("click",function(){
        counter++;
        if (counter > 2){
            counter = 0;
        }
        img.setAttribute("src", sourcesArray[counter]);
    });

});
