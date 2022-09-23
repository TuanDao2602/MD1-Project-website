let dataRender1="";

function cart(){
    const products=JSON.parse(localStorage.getItem('cart'));
    for(let i=0;i<products.length;i++) {
        dataRender1 += `
    <div class="hinhanh">
      <img src="${products[i].hinhAnh}" 
    </div>
    <div class="ten">
      ${products[i].ten}
    </div>
    <div class="theloai">
     ${products[i].theLoai}
    </div>
    <div class="gia">
      ${products[i].gia}
    </div>
    <input type="number" class="soluong" value="1">
    <p class="tongtien">599.000</p>
    <button id="xoaSanPham" class="xoa"> Xóa</button>
    `
        document.getElementById("itemgiohang").innerHTML = dataRender1;
    }

}
cart()


