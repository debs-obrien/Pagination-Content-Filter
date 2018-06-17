"use strict";
let list = document.getElementsByClassName('student-item');
let newList = [];
const max = 10;
let page = 1; // will change depending on link clicked
let pageNum = page -1;
let maxNum = (pageNum * 10) + max;
let startPage = pageNum * max;
const totalPagination = Math.ceil(list.length / max);


const HideStudents = (list) => {
    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute("style", "display: none;");
    }

};
const showPage = (list, startPage, pageNum, maxNum) => {
    HideStudents(list);
    newList = [];
    if(maxNum >= list.length){
        maxNum = list.length
    }
    for (let i = startPage; i < maxNum; i++) {
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
    for (let i = 1; i <= totalPagination; i++) {
        const link = document.createElement("a");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(link);
        link.setAttribute('href', '#');
        link.setAttribute('class', 'page-number');
        newPage = i;
        link.innerHTML = newPage;
        const currentPage = document.getElementsByClassName('page-number');
        currentPage[i-1].addEventListener('click', changePage);


    }


};

const changePage = () => {
    page = event.target.innerHTML;
    console.log(page);
    HideStudents(list);
    //showPage(list, startPage, 6, maxNum);
};

createPagination(totalPagination);

showPage(list, startPage, pageNum, maxNum);
