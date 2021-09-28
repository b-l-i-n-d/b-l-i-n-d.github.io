$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});

var typed = new Typed("#typing", {
    strings: ["web application developer", "software engineer", "full stack engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
});
    
var typed2 = new Typed("#typing-2", {
    strings: ["web application developer", "software engineer", "full stack engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})