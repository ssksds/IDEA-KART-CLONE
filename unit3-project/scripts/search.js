import { navbar } from "../components/navbar.js";
let nav = (document.getElementById("navbar").innerHTML = navbar());

import { footer } from "../components/navbar.js";
let fot = (document.getElementById("fotter").innerHTML = footer());

let m = document.getElementById("show_books");

let book = JSON.parse(localStorage.getItem("books"));
console.log(book)

appendData(book[0].items);

function appendData(book) {
  book.forEach((el) => {
    let box = document.createElement("div");
    box.setAttribute('id','main')

    let hr = document.createElement("hr");
    box.setAttribute("id", "box");

    let rightdiv=document.createElement("div")
    rightdiv.setAttribute("id", "rightdiv");

    let img = document.createElement("img");
    img.src = el.volumeInfo.imageLinks.thumbnail;

    let title = document.createElement("h4");
    
    title.style.color = "#337ab7";
    let goo= document.createElement("a");
    goo.href = `  ${el.volumeInfo.previewLink}`;
    goo.innerText =`${el.volumeInfo.title}`;
    title.append(goo)

    let left = document.createElement("div");
    left.setAttribute("id", "side");

    let ph4 = document.createElement("p");
    ph4.textContent = el.volumeInfo.description;

    let amount = document.createElement("p");
    amount.innerText ='list_price:-  300'

    let currencyCode = document.createElement("p");
    currencyCode.innerText = `country-code:-  ${el.saleInfo.country}` ;

    let retailPrice = document.createElement("p");
    retailPrice.innerHTML ="avg_price:234";

    let sells = document.createElement("div");
    sells.setAttribute("id", "sells");

    let buy = document.createElement("button");

    let printType = document.createElement("p");
    printType.textContent = `  Type :- ${el.volumeInfo.printType}`;

    let publisher = document.createElement("p");
    publisher.textContent = `Publisher: -  ${el.volumeInfo.publisher}`;

    let publishedDate = document.createElement("p");
    publishedDate.textContent = ` Publish Date: -  ${el.volumeInfo.publishedDate}`;

    let authors = document.createElement("p");
    authors.textContent = `Author : ${el.volumeInfo.authors[0]}`;

    let averageRating = document.createElement("p");
    averageRating.textContent = ` Average Rating : ${el.volumeInfo.averageRating}*****`;

    let last = document.createElement("div");

    let dowonload = document.createElement("a");

    dowonload.innerText = "Download Now";
    dowonload.style.padding = "12px";
    dowonload.style.border = "1px solid black";
    dowonload.style.borderRadius = "5px";
    dowonload.style.backgroundColor = "";

    dowonload.href = `Download Book -${el.volumeInfo.canonicalVolumeLink}`;
    last.setAttribute("id", "download");
    last.append(
      printType,
      publisher,
      publishedDate,
      authors,
      averageRating,
      dowonload
    );

    let readmore = document.createElement("button");
    readmore.setAttribute("id",'google')
    let goog= document.createElement("a");
    goog.href = `  ${el.volumeInfo.previewLink}`;
    goog.innerText = "READ More";
   
    readmore.append(goog);

    left.append(  ph4);

    rightdiv.append(title,img)
    box.append(title,img, left);

    sells.append(amount, retailPrice, currencyCode, buy);

    m.append(box, sells,  last, readmore);
  });
}
