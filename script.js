// You can add interactive JavaScript here if needed
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
});
//Animation Titre h1
// document.addEventListener('DOMContentLoaded', function() {
//     const title = "Hello! I'm Hind, a developer based in Morocco.";
//     const titleElement = document.getElementById('animated-title');
//     let index = 0;
//     let isDeleting = false;

//     function typeWriter() {
//         const currentText = titleElement.innerText;

//         if (!isDeleting && index < title.length) {
//             // Ajoute le caractère suivant, y compris les espaces
//             titleElement.innerText = currentText + title[index] ;
//             index++;
//             setTimeout(typeWriter, 100); // Vitesse d'écriture
//         } else if (isDeleting && index > 0) {
//             // Supprime le dernier caractère
//             titleElement.innerText = currentText.slice(0, -1);
//             index--;
//             setTimeout(typeWriter, 50); // Vitesse de suppression
//         } else {
//             // Inverse l'état (écriture ou suppression)
//             isDeleting = !isDeleting;
//             // Pause avant de recommencer
//             setTimeout(typeWriter, 1000);
//         }
//     }

//     // Démarre l'animation
//     typeWriter();
// });

const textElement = document.getElementById("animated-title");
const text = "Hello! I'm Hind, a developer based in Morocco.";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && index <= text.length) {
        textElement.innerText = text.slice(0, index);
        index++;
    } else if (isDeleting && index >= 0) {
        textElement.innerText = text.slice(0, index);
        index--;
    }
    
    if (index === text.length +1) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Pause avant de supprimer
    } else if (index === 6 && isDeleting) {
        isDeleting = false;
        setTimeout(typeEffect, 2000); // Pause avant de réécrire sans effet de surmontre
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

typeEffect();
