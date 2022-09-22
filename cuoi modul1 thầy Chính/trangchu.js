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
}





const products = [
    {id: 1,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220317/BT00006__2__thumb.jpg" ,
        ten:'KANE TEE | TRẮNG PHỐI ĐỎ ĐEN' ,
        theLoai: "Basics",
        gia:599.000,
    },
    {
        id: 2,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220407/LACOS208__2__thumb.jpg>" ,
        ten:"SPORT SUIT | ĐEN (KHÓA TÚI)" ,
        theLoai: "Basics",
        gia:599.000,
    },
    {
        id: 3,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220420/LACOS217__2__thumb.jpg" ,
        ten:"SLIM JEAN | ĐEN - FS" ,
        theLoai: "Basics",
        gia:1599.000,
    },
    {
        id: 4,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20210310/gl5416_thumb.jpg",
        ten:"SPORT SUIT | TRẮNG (KHÓA TÚI)" ,
        theLoai: "Basics",
        gia:599.000,
    },
    {
        id: 5,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20210204/gl5437__thumb.jpg",
        ten:"SPORT SUIT | TRẮNG (KHÓA TÚI)" ,
        theLoai: "Basics",
        gia:299.000,
    },
    {
        id: 6,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20211102/1068LB2_2_thumb.jpg",
        ten:"CHACO CLASSIC ATHLETIC | ĐEN - 1111" ,
        theLoai: "Basics",
        gia:1899.000,
    },
    {
        id: 7,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220121/EG1884__thumb.jpg",
        ten:"NIKE VICTORI ONE MEN'S SLIDE WHT - CN9675-005-FS" ,
        theLoai: "Basics",
        gia:599.000,
    },
    {
        id: 8,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220121/G58172__thumb.jpg",
        ten:"LACOSTE GRADUATE LCR3 118 1SPM - 0013237-FS" ,
        theLoai: "Basics",
        gia:2025.000,
    },
    {
        id: 9,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20220915/00552L6__2__thumb.JPG",
        ten:"LACOSTE L004 0922 1 CMA - 00552L6-FS" ,
        theLoai: "Basics",
        gia:1899.000,
    },
    {
        id: 10,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20210919/0028312_4_thumb.jpg",
        ten:"LACOSTE CLASSIC ATHLETIC | Xanh-XBI99" ,
        theLoai: "Basics",
        gia:1899.000,
    },
    {
        id: 11,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20210408/cn9675_005_2_thumb.jpg",
        ten: "NIKE VICTORI ONE MEN'S SLIDE WHT - CN9675-005-FS" ,
        theLoai: "Basics",
        gia:1899.000,
    },
    {
        id:12,
        hinhAnh:"https://img.cdn.vncdn.io/nvn/ncdn/store/20641/ps/20210408/cn9675_005_2_thumb.jpg",
        ten: "NIKE VICTORI ONE MEN'S SLIDE WHT - CN9675-005-FS" ,
        theLoai: "Basics",
        gia:1845.000,
    }

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
    for(let i =0;i<products.length;i++){
        if(products[i].id===id){
            sanPham.push(products[i])
        }
    }
    console.log("sanPham",sanPham)
    localStorage.setItem("cart",JSON.stringify(sanPham))
}

let btn = document.getElementById()





