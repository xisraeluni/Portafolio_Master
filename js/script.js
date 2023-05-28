import { link } from "fs";
import { off } from "process";

 /*============scroll sections avtive links=============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +']').classList.add('active');
            });
        };
    });
};