document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('light-toggle'); 
  const body = document.body; 


  if (!body.classList.contains('light-mode') && !body.classList.contains('dark-mode')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; 
    body.classList.add(prefersDark ? 'dark-mode' : 'light-mode'); 
  }

  toggleButton.addEventListener('click', function() { 
    if (body.classList.contains('dark-mode')) { 
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
  });
});

function fishCalc() {
    const gallons = parseFloat(document.getElementById("gallons").value);


    const SMALL_SIZE = 1;   
    const MEDIUM_SIZE = 3;
    const LARGE_SIZE = 5;
    const MAX_COMBOS = 5; 

    if (isNaN(gallons) || gallons <= 4) {
        document.getElementById("result").textContent =
            "Please enter a valid tank size.";
        return;
    }

    let output = `
        <strong>Stocking Options:</strong>
        <em>(Based on ${SMALL_SIZE}” small, ${MEDIUM_SIZE}” medium, ${LARGE_SIZE}” large fish)</em>
        <div class="stock-grid">
    `;

  
    output += `<div class="stock-item">• ${Math.floor(gallons / SMALL_SIZE)} small fish</div>`;

    if (gallons >= MEDIUM_SIZE) {
        output += `<div class="stock-item">• ${Math.floor(gallons / MEDIUM_SIZE)} medium fish</div>`;
    }

    if (gallons >= LARGE_SIZE) {
        output += `<div class="stock-item">• ${Math.floor(gallons / LARGE_SIZE)} large fish</div>`;
    }

    
    let count = 0;
    let maxLarge = Math.floor(gallons / LARGE_SIZE);
    for (let large = maxLarge; large >= 1 && count < MAX_COMBOS; large--) {
        let remaining = gallons - (large * LARGE_SIZE);
        let maxMedium = Math.floor(remaining / MEDIUM_SIZE);
        if (maxMedium > 0) {
            output += `<div class="stock-item">• ${maxMedium} medium + ${large} large</div>`;
        }
        count++;
    }

    
    count = 0;
    let maxMediumOnly = Math.floor(gallons / MEDIUM_SIZE);
    for (let medium = maxMediumOnly; medium >= 1 && count < MAX_COMBOS; medium--) {
        let remaining = gallons - (medium * MEDIUM_SIZE);
        if (remaining > 0) {
            output += `<div class="stock-item">• ${medium} medium + ${remaining} small</div>`;
        }
        count++;
    }


    count = 0;
    let maxLargeOnly = Math.floor(gallons / LARGE_SIZE);
    for (let large = maxLargeOnly; large >= 1 && count < MAX_COMBOS; large--) {
        let remaining = gallons - (large * LARGE_SIZE);
        if (remaining > 0) {
            output += `<div class="stock-item">• ${large} large + ${remaining} small</div>`;
        }
        count++;
    }


    count = 0;
    for (
        let large = Math.floor(gallons / LARGE_SIZE);
        large >= 1 && count < MAX_COMBOS;
        large--
    ) {
        for (
            let medium = Math.floor((gallons - (large * LARGE_SIZE)) / MEDIUM_SIZE);
            medium >= 1 && count < MAX_COMBOS;
            medium--
        ) {
            let remaining = gallons - (large * LARGE_SIZE + medium * MEDIUM_SIZE);
            if (remaining >= 1) {
                output += `<div class="stock-item">• ${large} large + ${medium} medium + ${remaining} small</div>`;
                count++;
            }
        }
    }

    output += `</div>`;
    document.getElementById("result").innerHTML = output;
}
$(document).ready(function () {

    const fishData = {
        fish1: "The Betta Fish's max size is 3 in. They come in a variety of colors and tail shapes. Their ideal tank temperature is 76–82°F. They need a tank size of 5+ gallons. Due to their aggressive nature, their idea companions are snails and sometimes shrimp.",
        fish2: "Goldfish can reach over 18 in. (If their size is an issue, look into platys or mollies. They are a great similar looking alternative) There is a variety of goldfish species. They prefer cooler water. Their ideal tank temperature is 65–75°F. For smaller species, like fancy goldfish, the minimum tank size is 35+ gallons. Larger breeds like common goldfish need at least 50+ gallons. They are very messy fish. They need their tank cleaned often and a strong filter. Goldfish grow at a fast rate. The best companions for goldfish are other goldfish. They prefer cool water which eliminates many other tank mate options. There are a few other cool water friendly fish they can be kept with but other goldfish is ideal. However, they will eat any other tank mates they can fit in their mouth.",
        fish3: "These colorful fish reach up to 2 in. Their ideal tank temp is 72–82°F. Their tank size is 5+ gallons. They prefer to be kept in groups of 3+. Guppies are a peaceful community fish. They are active swimmers. They get along well with other community fish that will not nip their fins or eat them due to their small size.",
        fish4: "Neon Tetras stay small. Only reaching a max of 1.5in. They are bright and very flashy especially in large groups. They prefer tank temperatures of 70–80°F. They are a schooling fish and like to be kept in groups of 6+. They are considered active swimmers. They should be kept in tanks that are 10+ gallons (school of 6+). They are a peaceful community fish. They get along well with other community fish that are not large enough to eat them.",
        fish5: "The Zebra Danio's max size is 2 in. They prefer tank waters of 65–77°F. They are active swimmers and need at least 10 gallons. They are a schooling fish and should be kept in groups of 6+. They are peaceful community fish in the right setting. Due to being active swimmers and their habit they should be kept with other peaceful active swimmers like tetras, barbs, and livebearers. They should not be kept with any long finned that swim slow like angel fish or guppies. They are known to nip fins of slow swimming long tailed fish.",
        fish6: "Platys group up to be around 2.5 in. They come in a variety of colors. Some of their colors make them look similar to goldfish. However, unlike goldfish they stay small in size and are not as messy of a fish. This makes them a great alternative to goldfish. They like tank waters of 70–78°F. They are best kept in tanks that are 10+ gallons. They prefer to be kept in groups of 3+, as they are social fish. Most fish lay eggs but platys are livebearers. This means their eggs hatch inside their bodies and they give birth to live, free swimming babies. They are a peaceful community fish. They get along well with other peaceful community fish.",
        fish7: "Mollies grow to be 4-5 in. Their ideal tank water is 72–82°F. They come in several colors/ patterns. Some of their colors are similar to goldfish. However, unlike goldfish they stay medium in size and are not as messy. This makes them a great alternative to goldfish like platys. They like tank waters of 72–82°F. Their minimum tank size is 20 gallons. They are semi schooling fish and like to be kept in groups of 3+. They are livebearers. This means their eggs hatch inside their bodies and they give birth to live, free swimming babies. Mollies are active and hardy. They are a peaceful community fish but they may nip tails of slow moving long finned fish. They do well with other peaceful community fish similar in size and activity.",
        fish8: "Swordtails grow to be 4-5 in. They come in a variety of colors. They like tank waters of 72–82°F. Swordtails tank size is 20+ gallons. These fish like to be kept in groups of 3+. They are a peaceful community fish. Swordtails are livebearers. This means their eggs hatch inside their bodies and they give birth to live, free swimming babies. They are active and a peaceful community fish. They do well with other peaceful community fish and other live bearers.",
        fish9: "Angelfish grow to be 6 in long and 8 in tall. They come in several different colors. Angelfish prefer tank temperatures of 76–82°F. One angelfish needs a tank sized of 30+ gallons. Two need 40+ gallons (55 is ideal). 4-6 angelfish need 55-75 to manage territorial behavior. Angelfish should be kept in even numbers due to them pairing up. They are semi-aggressive and territorial. They can be kept with other peaceful, fast swimming community fish in tank that is 55+ gallons. They should not be kept with any tank mates that they can fit in their mouth, fin-nipping breeds, or slow moving fish. They do well with larger tetra breeds that are not nippy, gouramis, rainbowfish, livebearers, and bottom dwelling fish.",
        fish10: "Corydoras catfish, commonly called cory catfish, group to be 2-3 in. They like temperatures of 72–78°F. They are a schooling fish and should be kept in groups of 6+. They need a 20+ gallon tank for a school of 6. Corydoras catfish get along well with almost all peaceful fish. They are filter feeders that stay on the bottom of the tank and clean the tanks bottom.",
        fish11: "There are several breeds of Pleco. The smaller breeds are 3-6 in and the larger breeds can grow 12-24+ in. Some of the smaller breeds are Gold Spotted Dwarf, Pitbull, Clown and Bristlenose plecos. Some of the larger breeds are common pleco, Leopard Pleco, and Snow King Pleco. Most breeds prefer tank temperatures of 74–80°F. The smaller breeds need a tank size of 15-30+ gallons. The larger breeds need a tank size of 100-300+ gallons. It is important to know what size pleco you are getting. Pleco are algae feeders. They suction onto parts of the tank and clean the algae off the tank. They get along well with most fish species due to them being suction fish. This causes most fish to leave them alone.",
        fish12: "Oscars grow to be 12-14 in. They prefer tank temps of 74–81°F. One single oscar needs a tank size of 75+ gallons. Oscars are aggressive. Due to this most people keep them alone. However, they can be kept with other oscars, large aggressive cichlids that will protect themselves, and plecos. They will eat any tank mates that will fit in their mouth. If kept with other fish they need a tank size of 100+ gallons.",
        fish13: "Tiger barbs grow to be 3 in. They prefer tank temperatures of 74–79°F. They are a schooling fish and need to be kept in groups of 6+. Due to this their minimum tank size is 20+ gallons. They are active and semi-aggressive. They should be kept active and robust fish. The best tank mates for tiger barbs are fast moving fish like danios and several tetra breeds, other active barbs, aggressive fish like rainbow sharks or cichlids, or bottom dwellers/plecos.",
        fish14: "Cherry barbs grow to be 2 in. They like temperatures of 73–81°F. They are a schooling fish that need to be kept in groups of 6+. They need 10+ gallons for a group of 6+. They are a peaceful community fish unlike most barbs. They get along well with other peaceful community fish.",
        fish15: "Dwarf Gourami grow to be 3.5 in. They prefer tank temperatures of 75–82°F. They need a tank size of 20+ gallons for adequate swimming space. Gouramis are peaceful, slow moving fish. They do well with other peaceful community fish that will not nip their fins. They do well with neon tetras, cory catfish, and peaceful livebearers.",
        fish16: "Rainbowfish grow to be 4-6 in depending on the species. They come in several colorful species. They like tank temperatures of 74–80°F. They are a schooling fish that need to be kept in groups of 6+. They need a tank size of 30+ for a group of 6+. They are an active, peaceful community fish. They get along well with peaceful community fish.",
        fish17: "Convict Cichlids grow to be 6 in. They prefer tank temperatures of 74–80°F. One single Convict Cichlid needs a tank size of 30+ gallons. They are very aggressive and highly territorial. They are best kept alone, with one other convict cichlid, plecos, or other aggressive fish that can defend themselves like other oscars or cichlids breeds. They should not be kept with fish that are slow moving or have long fins. If kept with other fish they need a larger tank size.",
        fish18: "Electric Blue Acara grow to be 7 in. They like tank temperatures of 73–82°F. They need a tank size of 40+ gallons. They are relatively peaceful compared to most other cichlids. Due to this, they can be kept with medium sized peaceful community fish. Some fish that they go well with are angelfish, larger tetra breeds, barbs, plecos, cory catfish, and rams.",
        fish19: "Rainbow shark grow to be 6 in. Their ideal tank water is 74–80°F. They need a tank size of 55+ gallons. You should only keep a single rainbow shark or five+. They are territorial with each other. If kept with any other bottom dwelling fish they need to be in a large tank. They can be kept with fast semi-aggressive fish like tiger barbs, some tetras, rainbowfish, danios, or angelfish(in large tanks).",
        fish20: "Kuhli Loach grow to be 4 in. They like water temperatures of 75–85°F. Kuhli loaches are social and should live in groups of 5+ to feel secure. They need a tank size of 20+ gallons. They are peaceful, shy, and silly bottom dwelling fish. They eat things off the substrate of the tank. They are a peaceful community fish. They get along well with peaceful, non aggressive, tank mates that cannot eat them. "
    };

   
    for (const id in fishData) {
        $("#" + id).append(
            `<div class="fish-info" style="display:none;">${fishData[id]}</div>`
        );
    }


    $(document).on("click", ".fish-item", function () {
        const infoDiv = $(this).find(".fish-info"); 
        $(".fish-info").not(infoDiv).slideUp();     
        infoDiv.slideToggle();                    
    });

});