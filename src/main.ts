import "./styles.scss";

// Morse code key
import { morseCode } from "./morse-code.ts";

//querySelectors
import { englishTextField } from "./querySelectors.ts";
import { morseCodeTextField } from "./querySelectors.ts";

//function to do the translation
import { translateToMorseCode } from "./functions.ts";

// eventListeners
englishTextField.addEventListener("input", translateToMorseCode);
