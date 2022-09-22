function dangKy(){
// let userName=document.getElementById("username").value;
// console.log(userName)
let emailDangKy=document.getElementById("email").value;
console.log(emailDangKy)
let passWord =document.getElementById("password").value;
    console.log(passWord)
let passWordCheck=document.getElementById("confirmpassword").value;
    console.log(passWordCheck)
let saiTen=document.getElementById("tentrong");
    console.log("aaa")
let saiPass=document.getElementById("passwordtrong");
let saiEmail=document.getElementById("emailtrong");
let saiNhapLai=document.getElementById("nhaplaipasstrong")
  // if (userName==""){
  //     saiTen.innerHTML= "Tên không được để trống"
  //     saiTen.style.color="red"
  //     console.log(saiTen)
  // }
    if (emailDangKy==""){
      saiEmail.innerHTML="Hãy nhập email đăng ký"
      saiEmail.style.color="red"
        saiEmail.style.fontSize ="20px"
  }else if (passWord==""){
      saiPass.innerHTML="Mật khẩu không được để trống"
      saiPass.style.color="red"
          saiPass.style.fontSize ="20px"
      saiEmail.innerHTML=""
      saiTen.innerHTML= ""
  }else if (passWordCheck==""){
      saiNhapLai.innerHTML="Nhập lại password"
      saiNhapLai.style.color="red";
        saiNhapLai.style.fontSize ="20px"
      saiPass.innerHTML=""
      saiEmail.innerHTML=""
      saiTen.innerHTML= ""
  }else if (passWord!=passWordCheck){
      saiNhapLai.innerHTML="Nhập lại password không đúng"
      saiNhapLai.style.color="red"
        saiNhapLai.style.fontSize ="20px"
      saiPass.innerHTML=""
      saiEmail.innerHTML=""
      saiTen.innerHTML= ""
  }else {
        saiEmail.innerHTML="Đăng ký thành công"
        saiEmail.style.color="green"
        saiNhapLai.innerHTML=""
        window.localStorage.setItem("USERNAME_KEY",emailDangKy)
        window.localStorage.setItem("PASSWORD_KEY",passWord)
        window.location.href="dangnhap1.html"
        event.preventDefault();
        // let username = document.getElementById("username").value;
        let email = emailDangKy;
        let password = passWord;
        let user = {
            email: email,
            password: password,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(email, json);
        state = false;

  }

}


// let isEmailAddress = (val) => {
//     return (
//         /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) ||
//         /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val)
//     );
// };
// console.log(isEmailAddress("gmail.com@.com")); //false
// console.log(isEmailAddress("gmail.com@gm.com")); //true
//
// nutDangKi.onclick = function (event) {
//     let check = isEmailAddress(`${email.value}`);
//     if (check == true) {
//         if (password.value === "") {
//             alert("Không được bỏ trống mật khẩu");
//         } else if (confirmpassword.value === "") {
//             alert("Không được bỏ trống mật khẩu");
//         } else if (password.value !== confirmpassword.value) {
//             alert("Mật khẩu không giống nhau,mới nhập lại");
//         } else {
//             // alert("Đăng kí thành công");
//             swal({
//                 title: "Good job!",
//                 text: "You clicked the button!",
//                 icon: "success",
//                 button: "Aww yiss!",
//             });
//             // modal.style.display = "none";
//             // modalDN.style.display = "inline-flex";
//             // luu mk
//             event.preventDefault();
//             // let username = document.getElementById("username").value;
//             let email1 = email.value;
//             let password1 = password.value;
//             let user = {
//                 email: email1,
//                 password: password1,
//             };
//             let json = JSON.stringify(user);
//             localStorage.setItem(email1, json);
//             state = false;
//         }
//     } else {
//         alert("Email không hợp lệ");
//     }
// };
