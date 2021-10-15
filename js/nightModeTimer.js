
// Start Config

// Configure below when the page should switch from daily mode to nightly mode [sec]
let startNightTime = 19 * 3600 + 0 * 60 + 0 * 1;
// Configure below when the page should switch from nightly mode to daily mode [sec]
let endNightTime = 7 * 3600 + 0 * 60 + 0 * 1;
// Configure the name of the day mode stylesheet below
let day = "color-day.css";
// Configure the name of the night mode stylesheet below
let night = "color-night.css";

// Stop Config


function time(){
    const now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    const time = hour * 3600 + min * 60 + sec;

    return time;
}

if (startNightTime < endNightTime) {
    if (time() >= startNightTime && time() < endNightTime) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/" + night + "\">");
    } else {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/" + day + "\">");
    }
} else if (startNightTime > endNightTime) {
    if (time() >= startNightTime || time() < endNightTime) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/" + night + "\">");
    } else {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/" + day + "\">");
    }
} else {
    document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/" + day + "\">");
}
