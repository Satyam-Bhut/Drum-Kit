//addEventListener is listens when u interact with that object in this interaction is clicked and there are many events like mouseup,.....
//handleclick is user defined function that will be executed when we click on that button. We can also replace direct funtion 
//in place of handleclick in this way ("click",function(){alert("clicked")};);

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

function handleclick(){
    var word=this.innerHTML;
    makeSound(word);
    buttonanimation(word)
}
//keyboard listener
//if we want information about event then simply console.log(event) then we can see key is indicating character that we have pressed.
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonanimation(event.key);
});

//common action for both
function makeSound(key)
{
    switch (key) {
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;    
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}

function buttonanimation(word)
{
    document.querySelector("."+word).classList.add("pressed");
    //we can do this either by timeout or by 'keyup' event.
    setTimeout(function(){
        document.querySelector("."+word).classList.remove("pressed");
    },120);
}

