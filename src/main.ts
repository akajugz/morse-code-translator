import "./styles.scss";
import { morseCode } from "./morse-code.ts";
import { englishTextField } from "./querySelectors.ts";
import { morseCodeTextField } from "./querySelectors.ts";
// import { translateToMorseCode } from "./functions.ts";

// if - to check for errors

//function to do the translation
const translateToMorseCode = () => {
  const englishText = englishTextField.value.toLocaleUpperCase();
  console.log(englishText);
  let morseCodeString = "";

  //forEach loop
  englishText.split("").forEach((char) => {
    const alphabet = morseCode.get(char);
    console.log(alphabet);
    if (alphabet) {
      morseCodeString += alphabet;
    }
  });

  morseCodeTextField.value = morseCodeString.trim();
};

// eventListeners
englishTextField.addEventListener("input", translateToMorseCode);
