
const images = {
    "A": { src: "imgs/inclassA.png", title: "Avoid Times Square like the plague" },
    "B": { src: "imgs/inclassB.jpg", title: "Brunch religiously on weekends" },
    "C": { src: "imgs/inclassC.png", title: "Complain about the MTA but still rely on it" },
    "D": { src: "imgs/inclassD.png", title: "Dodge slow-walking tourists on sidewalks" },
    "E": { src: "imgs/inclassE.png", title: "Eat dollar slices at 3 AM" },
    "F": { src: "imgs/inclassF.png", title: "Freeze in winter but refuse to wear proper coats" },
    "G": { src: "imgs/inclassG.png", title: "Get their coffee orders very specific" },
    "H": { src: "imgs/inclassH.png", title: "Hail cabs aggressively but still take Uber" },
    "I": { src: "imgs/inclassI.png", title: "Ignore celebrities because they see them often" },
    "J": { src: "imgs/inclassJ.png", title: "Jaywalk even when the light is red" },
    "K": { src: "imgs/inclassK.jpg", title: "Know the best bodegas in their neighborhood" },
    "L": { src: "imgs/inclassL.png", title: "Love bagels but debate over which is best" },
    "M": { src: "imgs/inclassM.jpg", title: "Make plans but never actually follow through" },
    "N": { src: "imgs/inclassN.jpg", title: "Never look up at skyscrapers" },
    "O": { src: "imgs/inclassO.png", title: "Order takeout more than they cook" },
    "P": { src: "imgs/inclassP.jpg", title: "Pretend not to care about rats but scream anyway" },
    "Q": { src: "imgs/inclassQ.png", title: "Quickly move through subway turnstiles" },
    "R": { src: "imgs/inclassR.jpg", title: "Run to catch the subway even if another is coming" },
    "S": { src: "imgs/inclassS.png", title: "Stand too close to the subway platform edge" },
    "T": { src: "imgs/inclassT.jpg", title: "Tip generously at restaurants" },
    "U": { src: "imgs/inclassU.jpg", title: "Use their MetroCard like a ninja swipe" },
    "V": { src: "imgs/inclassV.png", title: "Visit museums on free admission days" },
    "W": { src: "imgs/inclassW.jpg", title: "Walk faster than most people jog" },
    "X": { src: "imgs/inclassX.jpg", title: "X-ray strangers to see if they’re tourists" },
    "Y": { src: "imgs/inclassY.jpg", title: "Yell at cars that cut them off in a crosswalk" },
    "Z": { src: "imgs/inclassZ.png", title: "Zone out with noise-canceling headphones on subway" }
};


const invalidImage = {
    src: "imgs/inclasslol.png",
    title: "back to kindergarten"
};

setTimeout(() => {
    document.getElementById("openingScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
}, 3000);


function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");
    const titleElement = document.getElementById("imageTitle");

    if (images[input]) {
        imgElement.src = images[input].src;
        titleElement.textContent = images[input].title;
    } else {
        imgElement.src = invalidImage.src;
        titleElement.textContent = invalidImage.title;
    }

    imgElement.style.display = "block";
}

document.getElementById("submitButton").addEventListener("click", displayImage);
