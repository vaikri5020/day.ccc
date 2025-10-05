
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function showSlide(index){
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

showSlide(current);

// function of star rating

function resetStars(stars) {
  stars.forEach(star => star.classList.remove("active"));
}

document.querySelectorAll(".stars").forEach(starContainer => {
  let stars = starContainer.querySelectorAll("i");
  let currentRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      resetStars(stars);
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("active");
      }
    });

    starContainer.addEventListener("mouseleave", () => {
      resetStars(stars);
      for (let i = 0; i < currentRating; i++) {
        stars[i].classList.add("active");
      }
    });

    star.addEventListener("click", () => {
      currentRating = index + 1;
      resetStars(stars);
      for (let i = 0; i < currentRating; i++) {
        stars[i].classList.add("active");
      }
      console.log("Rated:", currentRating);
    });
  });
});

    // this is for form validation    
function validate(){
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let number=document.getElementById("number").value;
    if(name=== "" || name.length <3){
        alert("invalid name or too short")
        return;
    }
    let emailpattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailpattern)){
        alert("invalid email address")

        return;
    }
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[@])(?=.*[A-Z]).{6,}$/;
  if (!password.match(passwordPattern)) {
        alert("invalid password i lower and 1 upper case")

    return;
  }

    let numberpattern= /^[0-9]{10}$/;;
    if(!number.match(numberpattern) || number.length!==10){
        alert("invalid number")

        return;
    }
    

     alert("THANKS FOR CONTACTING US")
    document.getElementById("myform").reset();


}

