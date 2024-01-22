function AboutText() {
    var text = document.getElementById("abouttext");
    text.style.display = "block";
}
function MusicText() {
    var text = document.getElementById("musictext");
    text.style.display = "block";
}  
function SocialsText() {
    var text = document.getElementById("socialstext");
    text.style.display = "block";
}
function removeA() {
    var displayParagraph = document.getElementById("abouttext");

    displayParagraph.style.display = "none";
}
function removeM() {
    var displayParagraph = document.getElementById("musictext");

    displayParagraph.style.display = "none";
}
function removeS() {
    var displayParagraph = document.getElementById("socialstext");

    displayParagraph.style.display = "none";
}