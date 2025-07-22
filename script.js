const descriptions = {
    pillar1: {
        1: "Superficial or cliché. Reinforces existing tropes with no original thought.",
        2: "Touches on a known theme but lacks depth or meaningful exploration.",
        3: "Competently explores a familiar theme, providing a solid but not challenging inquiry.",
        4: "Paradigm-Shifting. Introduces a concept so powerful it re-contextualizes a part of reality."
    },
    pillar2: {
        1: "Amateurish or distracting. The technical craft undermines the film's intent.",
        2: "Functional but uninspired. The filmmaking is basic and lacks a distinct voice.",
        3: "Professional and competent. The craft serves the story adequately without elevating it.",
        4: "Masterful. Every technical choice is symbiotic with the film's core theme; the form is the content."
    },
    pillar3: {
        1: "Formulaic and predictable. Follows a standard structure without purpose.",
        2: "A conventional story told in a conventional way, with few surprises.",
        3: "A well-told story using a traditional structure, or a minor twist on a formula.",
        4: "Radically Inventive. The narrative structure itself is a key part of the film's philosophical argument."
    },
    pillar4: {
        1: "Emotionally inert and forgettable. Leaves no lasting impression.",
        2: "Mildly engaging in the moment, but the feeling fades almost immediately.",
        3: "Creates a solid emotional response that serves the story well.",
        4: "Permanently Integrated. The film becomes part of your internal architecture; a new lens for viewing the world."
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

    if (val1 === 4 && val4 === 4 && totalScore >= 14) {
        finalRating = "Altering (5)";
    } else if (totalScore >= 13) {
        finalRating = "Good (4)";
    } else if (totalScore >= 9) {
        finalRating = "Average (3)";
    } else {
        finalRating = "Maybe (1-2)";
    }

    document.getElementById('result').textContent = totalScore + "/16 - " + finalRating;
    document.getElementById('result').style.display = 'block';
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slider1').addEventListener('input', updateSliderDisplay);
    document.getElementById('slider2').addEventListener('input', updateSliderDisplay);
    document.getElementById('slider3').addEventListener('input', updateSliderDisplay);
    document.getElementById('slider4').addEventListener('input', updateSliderDisplay);

    // Initialize display
    updateSliderDisplay();
}); 