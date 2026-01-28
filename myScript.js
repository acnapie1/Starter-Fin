"use strict";

function fishCalc(numbers){
     const gallons = document.getElementById("gallons").value;
     const SMALL_SIZE = 1;   
     const MEDIUM_SIZE = 3;
     const LARGE_SIZE = 5;

      if (gallons <= 4) {
        document.getElementById("result").textContent =
            "Please enter a valid tank size.";
        return;
    }
     let output = `
        <strong>Estimated Stocking Options:</strong><br>
        <em>(Based on ${SMALL_SIZE}” small, ${MEDIUM_SIZE}” medium, ${LARGE_SIZE}” large fish)</em><br><br>
    `;


    const allLarge = Math.floor(gallons / LARGE_SIZE);
    if (allLarge > 0) {
        output += `• ${allLarge} large fish<br>or<br>`;
    }


    if (gallons >= LARGE_SIZE) {
        output += `• 1 large + ${gallons - LARGE_SIZE} small fish<br>or<br>`;
    }

  
    if (gallons >= MEDIUM_SIZE * 2) {
        output += `• 2 medium + ${gallons - (MEDIUM_SIZE * 2)} small fish<br>or<br>`;
    }


    if (gallons >= MEDIUM_SIZE) {
        output += `• 1 medium + ${gallons - MEDIUM_SIZE} small fish<br>or<br>`;
    }


    const allMedium = Math.floor(gallons / MEDIUM_SIZE);
    if (allMedium > 0) {
        output += `• ${allMedium} medium fish<br>or<br>`;
    }


    output += `• ${gallons} small fish<br>`;

    document.getElementById("result").innerHTML = output;
}


$(document).ready(function(){
  $('.slideshow').slick({ 
    autoplay: true,
    dots: true, 
    arrows: true,
    autoplaySpeed: 3000 
  });
});

const fishData = {
    
}