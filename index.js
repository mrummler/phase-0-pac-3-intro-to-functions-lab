function shout(string) {
    return string.toUpperCase();
}

  function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(Greeting) {
    var cantHear = "I can\'t hear you!";
    var yesIndeed = "YES INDEED!";
    var loveTo = "I would love to!";
    if (Greeting.toLowerCase(Greeting) === Greeting) {
        return cantHear;
    }
    else if (Greeting.toUpperCase(Greeting) === Greeting) {
        return yesIndeed;
    }
    else if ("Let\'s have dinner together!" === Greeting) {
        return loveTo;
    }
}