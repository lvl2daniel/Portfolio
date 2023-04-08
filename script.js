const proj1 = document.getElementById("one");
const proj2 = document.getElementById("two");
const proj3 = document.getElementById('three');
const git = document.getElementById('git');
const linkedIn = document.getElementById('linkedIn');
const resume = document.getElementById('resume');
const email = document.getElementById('email');
console.log(proj1);
console.log(proj2);
console.log(proj3);
let mypdf = "rename.docx";

proj1.addEventListener("click", (event) => {
    console.log("clicked!") //debug statements
    window.open("https://rawcdn.githack.com/lvl2daniel/Calculator/a91c1209f9c6cef52b9f855881f8831925a2c8ca/index.html");
})
proj2.addEventListener("click", (event) => {
    console.log("clicked!")
    window.open("https://devpost.com/software/sattracker");
}); 
proj3.addEventListener("click", (event) => {
    console.log("clicked!")
    window.open("https://rawcdn.githack.com/lvl2daniel/Etch-A-Sketch/f06e869abd3bf23ca0795c5ec843b5f848db585d/index.html");
})
git.addEventListener("click", (event) => {
    console.log("clicked!")
    window.open("https://github.com/lvl2daniel");
})
linkedIn.addEventListener("click", (event) => {
    console.log("clicked!")
    window.open("https://www.linkedin.com/in/daniel-gonzalez-3874a7215/");
})
resume.addEventListener("click", (event) => {
    console.log("clicked!")
    window.open("rename.docx");
})
email.addEventListener("click", (event) => {
    console.log("clicked!")
    window.open("https://rawcdn.githack.com/lvl2daniel/Etch-A-Sketch/f06e869abd3bf23ca0795c5ec843b5f848db585d/index.html");
})



