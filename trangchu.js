function signOut(){
    let check=confirm("bạn có muốn thoát khỏi trang web không ?")
    if(check){
        window.location.href='dangnhap1.html'
        localStorage.removeItem('USERNAME_KEY')
        localStorage.removeItem('PASSWORD_KEY')

    }
}

let username = window.localStorage.getItem("USERNAME_KEY")
// let signOut=document.getElementById("signout")
if (username!==null) {
    document.getElementById("dangnhap").innerHTML = username;
    document.getElementById("dangky").innerHTML="";
    document.getElementById("signout").style.display= "block"

}

else if (username==null){
    document.getElementById("signout").style.display= "none"

}





const products = [
    {id: 1,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220810/LACOS252__1__thumb.jpg" ,
        ten:'LACOSTE - TRẮNG CỔ XANH - LACOS252-FS' ,
        theLoai: "Basics",
        gia:425.000,
    },
    {
        id: 2,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220810/LACOS251__2__thumb.jpg" ,
        ten:"LACOSTE - ĐEN CỔ TRẮNG - LACOS251-FS\n" ,
        theLoai: "Basics",
        gia:425.000,
    },
    {
        id: 3,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220810/LACOS250__2__thumb.jpg" ,
        ten:"LACOSTE - XANH CỔ TRẮNG - LACOS250-FS" ,
        theLoai: "Basics",
        gia:425.000,
    },
    {
        id: 4,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220711/HA6155__2__thumb.jpg",
        ten:"ADIDAS GO TO NO SHOW POLO SHIRT - HA6155-FS" ,
        theLoai: "Basics",
        gia:1655.000,
    },
    {
        id: 5,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220426/YH9098_1__1__thumb.jpg",
        ten:"LACOSTE - XANH THAN - YH9098-1-FS" ,
        theLoai: "Basics",
        gia:855.000,
    },

    {
        id: 6,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220802/HAZZYS02__2__thumb.jpg",
        ten:"ÁO POLO HAZZYS - TRẮNG - HAZZYS02-FS" ,
        theLoai: "Basics",
        gia:720.000,
    },
    {
        id: 7,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220322/LACOS204__2__thumb.jpg",
        ten:"LACOSTE - ĐỎ CỔ KẺ TRẮNG - LACOS204-FS",
        theLoai: "Basics",
        gia:720.000,
    },
    {
        id: 8,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220426/PH7647_3__2__thumb.jpg",
        ten:"LACOSTE - XANH CỔ CHỮ TRẮNG - PH7647-3-FS" ,
        theLoai: "Sport",
        gia:725.000,
    },
    {
        id: 9,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220908/2_thumb__2_.jpg",
        ten:"Slim Jean | Đen - FS" ,
        theLoai: "Basics",
        gia:620.000,
    },
    {
        id: 10,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220907/16_thumb.jpg",
        ten:"Scratch Jean | Xanh Đậm - FS" ,
        theLoai: "Basics",
        gia:620.000,
    },
    {
        id: 11,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20201120/img_9981_6_thumb.jpg",
        ten: "Scratch Jean | Xanh Nhạt - FS" ,
        theLoai: "Basics",
        gia:620.000,
    },
    {
        id:12,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20201124/img_9974_thumb.jpg",
        ten: "Scratch Jean | Xanh Nhạt - FS" ,
        theLoai: "Basics",
        gia:1200.000,
    },
    {
        id: 13,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220915/005521G__2__thumb.JPG",
        ten: "LACOSTE L004 0922 1 CMA - 005521G-FS" ,
        theLoai: "Basics",
        gia:1899.000,
    },
    {
        id: 14,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220915/00552L6__2__thumb.JPG",
        ten: "LACOSTE L004 0922 1 CMA - 00552L6-FS" ,
        theLoai: "Basics",
        gia:1899.000,
    },
    {
        id: 15,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220920/0044312__2__thumb.JPG",
        ten: "LACOSTE L004 0922 1 CMA - 0044312-FS" ,
        theLoai: "Basics",
        gia:1899.000,
    },
    {
        id: 16,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220915/0010407__2__thumb.JPG",
        ten: "LACOSTE COURTLINE 0120 1 CMA - 0010407-FS" ,
        theLoai: "Basics",
        gia:2299.000,
    },
    {
        id: 17,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220725/00202D2__2__thumb.jpg",
        ten: "LACOSTE CROCO DUALISTE 0922 CMA - 00202D2-FS" ,
        theLoai: "Basics",
        gia:850.000,
    },
    {
        id: 18,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220718/0021092__2__thumb.jpg",
        ten: "LACOSTE CROCO DUALISTE 1122 2 CMA - 0020312-FS" ,
        theLoai: "Basics",
        gia:850.000,
    },
    {
        id: 19,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220725/00211M8__2__thumb.jpg",
        ten: "LACOSTE CROCO DUALISTE 1122 2 CMA - 00211M8-FS" ,
        theLoai: "Basics",
        gia:899.000,
    },{
        id: 20,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220623/F35580__2__thumb.jpg",
        ten: "LACOSTE CROCO DUALISTE 1122 2 CMA - 00211M8-FS" ,
        theLoai: "Basics",
        gia:899.000,
    },{
        id: 21,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220915/2_thumb.jpg",
        ten: "Sport Suit | Đen (Khóa Túi)" ,
        theLoai: "BODEBEN344",
        gia:990.000,
    },{
        id: 22,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220919/28_thumb.jpg",
        ten: "Sport Suit | Trắng (Khóa Túi)" ,
        theLoai: "BODEBEN343",
        gia:990.000,
    },{
        id: 23,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220915/7_thumb.jpg",
        ten: "Sport Suit | Xám (Khóa Túi)" ,
        theLoai: "BODEBEN342",
        gia:990.000,
    },{
        id: 24,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20211112/2__7__thumb.jpg",
        ten: "Flex Suit 2.0 | Đen Sọc Trắng" ,
        theLoai: "BODEBEN341",
        gia:990.000,
    },{
        id: 25,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220325/PT1980_8__2__thumb.jpg",
        ten: "NIKE - ĐEN - PT1980-10-FS" ,
        theLoai: "Basics",
        gia:299.000,
    },{
        id: 26,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220325/PT1980_8__2__thumb.jpg",
        ten: "ADIDAS - QUAI XANH THAN CHỮ BÉ - PT1980-8-FS" ,
        theLoai: "Basics",
        gia:299.000,
    },{
        id: 27,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220325/PT1980_7__1__thumb.jpg",
        ten: "ADIDAS - QUAI XÁM ĐẾ ĐEN CHỮ BÉ - PT1980-7-FS" ,
        theLoai: "Basics",
        gia:299.000,
    },{
        id: 28,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220905/Y1833_AM12__2__min_thumb.JPG",
        ten: "AMIRI - ĐEN - Y1833-AM12-FS" ,
        theLoai: "ChanCi",
        gia:1500.000,
    },{
        id: 29,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220905/548096_21__2__thumb.JPG",
        ten: "GUCCI - ĐEN - 548096-21-FS" ,
        theLoai: "Basics",
        gia:1899.000,
    },{
        id: 30,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220905/548096_25__2__thumb.JPG",
        ten: "GUCCI - NÂU KẺ TRẮNG - 548096-25-FS",
        theLoai: "Basics",
        gia:1750.000,
    },
    {
        id: 31,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220905/548096_22__2__thumb.JPG",
        ten: "GUCCI - TRẮNG KẺ CAM - 548096-22-FS" ,
        theLoai: "Basics",
        gia:1750.000,
    },
    {
        id: 32,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220905/548096_24__2__thumb.JPG",
        ten: "GUCCI - TRẮNG KẺ NÂU - 548096-24-FS" ,
        theLoai: "Basics",
        gia:1750.000,
    },




]


