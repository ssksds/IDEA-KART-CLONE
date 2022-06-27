var form = document.querySelector("form");

var userData = JSON.parse(localStorage.getItem("user"));
console.log(userData);
form.addEventListener("submit", myfun);

function myfun(event) {
  event.preventDefault();
  var signinData = {
    email: form.email.value,
    password: form.password.value,
  };

  userData.findIndex(function (elem) {
    if (
      elem.email === signinData.email &&
      elem.password === signinData.password
    ) {
      alert("Login Successful");

      localStorage.setItem("signinData", JSON.stringify(elem));
      window.location.href = "../index.html";
      let account=document.getElementById('account')
      account.innerHTML="Account"
    } else {
      let f = (document.getElementById("failed").innerHTML = `
                  <p id="error">1 error prohibited this user from being saved:
                  </p>
                  <p> password is wrong</p>
                  
                  `);
    }
  });
}
