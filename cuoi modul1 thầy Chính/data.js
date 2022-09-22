const products = [
    {
        id: 1,
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
]


let dataRender="";
for(let i=0;i<products.length;i++){
    dataRender += `
    <div class="item" onclick="getDataItem(${products[i].id})">
            <div class="item-image">
                <img src=${products[i].hinhAnh}>
            </div>
            <div class="item-title"
                ${products[i].ten}
            </div>
            <div class="item-type">
                ${products[i].theLoai}
            </div>
            <div class="item-price">
              ${products[i].gia}
            </div>
        </div>
    `
}

document.getElementById("list-item").innerHTML=dataRender;
;
function getDataItem(id){
    let index=-1;
    for(let i =0;i<products.length;i++){
        if(products[i].id===id){
            index=i;
        }
    }
    alert(products[index].gia)
}




