const descriptions = {
    pillar1: {
        1: "Superficial or cliché. Reinforces existing tropes with no original thought.",
        2: "Touches on a known theme but lacks depth or meaningful exploration.",
        3: "Competently explores a familiar theme, providing a solid but not challenging inquiry.",
        4: "Presents a challenging, novel idea that provokes significant thought.",
        5: "Paradigm-Shifting. Introduces a concept so powerful it re-contextualizes a part of reality."
    },
    pillar2: {
        1: "Amateurish or distracting. The technical craft undermines the film's intent.",
        2: "Functional but uninspired. The filmmaking is basic and lacks a distinct voice.",
        3: "Professional and competent. The craft serves the story adequately without elevating it.",
        4: "Artful and impressive. The direction, cinematography, and sound design significantly enhance the experience.",
        5: "Masterful. Every technical choice is symbiotic with the film's core theme; the form is the content."
    },
    pillar3: {
        1: "Formulaic and predictable. Follows a standard structure without purpose.",
        2: "A conventional story told in a conventional way, with few surprises.",
        3: "A well-told story using a traditional structure, or a minor twist on a formula.",
        4: "Noticeably innovative. Uses a non-linear or unconventional structure to enhance its themes.",
        5: "Radically Inventive. The narrative structure itself is a key part of the film's philosophical argument."
    },
    pillar4: {
        1: "Emotionally inert and forgettable. Leaves no lasting impression.",
        2: "Mildly engaging in the moment, but the feeling fades almost immediately.",
        3: "Creates a solid emotional response that serves the story well.",
        4: "Leaves a strong and lasting emotional or psychological residue for days.",
        5: "Permanently Integrated. The film becomes part of your internal architecture; a new lens for viewing the world."
    }
};

function updateSliderDisplay() {
    const val1 = parseInt(document.getElementById('slider1').value);
    const val2 = parseInt(document.getElementById('slider2').value);
    const val3 = parseInt(document.getElementById('slider3').value);
    const val4 = parseInt(document.getElementById('slider4').value);

    document.getElementById('score1').textContent = val1;
    document.getElementById('score2').textContent = val2;
    document.getElementById('score3').textContent = val3;
    document.getElementById('score4').textContent = val4;

    document.getElementById('desc1').textContent = descriptions.pillar1[val1];
    document.getElementById('desc2').textContent = descriptions.pillar2[val2];
    document.getElementById('desc3').textContent = descriptions.pillar3[val3];
    document.getElementById('desc4').textContent = descriptions.pillar4[val4];
}

function calculateScore() {
    const val1 = parseInt(document.getElementById('slider1').value);
    const val2 = parseInt(document.getElementById('slider2').value);
    const val3 = parseInt(document.getElementById('slider3').value);
    const val4 = parseInt(document.getElementById('slider4').value);

    const totalScore = val1 + val2 + val3 + val4;
    let finalRating = "";

    if (val1 === 5 && val4 === 5 && totalScore >= 18) {
        finalRating = "5+ (Altering)";
    } else if (totalScore >= 17) {
        finalRating = "5-Star (Classic)";
    } else if (totalScore >= 13) {
        finalRating = "4-Star (Good)";
    } else if (totalScore >= 9) {
        finalRating = "3-Star (Average)";
    } else {
        finalRating = "1-2 Star (Meh)";
    }

    document.getElementById('result').textContent = totalScore + "/20 - " + finalRating;
    document.getElementById('result').style.display = 'block';
}

document.getElementById('slider1').addEventListener('input', updateSliderDisplay);
document.getElementById('slider2').addEventListener('input', updateSliderDisplay);
document.getElementById('slider3').addEventListener('input', updateSliderDisplay);
document.getElementById('slider4').addEventListener('input', updateSliderDisplay);

updateSliderDisplay(); 