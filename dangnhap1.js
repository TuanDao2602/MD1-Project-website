// let email="tuanktktcn@yahoo.com"
// let pass="12345"



    // let dangNhap=document.getElementById("emaildangnhap").value;
    //
    // let passWord=document.getElementById("passworddangnhap").value;
    //
    // let emailTrong = document.getElementById("emailsai");
    // let passwordtrong = document.getElementById("passworsai")
    //
    // if (dangNhap==""){
    //     emailTrong.innerHTML="Email không được để trống"
    //     emailTrong.style.color="red"
    // }else if(dangNhap ==  window.localStorage.getItem("USERNAME_KEY") && passWord==''){
    //     passwordtrong.innerHTML="Password không được để trống"
    //     passwordtrong.style.color="red"
    //     emailTrong.innerHTML=""
    // }else if (dangNhap==  window.localStorage.getItem("USERNAME_KEY") && passWord !== window.localStorage.getItem("PASSWORD_KEY")){
    //     passwordtrong.innerHTML="Password Sai"
    //     passwordtrong.style.color="red"
    //     emailTrong.innerHTML=""
    // }else if (dangNhap !==  window.localStorage.getItem("USERNAME_KEY")){
    //     emailTrong.innerHTML="Email Sai"
    //     emailTrong.style.color="red"
    // }else if (dangNhap !==  window.localStorage.getItem("USERNAME_KEY")&& passWord== window.localStorage.getItem("PASSWORD_KEY")) {
    //     emailTrong.innerHTML = "Email Sai"
    //     emailTrong.style.color = "red"
    //     passwordtrong.innerHTML=""
    //
    //
    // }else if (dangNhap==  window.localStorage.getItem("USERNAME_KEY") && passWord== window.localStorage.getItem("PASSWORD_KEY")){
    //     emailTrong.innerHTML="Đăng Nhập Thành Công"
    //     emailTrong.style.color="green"
    //     window.location.href="trangchu.html"
    // }
// function dangnhap1() {
    let btnDangNhap1 = document.getElementById("dangnhap3");
    btnDangNhap1.onclick = function login() {
        event.preventDefault();
        // let username = document.getElementById("username").value;
        let emailTrong = document.getElementById("emailsai");
        let passwordtrong = document.getElementById("passworsai")
        let email = document.getElementById("emaildangnhap").value;
        let password = document.getElementById("passworddangnhap").value;
        let user = localStorage.getItem(email);
        let data = JSON.parse(user);
        if (!user) {
            alert("Vui Lòng Nhập Lại Username & Password");
        } else if (email == data.email && password == data.password) {
            alert("dang nhap thanh cong");

            window.location.href="index.html"
        } else {
            alert("Đăng nhập thất bại");
            alert("nếu chưa có tài khoản thì hãy đăng kí");
        }
    };
// }




