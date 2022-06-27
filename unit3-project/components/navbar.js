let navbar = () => {
    return `<nav class="navbar navbar-expand-lg navbar-light text-light bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/" style="color: yellow; --darkreader-inline-color:#d9d916;" data-darkreader-inline-color="">IDEAKART</a>
    <form class="d-flex">
        <div class="input-group">                    
            <input type="text" class="form-control" id="query" placeholder="Search">
            <button type="button" id="search" class="btn btn-secondary"><i class="bi-search"></i></button>
        </div>
    </form>
    <button type="button" class="navbar-toggler btn-light" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span class="navbar-toggler-icon">search</span>
    </button>

    <div class="collapse navbar-collapse text-light justify-content-end" id="navbarCollapse">
    <div class="navbar-nav">
    <a href="./about.html" class="nav-item nav-link active text-light">About</a>
    <a href="./form.html" class="nav-item nav-link active text-light">Contact</a>
    <a href="./login.html" class="nav-item nav-link active text-light">Sign In</a>
    <a href="./signup.html" class="nav-item nav-link active text-light">Sign Up</a>
    <div id="account"></div>
    </div>
    </div>

    </div>
    </div>
    </nav>`
};

let footer=()=>{
    return `  <div class="col-md-12">
    <div class="col-md-4">
    <h4>Get To Know Us</h4>
    <ul>
    <li><a href="./about.html">About </a></li>
    <li><a href="./form.html">Contact</a></li>
    <li><a href="./search.html">Search</a></li>
    <li><a href="./privacy.html">Privacy Policy</a></li>
    <li><a href="/refund.html">Refund Policy</a></li>
    <li><a href="/make-money">Earn Money Online</a></li>
    <li><a href="https://www.quickbuyer.in" target="_blank">QuickBuyer</a></li>
    </ul>
    </div>
  
   
    </div>`
}

export  {navbar,footer};