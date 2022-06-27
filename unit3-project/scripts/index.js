
                // ------------------import nav&footer--------------------

import { navbar } from "../components/navbar.js";
let nav = (document.getElementById("navbar").innerHTML = navbar());

import { footer } from "../components/navbar.js";
let fot = (document.getElementById("fotter").innerHTML = footer());





               // ------------------fetching home data------------------------------

let getData = async () => {
  try {
    let res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=time&printType=books&orderBy=newest&projection=full&key=AIzaSyCEQG69IByWixiX7GzNwQSFbST4k255M9E&maxResults=40`
    );
    let data = await res.json();
    console.log(data);
    aappendData(data.items);
  } catch (err) {
    console.log(err);
  }
};
getData();

            // --------------------------------append_home_data-----------------------------


function aappendData(data) {
  let ap1 = document.querySelector("#container");
  data.forEach((el) => {
    let div = document.createElement("div");

    let hr = document.createElement("hr");
    div.setAttribute("id", "sdiv");

    let img = document.createElement("img");
    img.src = el.volumeInfo.imageLinks.thumbnail;

    let title = document.createElement("p");
    title.textContent = el.volumeInfo.title;

    let price = document.createElement("p");
    price.textContent = `${el.volumeInfo.pageCount}.0`;
    price.style.color = "#219FD1";
    price.setAttribute("id", "price");

    title.setAttribute("id", "title");
    let add = document.createElement("div");
    let a1 = document.createElement("a");
    a1.innerText = "More-Details";
    let a2 = document.createElement("a");
    a2.innerText = "view-now";
    let cart = document.createElement("i");

    let read = document.createElement("i");
    read.setAttribute("class", "fas fa-sliders-h");

    add.addEventListener("click", function () {
      showData(el);
      window.location.href = "cart.html";
    });

    cart.append(a2);
    read.append(a1);

    cart.setAttribute("class", "fas fa-shopping-cart");
    add.append(cart, read);
    div.append(img, title, price, hr, add);
    ap1.append(div);
  });
}

let showData = (el) => {
  let arr = [];
  arr.push(el);
  localStorage.setItem("book", JSON.stringify(arr));
};


                  // -------------------search&and&_redirect-----------------------------------

let book = document.getElementById("search");
book.addEventListener("click", checkBook);

async function checkBook(event) {
  event.preventDefault();
  try {
    let search = document.getElementById("query").value;

    let res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    var mydata = await res.json();
    console.log(mydata);
  } catch (error) {
    console.log("error", error);
  }
  let getdata = [];
  getdata.push(mydata);
  localStorage.setItem("books", JSON.stringify(getdata));
  window.location.href = "search.html";
}