let dataRender = document.getElementById("list-item");
function sowProducts(id, hinhAnh, ten, theLoai, gia) {
    dataRender.insertAdjacentHTML(
        "beforeend",
        `
    <div class="item" onclick="getDataItem(${id})">
       <div class="item-image">
          <img src=${hinhAnh}
       </div>
       <div class="item-title">
          ${ten}
       </div>
       <div class="item-type">
          ${theLoai}
       </div>
       <div class="item-price">
          $ ${gia}
       </div>
       <button id="themGioHang">Thêm Vào Gio Hàng</button>
    </div>
    `

    );
}

function sowAllProducys(products) {
    dataRender.innerHTML="";
    for(let i=0;i<products.length;i++){
        sowProducts(
            products[i].id,
            products[i].hinhAnh,
            products[i].ten,
            products[i].theLoai,
            products[i].gia
        )
    }
}
sowAllProducys(products)








let sanPham=[];
function getDataItem(id){
    confirm("bạn muốn thêm sản phẩm ?")
    // window.location.reload()
    for(let i =0;i<products.length;i++){
        if(products[i].id===id){
            sanPham.push(products[i])
        }
    }
    console.log("sanPham",sanPham)
    localStorage.setItem("cart",JSON.stringify(sanPham))
}

let btn = document.getElementById(xoaSanPham)
console.log("a")





