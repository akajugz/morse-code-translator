import { morseCode } from "./morse-code.ts";
import { englishTextField } from "./querySelectors.ts";
import { morseCodeTextField } from "./querySelectors.ts";

export { translateToMorseCode };
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
