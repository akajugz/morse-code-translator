import "./styles.scss";
//querySelectors
import { englishTextField } from "./querySelectors.ts";

//function to do the translation
import { translateToMorseCode } from "./functions.ts";

// eventListeners
englishTextField.addEventListener("input", translateToMorseCode);
