signs =["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus",
    "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "fake" ];
messages =[", this week, it's so important to remember that your initial impressions can sometimes be wrong. This isn't to " +
    "say that you can't trust your instincts, just that it can take them some time to settle on the truth. You " +
    "already know that what appears at first glance to be a safe haven might end up being a trap, but remind " +
    "yourself that it works in reverse, too, that what initially appears to be a problem might reveal itself to be " +
    "a gift. Sometimes, being careful and rigorous means allowing yourself to change your mind.",
    ", this week, you might find yourself returning to questions of what's really at stake for you, of the comforts" +
    " you have to lose, or the magic you stand to gain. It might sound like frightening work, but you don't have to " +
    "be afraid this week. There's a relief to be found in thinking realistically about consequences and " +
    "possibilities, and in refusing to lie to yourself about what really matters to you. It can be so much easier " +
    "to dream wild and vibrant dreams when you let yourself see the existing world clearly.",
    ", sometimes, you give yourself far too little credit for all you've accomplished and all you've survived; you " +
    "present your own story as a small and inconsequential thing in the grand scheme of the universe, hardly even " +
    "worth mentioning at all. While it's valuable to hold onto this sense of perspective, don't let it block your " +
    "view of your own worth. Nobody else has experienced this world in just the way you have. You know things that " +
    "nobody else does. You can believe that other people matter, and you can believe that your own life matters too.",
    ", other people try to convince you, sometimes, that you should treat the world more seriously, that you should" +
    " stop being so loud and so vibrant, that you should put your head down and focus on work. This week, though," +
    " you can remember all the ways that your boldness, your loudness, your wildness, have their own value, their" +
    " own seriousness. The world needs color and light; it needs energy; it needs exuberance. Living fully and " +
    "joyfully and well is a vital task, one you can allow yourself to take seriously.",
    ", it can be difficult to make big changes to your life, to launch yourself into the unknown. You might even " +
    "have yourself convinced that change is impossible for you, that everything will go on just like this " +
    "forever. That isn't true, though. It's just that when you move carefully and steadily, the results of your " +
    "work can appear so gradually as to be nearly invisible. This week, pay attention, and you might notice " +
    "the ways your long-term efforts have begun to give back. You haven't been working in vain. ",
    ", This week, it's important not to mistake the presence of difficulty for the absence of magic. It's " +
    "important not to think that the only activities worth your time are the ones that come lightly and easily. " +
    "This week, try not to avoid the tasks that seem thorny. You can reach out even to the people whose hearts" +
    " remain mysterious to you, and you can work at your craft even when you doubt your skill. The world " +
    "will reward you for caring, and for trying",
    ", sometimes, it can feel like the world's doing its best to prevent you from being soft. It can feel like your " +
    "ability to feel deeply just gets disrespected, even punished, at every turn. This week, your job is to maintain" +
    " your clear sense of yourself, and to remain unafraid. Other people might not always understand it, but you " +
    "know that your emotion isn't a weakness, and it never has been. Your love for the world is what makes it " +
    "possible to survive; your softness what makes life worth living.",
    ", this is a week not to be afraid of your own limits, nor to fear your imagined inadequacies. Sometimes, the " +
    "world will tell you that you aren't enough – that to be worthy of love and attention you have to sing ever " +
    "sweeter, shine ever brighter, inch ever closer to perfection, but this week, you don't have to believe it." +
    " You're working so hard to be kind and good while surviving this world, and if you keep doing that work," +
    " it'll be enough.",
    ", it can be tempting to imagine that with enough control over yourself, with a strong enough will, the world " +
    "will immediately become easy to live in, and everything wild or disruptive will recede into the background." +
    " The problem is that, if you think this way, every bad and difficult thing starts to look like reflection of " +
    "your own inadequacies. This week, instead of trying to insulate yourself from the chaos of the moving world," +
    " just try to keep your balance. Inside this chaos you can find connection, you can find sweetness, you can find" +
    " surprising joy.",
    ", this is a week to remember that you're allowed to turn down invitations - literal ones, of course, but also " +
    "invitations to act in certain ways, to feel in certain ways, to align yourself with values that aren't your " +
    "own. You don't have to say yes out of politeness or loyalty, or out of curiosity, to see where things lead. You" +
    " don't have to wait around for other people to offer you opportunities. You have your own energy, your own " +
    "vision, your own quick mind: You can make your own abundance.",
    ", this is a week for finding some clarity about your place in the world. It's a week to remember that the world" +
    " will always remain bigger than you can imagine, wilder than you can control. If you know this, it means you " +
    "can go a little easier on yourself. You can stop striving for perfection, stop trying to know everything, stop" +
    " seeking to predict every event before it happens. The world will always be able to surprise you, and that " +
    "isn't a sign of weakness - just a sign that you're alive.",
    ", It can be difficult to reconcile your shining optimism with the menacing darkness of the world. The sun " +
    "rises late and the night comes early, and there's more cruelty than you can bear to look at. In a world as " +
    "awful as this one, it can be hard to believe that anybody, let alone you, has access to magic. But you do, of" +
    " course, and if you can't see it in the big picture, try to see it in the everyday, in the things you can " +
    "touch and see, in the little ways you can mend your concrete, tangible world.",
    "The date you have entered is not a date..."];
images =["img/capricorn.png", "img/aquarius.png", "img/pisces.png",
    "img/aries.png", "img/taurus.png", "img/gemini.png", "img/cancer.png",
    "img/leo.png", "img/virgo.png", "img/libra.png", "img/scorpio.png", "img/Sagitarius.png","img/fake.png"];
function hOrOsOpe() {
    var nameGiven = document.getElementById('name').value;
    var monthGiven = document.getElementById('month').value;
    var dayGiven = document.getElementById('day').value;
    var signGiven = signFinding(monthGiven, dayGiven);
    var birthday = determineBirthday(monthGiven, dayGiven);
    var message = birthday + nameGiven + messages[signGiven];
    var imageGiven = imageFinding(signGiven);


    document.getElementById("sign").innerHTML = signs[signGiven];
    document.getElementById("divToWrite").innerHTML = message;
    document.getElementById("img").src= images[signGiven];
}

function signFinding(monthGiven, dayGiven) {
    if (((monthGiven == 11) && (dayGiven >= 22)) || ((monthGiven == 0) && (dayGiven <= 20))) {
        return 0;
    }
    if (((monthGiven == 0) && (dayGiven >= 21)) || ((monthGiven == 1) && (dayGiven <= 18))) {
        return 1;
    }
    if ((monthGiven == 1) && (dayGiven >= 29)) {
        return 12;
    }
    if ((((monthGiven == 1) && (dayGiven >= 19)) && (dayGiven <= 28)) || ((monthGiven == 2) && (dayGiven <= 20))) {
        return 2;
    }
    if (((monthGiven == 2) && (dayGiven >= 21)) || ((monthGiven == 3) && (dayGiven <= 20))) {
        return 3;
    }
    if (((monthGiven == 3) && (dayGiven >= 21)) || ((monthGiven == 4) && (dayGiven <= 21))) {
        return 4;
    }
    if (((monthGiven == 4) && (dayGiven >= 22)) || ((monthGiven == 5) && (dayGiven <= 21))) {
        return 5;

    }
    if (((monthGiven == 5) && (dayGiven >= 22)) || ((monthGiven == 6) && (dayGiven <= 22))) {
        return 6;
    }
    if (((monthGiven == 6) && (dayGiven >= 23)) || ((monthGiven == 7) && (dayGiven <= 23))) {
        return 7;

    }
    if (((monthGiven == 7) && (dayGiven >= 24)) || ((monthGiven == 8) && (dayGiven <= 22))) {
        return 8;
    }
    if (((monthGiven == 8) && (dayGiven >= 23)) || ((monthGiven == 9) && (dayGiven <= 23))) {
        return 9;

    }
    if (((monthGiven == 9) && (dayGiven >= 24)) || ((monthGiven == 10) && (dayGiven <= 22))) {
        return 10;
    }
    if (((monthGiven == 10) && (dayGiven >= 23)) || ((monthGiven == 11) && (dayGiven <= 21))) {
        return 11;
    }
}

function message(signGiven){
    if(sign == "Capricorn") {
        return messages[0];
    }
    if(sign == "Aquarius"){
        return messages[1];
    }
    if(sign == "Pisces") {
        return messages[2];
    }
    if(sign == "Aries"){
        return messages[3];
    }
    if(sign == "Taurus") {
        return messages[4];
    }
    if(sign == "Gemini"){
        return messages[5];
    }
    if(sign == "Cancer") {
        return messages[6];
    }
    if(sign == "Leo"){
        return messages[7];
    }
    if(sign == "Virgo") {
        return messages[8];
    }
    if(sign == "Libra"){
        return messages[9];
    }
    if(sign == "Scorpio") {
        return messages[10];
    }
    if(sign == "Sagittarius"){
        return messages[11];
    }
    if(sign == "fake"){
        return messages[12];
    }


}

function imageFinding(signGiven){
    if(sign == "Capricorn") {
        return images[0];
    }
    if(sign == "Aquarius"){
        return images[1];
    }
    if(sign == "Pisces") {
        return images[2];
    }
    if(sign == "Aries"){
        return images[3];
    }
    if(sign == "Taurus") {
        return images[4];
    }
    if(sign == "Gemini"){
        return images[5];
    }
    if(sign == "Cancer") {
        return images[6];
    }
    if(sign == "Leo"){
        return images[7];
    }
    if(sign == "Virgo") {
        return images[8];
    }
    if(sign == "Libra"){
        return images[9];
    }
    if(sign == "Scorpio") {
        return images[10];
    }
    if(sign == "Sagittarius"){
        return images[11];
    }
    if(sign == "fake"){
        return images[12];
    }
}

function determineBirthday(userMonth, userDay){
    var birthday = "";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    if(userDay == currentDay && userMonth == currentMonth){
        birthday = "Happy Birthday! ";
    }
    return birthday;
}
