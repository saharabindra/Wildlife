$(document).ready(function() {
          $('#testimonial_slider').owlCarousel({
            loop: false,
            nav: true,
            autoplay: false,
            dots: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                margin: 0
              },
              768: {
                items: 2,
                margin: 30
              }
            }
          })
        })


        $(document).ready(function() {
          $('#banner_slider').owlCarousel({
            loop: false,
            nav: true,
            autoHeight:true,
            autoplay: false,
            dots: false,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                margin: 0
              }
            }
          })
        })
//header scrolled//
  $(window).scroll(function(){
  var sticky = $('.headbar'),
      scroll = $(window).scrollTop();

  if (scroll >= 200) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
//hemberger menu//
$(document).ready(function () {
  $("hamberger").click(function () {
      $(".headbar ul").toggleClass("show");
  });
});

//send mail//
const form = document.querySelector ('form');
const Name = document.getElementById("Name");
const ContactNumber = document.getElementById("ContactNumber");
const Email = document.getElementById("Email");
const DateofBooking = document.getElementById("DateofBooking");
const mess = document.getElementById("Message");



function sendEmail(){
   
const bodyMessage = `FullName : ${Name.value}<br> Contact : ${ContactNumber.value}<br>
Mail : ${Email.value}<br> Booking : ${DateofBooking.value}<br> Text : ${mess.value}<br>`;



  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "subhamblue42@gmail.com",
    Password : "AB8048C51E369196DEA46F0912779D0D1CFD",
    To : 'subhamblue42@gmail.com',
    From : "subhamblue42@gmail.com",
    Subject : Subject.value,
    Body : bodyMessage
}).then(
  message => alert(message)
);
}

form.addEventListener("submit" , (e) =>{
   e.preventDefault();

   sendEmail();
});

//Top button//
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Number animative//

const counters = document.querySelectorAll('.count');
const speed = 100;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('data-count');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

//google map //

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

