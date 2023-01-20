function showMoreInfo() {
    var extraInfo = document.getElementById("extra-info");
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        document.getElementById("more-info").innerHTML = "Show Less";
    } else {
        extraInfo.style.display = "none";
        document.getElementById("more-info").innerHTML = "Learn More";
    }
}
