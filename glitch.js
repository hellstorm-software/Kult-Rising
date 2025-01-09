    function glitchTextEffect(text, outputElement, glitchProbability = 0.1, glitchDuration = 100) {
        let originalText = text;
        let glitchedText = text.split('');
        
        // Show the full text first, if you want to reveal it instantly
        outputElement.textContent = text;

        // Add a glitch effect by changing random characters temporarily
        function applyGlitch() {
            for (let i = 0; i < glitchedText.length; i++) {
                // Random chance to glitch a character
                if (Math.random() < glitchProbability) {
                    // Temporarily replace with a random character
                    glitchedText[i] = String.fromCharCode(33 + Math.floor(Math.random() * 94));
                } else {
                    // Revert to the original character
                    glitchedText[i] = originalText[i];
                }
            }
            // Update the text in the output element
            outputElement.textContent = glitchedText.join('');

            // After the glitch duration, revert to the original text
            setTimeout(() => {
                outputElement.textContent = originalText;
            }, glitchDuration);
        }

        // Run the glitch effect continuously
        setInterval(applyGlitch, 200);
    }

    // Example usage
    let outputElement = document.getElementById('output');
    let longText = `This is a test of the glitch text effect.\nIt will show the text normally,\nbut occasionally glitch the text.`;
    glitchTextEffect(longText, outputElement, 0.1, 200);  // Adjust glitch probability and duration here