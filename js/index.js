"use strict";
let list = document.getElementsByClassName('student-item');
let newList = [];
let max = 10;
const totalPagination = Math.ceil(list.length / max);
let startPage = 0;


const HideStudents = (list) => {
    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute("style", "display: none;");
    }
};

const showPage = (list, startPage) => {
    HideStudents(list);
    let endPage = startPage + max;
    newList = [];
    if(endPage >= list.length){
        endPage = list.length
    }
    for (let i = startPage; i < endPage; i++) {
        newList.push(list[i]);
    }
    newList.forEach(element => {
        element.setAttribute("style", "display: block;");
    });
};

const createPagination = (totalPagination) => {
    const pageDiv = document.getElementsByClassName('page')[0];
    const newDiv = document.createElement("div");
    pageDiv.appendChild(newDiv);
    newDiv.setAttribute('class', 'pagination');
    const ul = document.createElement("ul");
    newDiv.appendChild(ul);

    let newPage;
    for (let i = 0; i < totalPagination; i++) {
        const link = document.createElement("a");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(link);
        link.setAttribute('href', '#');
        newPage = i + 1;
        link.innerHTML = newPage;

    }
    const link = document.getElementsByTagName('A');
    link[0].setAttribute('class', 'active');
};

const calculatePage = (startPage, max) => {
    startPage = startPage * max;
    return startPage;
};

const activeClass = () => {
    const active = document.querySelector('.active');
    if(active){
        active.classList.remove('active');
    }
    event.target.classList.add('active');
};


const changePage = () => {
    event.stopPropagation();
    if(event.target.tagName === 'A'){
        activeClass();
        startPage = (event.target.innerHTML -1) * max;
        showPage(list, startPage);
    }
};

createPagination(totalPagination);
calculatePage(startPage, max);
showPage(list, startPage);
document.querySelector('.pagination >ul').addEventListener('click', changePage);

