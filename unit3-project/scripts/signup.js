
function Data(name, mobile, email, password) {
    this.name = name;
    this.mobile = mobile;
    this.email = email;
    this.password = password;
  }




  function submitData(e) {
    e.preventDefault();

    let form = document.getElementById("usee");

    let name = form.name.value;
    let mobile = form.mobile.value;
    let email = form.email.value;
    let password = form.password.value;
    let password2=form.password2.value;
   checkPassword(password,password2)
  
let arr = JSON.parse(localStorage.getItem("user")) || [];

    let p = new Data(name, mobile, email, password);
    arr.push(p);
    localStorage.setItem("user", JSON.stringify(arr));
  
    
  }

  function  checkPassword(password,password2){
    if(password!=password2){
        alert('password mismatch')
        // window.location.reload()
        

    }else{
     alert('Sign Up Sucussfull')
    window.location.href = "login.html";
    
    }
}