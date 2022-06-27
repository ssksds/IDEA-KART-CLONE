import {navbar} from '../components/navbar.js'
let nav= document.getElementById('navbar').innerHTML=navbar();

import {footer} from '../components/navbar.js'
let fot= document.getElementById('fotter').innerHTML=footer();

let p=document.getElementById('pop').addEventListener("click",popUp)
function popUp() {
    alert("we have reach out to you soon!");
    window.location.href='index.html'
}