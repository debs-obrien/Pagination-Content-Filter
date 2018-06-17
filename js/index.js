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
        link.setAttribute('class', 'page-number');
        newPage = i + 1;
        link.innerHTML = newPage;
        const currentPage = document.getElementsByClassName('page-number');
        currentPage[0].setAttribute('class', 'page-number active');
        currentPage[i].addEventListener('click', changePage);
    }


};

const calculatePage = (startPage, max) => {
    startPage = startPage * max;
    return startPage;
};

const activeClass = () => {
    if(event.target.className !== 'page-number active'){
        let notActive = document.getElementsByClassName('active');
        notActive[0].setAttribute('class', 'page-number');
        event.target.setAttribute('class', 'page-number active');
    }
};


const changePage = () => {
    startPage = (event.target.innerHTML -1) * max;
    showPage(list, startPage);
    activeClass();
};

createPagination(totalPagination);
calculatePage(startPage, max);
showPage(list, startPage);
