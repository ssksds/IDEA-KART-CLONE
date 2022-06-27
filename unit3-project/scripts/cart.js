
import {navbar} from '../components/navbar.js'
let nav= document.getElementById('navbar').innerHTML=navbar();

import {footer} from '../components/navbar.js'
let fot= document.getElementById('fotter').innerHTML=footer();


              // ----------get localStorage------------------------
let arr = JSON.parse(localStorage.getItem("book"));
append(arr);


              // ----------------------localStorage_append------------------------
function append(arr) {
  let container = document.getElementById("con2");
  arr.forEach(function (el) {

    let maindiv = document.createElement("div");
    maindiv.setAttribute("id", "con21");

    let maindiv1 = document.createElement("div");
    maindiv1.setAttribute("id", "con22")

    let img = document.createElement("img");
    img.src = el.volumeInfo.imageLinks.thumbnail;
    

    let p = document.createElement("p");
    p.innerText = "Buy it at best price from here";

    let maindiv11 = document.createElement("div");

    let price = document.createElement("h3");
    let amount;
    if(el.saleInfo.listPrice==undefined){
      amount=el.saleInfo.saleability
    }else{
      amount = el.saleInfo.listPrice.amount;
    }
    

    let butt = document.createElement("button");
    butt.innerText = "Buy Now";
    butt.setAttribute("id", "buybtn");

    maindiv11.append(price, butt);

    let headp = document.createElement("p");
    headp.innerText =
      "Get Instant Cashback when you pay using Amazon Pay... Click Here";

    let head = document.createElement("h2");
    head.innerText = "Book Specification";

  

    let divform = document.createElement("div");
    divform.innerHTML = `  <table id="product-properties" class="table table-striped" data-hook="">
            <tbody>
            <tr class="">
            <td><strong>Binding</strong></td>
            <td>Paperback
            </td>
            </tr>
            
            <tr class="">
            <td><strong>Language</strong></td>
            <td>English</td>
            </tr>
            
            <tr class="">
            <td><strong>Number Of Pages</strong></td>
            <td>${el.volumeInfo.pageCount}</td>
            </tr>
            
            <tr class="">
            <td><strong itemprop="brand">Author</strong></td>
            <td>${el.volumeInfo.authors}</td>
            </tr>
            
            <tr class="">
            <td><strong>Publisher</strong></td>
            <td>${el.volumeInfo.publisher}</td>
            </tr>
            
            <tr class="">
            <td><strong>Isbn-10</strong></td>
            <td>${el.volumeInfo.industryIdentifiers[0].identifier}</td>

            </tr>
            <tr class="">
                
            <td><strong itemprop="sku">Isbn-13</strong></td>
            <td>${el.volumeInfo.industryIdentifiers[1].identifier}</td>
            
            </tr>
            
            <tr class="">
            <td><strong>Dimension</strong></td>
            <td>13.36*1.35*20.14</td>
            </tr>
            </tbody>
            </table>`;

    // maindiv21.append(divform);
    maindiv1.append(img, p, maindiv11, headp, head, divform);

    maindiv.append(maindiv1)
let maindivv=document.createElement('div');
maindivv.setAttribute("id",'con23')

let para=document.createElement('div');
para.setAttribute("id","para")

let p5= document.createElement('p')
p5.innerHTML=el.volumeInfo.description;

let matter21=document.createElement('h4');
p.innerText="Moussa Issa's Frcem Intermediate: Short Answer Question Third Edition, Volume 2 in Full Colour";

let matter2=document.createElement('p')
matter2.innerText=""

let forma=document.createElement("form");
forma.innerHTML=`<table class="table table-striped" style="">
<thead>
<tr>
<th>Store</th>
<th>Price</th>
<th>Buy Now</th>
</tr>
</thead>
<tbody>

<tr itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
<td scope="row">Amazon, Paperback</td>
<td><span itemprop="priceCurrency" content="Rs. ">Rs. </span><span itemprop="price">5022.0</span></td>

<td>
<button> <a href="https://www.amazon.in/Under-Surface-Jan-Markos/dp/1784830488?SubscriptionId=AKIAIUO4VXYJFOFNWAEA&tag=httptopicerco-21&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1784830488"  class="btn btn-primary" style="color:white;height:48px;">Buy Now</a></button>

</td></tr>
</tbody>
</table>`
forma.setAttribute("id",'formm')

para.append(p5)
maindivv.append(para,matter21,matter2,forma)



    container.append(maindiv,maindivv);
  });
}

