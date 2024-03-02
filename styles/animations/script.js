"use strict";

const myObserver = new IntersectionObserver(function (entries) {
    console.log(entries);
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.classList.contains('hidden')) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        }
    });
});

const elements = [...document.getElementsByClassName("hidden")];

elements.forEach((element) => {
    myObserver.observe(element);
});