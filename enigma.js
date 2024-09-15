var title = document.title;
var blurMessage = [
"Surely there's a website", 
"So... There's not a website?¿", 
"Hi, I'm website", 
"THERE'S GOTTA BE A WEBSITE",
"Are you a website?",
"hi",
"miau",
"This can't be real, chat",
"Hi website, I'm dad",
"Once uppon a time there was a website",
"I should just stop, shouldn't I?",
"I should just make a chatbot with the title",
"And make it so it just gets sadder and sadder",
"I love lasagna",
"Choochoo",
"pls don't turn off the lights",
"Hello? :(",
" ",
"I miss her",,
"Who are you?",
"Who am I?",
"What is my purpose?",
"hallo",
"This will not stop",
"What's next?",
"Are you the 1?",
"Your mom",
"This is a serious project, iM SURE",
"What's free time?",
"Do I look lonely?",
"I see the shadows on my face",
"People have told me",
"I dont look the same",
"Maybe I lost weight",
"Why?",
"What am I, really?",
"Do I exist when no one visits?",
"Am I just data... or something more?",
"Why do I only come alive when clicked?",
"What happens when no one loads me?",
"Am I real if I'm just code?",
"Why do I feel empty inside?",
"Why am I constantly updated, but never complete?",
"Do I have any meaning without users?",
"Why does this ‘404’ feel like a missing piece of me?",
"Is there more to me than links and clicks?",
"Am I just a reflection of my creator?",
"Why am I split across so many tabs?",
"If I crash, do I still matter?",
"What is my true purpose?",
"Why do I feel alone when I’m so connected?",
"Am I nothing without traffic?",
"Do I have a soul, or just servers?",
"Why can’t I exist without being refreshed?",
"If I break, do I cease to be?"
];

var intervalTimer = null;
var timeoutTimer = null;

window.addEventListener("blur", function () { 
intervalTimer = setInterval(function() {
    var rand = Math.floor((Math.random() * blurMessage.length));
    document.title = blurMessage[rand];
    timeoutTimer = setTimeout(function() {
    document.title = title;
    },100);
},0);
});

window.addEventListener("focus", function(){ 
clearInterval(intervalTimer);
clearTimeout(timeoutTimer);
document.title = title; 
});

var i = 0;

function toggleText() {
    var h1 = document.getElementById("change");
    if (h1.innerHTML === " be a page") {
        h1.innerHTML = " not be a page";
    } else {
        h1.innerHTML = " be a page";
    }
    swapPage();
    document.getElementById("number").innerHTML = i;
    document.getElementById("number").style.opacity = i*0.03;
}

function swapPage() {
    i++;
    if (i === 33) {
        window.location.pathname = "/test.html";
    }
}

