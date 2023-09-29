


function calculateTime() {
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var miliSecond = today.getMilliseconds();
    var ampm;
    var dayNames = ["sun", "mon", "tue", "wed", "wed", "fri", "sat",];

    if (ampm > 12) {
        ampm = ampm - 12;
        ampm = "am";
    } else {
        ampm = "pm";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (miliSecond < 100) {
        miliSecond = "0" + miliSecond;
    }

    document.getElementById("day").innerHTML = dayNames[day] + " :";
    document.getElementById("hour").innerHTML = hour + " :";
    document.getElementById("minute").innerHTML = minute + " :";
    document.getElementById("second").innerHTML = second + " :";
    // document.getElementById("miliSeconds").innerHTML = miliSecond + " :";
    document.getElementById("ampm").innerHTML = ampm;

    // document.getElementById("demo").innerHTML = hour + ":" + minute + ":" + second + ":"  + " " + ampm;

    setTimeout(calculateTime, 100)
}
calculateTime();