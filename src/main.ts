import "./styles.scss";
import { morseCode } from "./morse-code.ts";

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

// function to do the translations

// eventListeners
englishTextField.addEventListener("input", englishText);
