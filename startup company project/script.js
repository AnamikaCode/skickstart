document.addEventListener("DOMContentLoaded", function() {
    var showMoreBtn = document.getElementById("showMoreBtn");
    var featuresSection = document.querySelector(".features");
// Add JavaScript for slideshow functionality
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

  
    var additionalFeatures = [
      {
        imageSrc: "img.png",
        iconClass: "fas fa-chart-bar",
        title: "Analytics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nisl vel justo posuere, eget fermentum magna faucibus."
      },
      {
        imageSrc: "img2.png.jpg",
        iconClass: "fas fa-comments",
        title: "Customer Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam nisl vel justo posuere, eget fermentum magna faucibus."
      },
      // Add more additional features as needed
    ];
  
    showMoreBtn.addEventListener("click", function() {
      additionalFeatures.forEach(function(feature) {
        var featureDiv = document.createElement("div");
        featureDiv.classList.add("feature");
  
        var featureImage = document.createElement("img");
        featureImage.src = feature.imageSrc;
        featureImage.alt = feature.title;
  
        var featureIconDiv = document.createElement("div");
        featureIconDiv.classList.add("feature-icon");
        var featureIcon = document.createElement("i");
        featureIcon.classList.add(feature.iconClass);
        featureIconDiv.appendChild(featureIcon);
  
        var featureTitle = document.createElement("h2");
        featureTitle.textContent = feature.title;
  
        var featureDescription = document.createElement("p");
        featureDescription.textContent = feature.description;
  
        featureDiv.appendChild(featureImage);
        featureDiv.appendChild(featureIconDiv);
        featureDiv.appendChild(featureTitle);
        featureDiv.appendChild(featureDescription);
  
        featuresSection.appendChild(featureDiv);
      });
  
      showMoreBtn.style.display = "none";
    });
  });
  