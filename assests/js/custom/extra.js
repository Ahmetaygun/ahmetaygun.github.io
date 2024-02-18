//pre-loader dismiss
$(document).ready(function(){
    setTimeout(function(){
        $(".pre-loader").addClass("loader-collapse");
    },3000);
    
     var typed=new Typed('#typed',{
        strings:["Software Engineer","Java Developer","Back-End Developer","Front-End Developer"],
        stringsElement:null,
        typeSpeed:30,
        startDelay:1200,
        backSpeed:20,
        backDelay:500,
        loop:true,
        loopCount:Infinity
    });
    $(window).on("scroll",function(){
        if(window.scrollY > $("#header-div").height()-80){
            $("#scroll-up").removeClass("d-none");
            $("#scroll-up").removeClass("scroll-collapse");
        }
        else{
            $("#scroll-up").addClass("scroll-collapse");
        }
    });
});
//Scroll to up
const btnScroll=document.querySelector("#scroll-up");
btnScroll.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

//scroll to navbar
window.addEventListener("DOMContentLoaded",event=>{
    var navbarScrollFunct=function(){
        const NavbarScroll=document.body.querySelector("#mainNavbar");
        if(!NavbarScroll){return;}
        if(window.scrollY===0){
            NavbarScroll.classList.remove("navbar-scroll");
        }else{
            NavbarScroll.classList.add("navbar-scroll");
        }
    }
    navbarScrollFunct();
    document.addEventListener("scroll",navbarScrollFunct);
    const Mynavbar=document.body.querySelector("#mainNavbar");
    if(Mynavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74
        });
    }
});


//offcanvas bismiss
var btnoffCanvas=document.querySelectorAll(".btn-close-canvas");
for(let i=0;i<btnoffCanvas.length;i++){
    btnoffCanvas[i].addEventListener("click",function () {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}
//Form Validate
(function(){
    'use strict'
    var formValidation=document.querySelector(".needs-validation");
    var name = document.querySelector("#name");
    var mail = document.querySelector("#mail");
    var phoneNumber = document.querySelector("#phone-number");
    var message = document.querySelector("#message");
    var btnContact=document.querySelector("#btn-contact");
    if(message.value.length===0){
        btnContact.disabled=true;
    }
    message.addEventListener("keyup",function(){
        document.getElementById("message-count").textContent=message.value.length;
        if(message.value.length===0){
            btnContact.disabled=true;
        }
        else if(message.value.length>10){
            btnContact.disabled=false;
        }
    });

    name.addEventListener("blur",nameCheck);
    mail.addEventListener("blur",mailCheck);
    phoneNumber.addEventListener("blur",numberCheck);
    message.addEventListener("blur",messageCheck);
    
    const spacePattern=/^\S*$/;
    const numericPattern =/^([^0-9]*)$/;          //Rakam içermeyenleri getir
    const mailPattern=/^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const onlyNumberPattern=/^[0-9]*$/;
    var errName=document.querySelector("#err-name");
    var errNumber=document.querySelector("#err-number");
    var errMail=document.querySelector("#err-mail");
    var errMessage=document.querySelector("#err-message");

    function nameCheck(){
        var errName=document.querySelector("#err-name");
        if(name.value.length===0){
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            errName.textContent="İsim Alanı Boş Bırakılamaz";
            return false;
        }
        else if(name.value.length < 3){
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            errName.textContent="İsim alanı 3 karakterden az olamaz";
            alert(name.value);
            return false;
        }
        else if(name.value.length > 30){
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            errName.textContent="İsim alanı 30 karakterden fazla olamaz";
            return false;
            
        }
        else if(!numericPattern.test(name.value)){
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
            errName.textContent="İsminizde sayı olamaz";
            return false;
        }
        else{
            name.classList.remove("is-invalid");
            name.classList.add("is-valid");
            return true;
        }
    }
    function mailCheck(){
        if(mail.value.length===0){
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
            errMail.textContent="E-posta Alanı Boş Bırakılamaz";
            return false;
        }
        else if(!mailPattern.test(mail.value)|| mail.value.length < 3){
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
            errMail.textContent="Geçerli Bir E-posta Adresi Giriniz";
            return false;
        }
        else if(!spacePattern.test(mail.value)){
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
            errMail.textContent="E-posta Adresinizde Boşluk Bırakmayınız";
            return false;
        }
        else if(mail.value.length > 40){
            mail.classList.remove("is-valid");
            mail.classList.add("is-invalid");
            errMail.textContent="E-posta Adresinizde Boşluk Bırakmayınız";
            return false;
        }
        else{
            mail.classList.remove("is-invalid");
            mail.classList.add("is-valid");
            return true;
        }
    }
    function numberCheck(){
        if(phoneNumber.value.length===0){
            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");
            errNumber.textContent="İsim Alanı Boş Bırakılamaz";
            return false;
        }
        else if(!spacePattern.test(phoneNumber.value)){
            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");
            errNumber.textContent="Telefon Numaranızda Boşluk Bırakmayınız";
            return false;
        }
        else if(!onlyNumberPattern.test(phoneNumber.value)){
            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");
            errNumber.textContent="Telefon Numaranız sadece Rakamlardan Oluşmalıdır";
            return false;
        }
        else if(phoneNumber.value.length < 3|| phoneNumber.value.length>20){
            phoneNumber.classList.remove("is-valid");
            phoneNumber.classList.add("is-invalid");
            errNumber.textContent="Geçerli Bir Telefon Numarası Giriniz";
            return false;
        }
        else{
            phoneNumber.classList.remove("is-invalid");
            phoneNumber.classList.add("is-valid");
            return true;
        }
    }
    function messageCheck(){
        if(message.value.length===0){
            message.classList.remove("is-valid");
            message.classList.add("is-invalid");
            errMessage.textContent="Mesaj Alanı Boş Bırakılamaz";
            return false;
        }
        else if(message.value.length<10){
            message.classList.remove("is-valid");
            message.classList.add("is-invalid");
            errMessage.textContent="Mesajınız 10 Karakterden Az Olamaz";
            return false;
        }
        else if(message.value.length>300){
            message.classList.remove("is-valid");
            message.classList.add("is-invalid");
            errMessage.textContent="Mesajınız 300 Karakterden Fazla Olamaz";
            return false;
        }
        else{
            message.classList.remove("is-invalid");
            message.classList.add("is-valid");
            return true;
        }
    }
    
    formValidation.addEventListener("submit",function(e){
        if(!formValidation.checkValidity() || !nameCheck() || !mailCheck() || !numberCheck() || !messageCheck()){
            e.preventDefault();     //Submit is stop
            e.stopPropagation();
        }
    },false);
})();




