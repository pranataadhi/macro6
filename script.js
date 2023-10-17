function kost() {
    document.getElementById('div_kost').style.display = "block";
    document.getElementById('div_apart').style.display = "none";
    document.getElementById('div_rumah').style.display = "none";
    document.getElementById('div_kantor').style.display = "none";
    document.getElementById('div_caffe').style.display = "none";
    document.getElementById('div_outsourcing').style.display = "none";
    document.getElementById('cardKost').style.backgroundColor = "#98E4FF";
    document.getElementById('cardApart').style.backgroundColor = "white";
    document.getElementById('cardRumah').style.backgroundColor = "white";
    document.getElementById('cardKantor').style.backgroundColor = "white";
    document.getElementById('cardCaffe').style.backgroundColor = "white";
    document.getElementById('cardOut').style.backgroundColor = "white";


}
function apart() {
    document.getElementById('div_kost').style.display = "none";
    document.getElementById('div_apart').style.display = "block";
    document.getElementById('div_rumah').style.display = "none";
    document.getElementById('div_kantor').style.display = "none";
    document.getElementById('div_caffe').style.display = "none";
    document.getElementById('div_outsourcing').style.display = "none";
    document.getElementById('cardKost').style.backgroundColor = "white";
    document.getElementById('cardApart').style.backgroundColor = "#98E4FF";
    document.getElementById('cardRumah').style.backgroundColor = "white";
    document.getElementById('cardKantor').style.backgroundColor = "white";
    document.getElementById('cardCaffe').style.backgroundColor = "white";
    document.getElementById('cardOut').style.backgroundColor = "white";

}
function rumah() {
    document.getElementById('div_rumah').style.display = "block";
    document.getElementById('div_apart').style.display = "none";
    document.getElementById('div_kost').style.display = "none";
    document.getElementById('div_kantor').style.display = "none";
    document.getElementById('div_caffe').style.display = "none";
    document.getElementById('div_outsourcing').style.display = "none";
    document.getElementById('cardKost').style.backgroundColor = "white";
    document.getElementById('cardApart').style.backgroundColor = "white";
    document.getElementById('cardRumah').style.backgroundColor = "#98E4FF";
    document.getElementById('cardKantor').style.backgroundColor = "white";
    document.getElementById('cardCaffe').style.backgroundColor = "white";
    document.getElementById('cardOut').style.backgroundColor = "white";
}
function kantor() {
    document.getElementById('div_kantor').style.display = "block";
    document.getElementById('div_apart').style.display = "none";
    document.getElementById('div_kost').style.display = "none";
    document.getElementById('div_rumah').style.display = "none";
    document.getElementById('div_caffe').style.display = "none";
    document.getElementById('div_outsourcing').style.display = "none";
    document.getElementById('cardKost').style.backgroundColor = "white";
    document.getElementById('cardApart').style.backgroundColor = "white";
    document.getElementById('cardRumah').style.backgroundColor = "white";
    document.getElementById('cardKantor').style.backgroundColor = "#98E4FF";
    document.getElementById('cardCaffe').style.backgroundColor = "white";
    document.getElementById('cardOut').style.backgroundColor = "white";

}
function caffe() {
    document.getElementById('div_kantor').style.display = "none";
    document.getElementById('div_apart').style.display = "none";
    document.getElementById('div_kost').style.display = "none";
    document.getElementById('div_rumah').style.display = "none";
    document.getElementById('div_caffe').style.display = "block";
    document.getElementById('div_outsourcing').style.display = "none";
    document.getElementById('cardKost').style.backgroundColor = "white";
    document.getElementById('cardApart').style.backgroundColor = "white";
    document.getElementById('cardRumah').style.backgroundColor = "white";
    document.getElementById('cardKantor').style.backgroundColor = "white";
    document.getElementById('cardCaffe').style.backgroundColor = "#98E4FF";
    document.getElementById('cardOut').style.backgroundColor = "white";

}
function outsourcing() {
    document.getElementById('div_kantor').style.display = "none";
    document.getElementById('div_apart').style.display = "none";
    document.getElementById('div_kost').style.display = "none";
    document.getElementById('div_rumah').style.display = "none";
    document.getElementById('div_caffe').style.display = "none";
    document.getElementById('div_outsourcing').style.display = "block";
    document.getElementById('cardKost').style.backgroundColor = "white";
    document.getElementById('cardApart').style.backgroundColor = "white";
    document.getElementById('cardRumah').style.backgroundColor = "white";
    document.getElementById('cardKantor').style.backgroundColor = "white";
    document.getElementById('cardCaffe').style.backgroundColor = "white";
    document.getElementById('cardOut').style.backgroundColor = "#98E4FF";
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let noOfCharac = 100;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {

    if (content.textContent.length < noOfCharac) {
        content.nextElementSibling.style.display = "none";
    }
    else {
        let displayText = content.textContent.slice(0, noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn) {
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read more" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}