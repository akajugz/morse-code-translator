export { translateToMorseCode };

const translation(event: Event) {
    englishTextField.addEventListener("input", translateToMorseCode);
}

