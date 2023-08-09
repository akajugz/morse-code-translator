import "./styles.scss";
// import { morseCode } from "./morse-code.ts";

// query selectors
const englishTextField = document.querySelector(
  ".english-container__text-field"
) as HTMLInputElement;
const morseCodeTextField = document.querySelector(
  ".morse-code-container__text-field"
) as HTMLInputElement;

// if - to check for errors
if (!englishTextField || !morseCodeTextField) {
  throw new Error("Issue with getting the selector");
}

//trying to use Map instead of an object
const morseCode = new Map([
  ["A", ".-"],
  ["B", "-..."],
  ["C", "-.-."],
  ["D", "-.."],
  ["E", "."],
  ["F", ""],
  ["G", ""],
  ["H", ""],
  ["I", ""],
  ["J", ""],
  ["K", ""],
  ["L", ""],
  ["M", ""],
  ["N", ""],
  ["O", ""],
  ["P", ""],
  ["Q", ""],
  ["R", ""],
  ["S", ""],
  ["T", "-"],
  ["U", ""],
  ["V", ""],
  ["W", ""],
  ["X", ""],
  ["Y", ""],
  ["Z", ""],
]);

// function to do the translations
const translateToMorseCode = () => {
  const englishText = englishTextField.value.toLocaleUpperCase();
  console.log(englishText);
  let morseCodeString = "";

  //forEach loop
  englishText.split("").forEach((char) => {
    const alphabet = morseCode.get(char);
    if (alphabet) {
      morseCodeString += alphabet;
    }
  });

  morseCodeTextField.value = morseCodeString.trim();
};

// eventListeners
englishTextField.addEventListener("input", translateToMorseCode);
