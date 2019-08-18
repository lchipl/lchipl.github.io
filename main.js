
var leftEye = document.getElementById("left-eye");
var rightEye = document.getElementById("right-eye");

var LEFT_EYE_X = leftEye.getBoundingClientRect().left;
var LEFT_EYE_Y = leftEye.getBoundingClientRect().top;
var LEFT_EYE_LEFT = 62;
var LEFT_EYE_TOP = 49;

var RIGHT_EYE_X = rightEye.getBoundingClientRect().left;
var RIGHT_EYE_Y = rightEye.getBoundingClientRect().top;
var RIGHT_EYE_LEFT = 99;
var RIGHT_EYE_TOP = 59;

document.onmousemove = function(event){
    
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    //x for left
    if(mouseX < LEFT_EYE_X - 30) //eye left
    {
        var offset = 2;
        leftEye.style.left = LEFT_EYE_LEFT - offset + "px";
    } else if(mouseX > LEFT_EYE_X + 30){ //eye right
        var offset = 2;
        leftEye.style.left = LEFT_EYE_LEFT + offset + "px";
    } else {
        leftEye.style.left = LEFT_EYE_LEFT + "px";
    }
    
    //y for left
    if(mouseY < LEFT_EYE_Y - 30){ //eye up
        var offset = 2;
        leftEye.style.top = LEFT_EYE_TOP - offset + "px";
    } else if(mouseY > LEFT_EYE_Y + 30){ //eye down
        var offset = 2;
        leftEye.style.top = LEFT_EYE_TOP + offset + "px";
    } else {
        leftEye.style.top = LEFT_EYE_TOP + "px";
    }
    
    //x for right
    if(mouseX < RIGHT_EYE_X - 30) //right eye left
    {
        var offset = 4;
        rightEye.style.left = RIGHT_EYE_LEFT - offset + "px";
    } else if(mouseX > RIGHT_EYE_X + 30){ //right eye right
        var offset = 2;
        rightEye.style.left = RIGHT_EYE_LEFT + offset + "px";
    } else {
        rightEye.style.left = RIGHT_EYE_LEFT + "px";
    }
    
    //y for right
    if(mouseY < RIGHT_EYE_Y - 30){ //eye up
        var offset = 3;
        rightEye.style.top = RIGHT_EYE_TOP - offset + "px";
    } else if(mouseY > RIGHT_EYE_Y + 30){ //eye down
        var offset = 2;
        rightEye.style.top = RIGHT_EYE_TOP + offset + "px";
    } else {
        rightEye.style.top = RIGHT_EYE_TOP + "px";
    }
    
};