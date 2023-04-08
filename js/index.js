var anhAr = [];
var currentIndex = 0;

function loadAnh() {

    for (var i = 0; i < 9; i++) {
        anhAr[i] = new Image();
        anhAr[i].src = "hinh/h" + i + ".jpg";

    }

}

function Anh0() {
    document.getElementById("img").src = "hinh/h0.jpg";
}
function Anh1() {
    document.getElementById("img").src = "hinh/h1.jpg";
}
function Anh2() {
    document.getElementById("img").src = "hinh/h2.jpg";
}
function Anh3() {
    document.getElementById("img").src = "hinh/h3.jpg";
}
function Anh4() {
    document.getElementById("img").src = "hinh/h4.jpg";
}
function Anh5() {
    document.getElementById("img").src = "hinh/h5.jpg";
}
function Anh6() {
    document.getElementById("img").src = "hinh/h6.jpg";
}
function Anh7() {
    document.getElementById("img").src = "hinh/h7.jpg";
}
function Anh8() {
    document.getElementById("img").src = "hinh/h8.jpg";
}

function next() {

    if (currentIndex < 9) {
        currentIndex++;
        document.getElementById("img").src = anhAr[currentIndex].src;

    }
}
// function next1() {

//   currentIndex++;
//   console.log(currentIndex);
//   document.getElementById("img").src = anhAr[currentIndex].src;
// }
// setInterval(next1, 3000);
// var i=0;
// function auto() {
// document.getElementById("img").src = "hinh/h" + i + ".jpg";
//  for(var i=0; i<)
// }
// setInterval(auto, 3000);

let i = 0;
let increment = true;

setInterval(() => {
    document.getElementById("img").src = "hinh/h" + i + ".jpg";

    if (i == 8) {
        increment = false;
    } else if (i == 0) {
        increment = true;
    }
    if (increment) {
        i++;
    } else {
        i--;
    }
}, 3000);

function back() {
    if (currentIndex > 0) {
        currentIndex--;
        document.getElementById("img").src = anhAr[currentIndex].src;
    }
}

function bigImg(x) {
    x.style.height = "90%";
    x.style.width = "90%";
}

function normalImg(x) {
    x.style.height = "80%";
    x.style.width = "80%";
}



var cart = JSON.parse(localStorage.getItem("cart"));
if( cart != null) {
    document.getElementById("slsp").innerHTML = cart.length;
}
var giohang = [];

 var btn = document.getElementsByTagName("button");
 for (let i = 0 ; i < btn.length; i++) {

    var ten;
    var gia;
    var hinh;
    btn[i].addEventListener("click",function() {
        let btnAddCart = document.querySelectorAll('.btn-add-cart')
        btnAddCart.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                hinh = e.currentTarget.closest('.parent-card').querySelector('.img').src;
                ten = e.currentTarget.closest('.parent-card').querySelector('.ten-san-pham').textContent;
                gia = e.currentTarget.closest('.parent-card').querySelector('.gia-san-pham').textContent;
                console.log(ten + " - " + gia);
            })
        })
        var sp = {
            "hinh": hinh,
            "ten" : ten ,
            "gia" : gia,
            "soluong" : 'soluong' 
        }
        giohang.push(sp);
        console.log(giohang);
        //lưu trình duyệt
        localStorage.setItem("cart", JSON.stringify(giohang));
        //lấy về
        var cart = JSON.parse(localStorage.getItem("cart"));
        if( cart != null) {
            document.getElementById("slsp").innerHTML = cart.length;
        }
    });
    
}


function loadslsp() {
//lấy về
var cart = JSON.parse(localStorage.getItem("cart"));
if( cart != null) {
    document.getElementById("slsp").innerHTML = cart.length;
}
}
console.log( );






