//비쥬얼

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 50,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        724:{    spaceBetween: 40,},
    }

});

AOS.init();

//인기강의

$(".s3_L .grade a:nth-child(1)").on("click", function () {
    $(".s3_L .grade a").removeClass("btn_active");
    $(".s3_L .grade a:nth-child(1)").addClass("btn_active");
    $(".s3_R").removeClass("s3_RActive");
    $(".element").addClass("s3_RActive");
});

$(".s3_L .grade a:nth-child(2)").on("click", function () {
    $(".s3_L .grade a").removeClass("btn_active");
    $(".s3_L .grade a:nth-child(2)").addClass("btn_active");
    $(".s3_R").removeClass("s3_RActive");
    $(".middle").addClass("s3_RActive");
});

$(".s3_L .grade a:nth-child(3)").on("click", function () {
    $(".s3_L .grade a").removeClass("btn_active");
    $(".s3_L .grade a:nth-child(3)").addClass("btn_active");
    $(".s3_R").removeClass("s3_RActive");
    $(".high").addClass("s3_RActive");
});

//모바일 메뉴

$("#bars").on("click",function(){
    $("#mGnb").css("visibility","visible");
    $(".mGnb_inr").css("right",0)
})

$(".close").on("click",function(){
    $("#mGnb").css("visibility","hidden");
    $(".mGnb_inr").css("right","-70%")
})

$("#mGnb .black").on("click",function(){
    $("#mGnb").css("visibility","hidden");
    $(".mGnb_inr").css("right","-70%")
})