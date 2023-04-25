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
let mypdf = "resume.docx";

proj1.addEventListener("click", (event) => {
    console.log("clicked!") //debug statements
    window.open("https://raw.githack.com/lvl2daniel/Calculator/main/index.html");
})
proj2.addEventListener("click", (event) => {
    console.log("clicked!")
    window.open("https://devpost.com/software/sattracker");
}); 
proj3.addEventListener("click", (event) => {
    console.log("clicked!")
    window.open("https://lvl2daniel.github.io/Etch-A-Sketch/");
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
    window.open("resume.docx");
})
email.addEventListener("click", (event) => {
    console.log("clicked!")
})


