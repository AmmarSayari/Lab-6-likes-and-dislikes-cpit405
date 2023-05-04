const initLikes = 0;
const initDislikes = 0;

let upCount = initLikes;
let downCount = initDislikes;

let likesBtn = document.getElementById("like-btn");
let disLikeBtn = document.getElementById("dislike-btn");
likesBtn.innerText = initLikes;
disLikeBtn.innerText = initDislikes;

//cookies

window.onload = function(){
    if(document.cookie && document.cookie.indexOf("voted")>-1){
        disableButtons();
    }
}

function doLike(){
    upCount++;
    likesBtn.innerText = upCount;
    disableLikeButtons();
    
}

function doDislike(){
    downCount++;
    disLikeBtn.innerText = downCount;
    disableDisLikeButtons();
    
}

function disableLikeButtons(){
    disLikeBtn.disabled = false;
    likesBtn.disabled = true;
    setCookie();
}

function disableDisLikeButtons(){
    disLikeBtn.disabled = true;
    likesBtn.disabled = false;
    setCookie();
}

function disableButtons(){
    disLikeBtn.disabled = true;
    likesBtn.disabled = true;
}

function setCookie(){
    document.cookie = "voted=true; SameSite=Strict; Max-Age"+60;
}