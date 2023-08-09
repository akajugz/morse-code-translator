export const englishTextField = document.querySelector(
  ".english-container__text-field"
) as HTMLInputElement;

export const morseCodeTextField = document.querySelector(
  ".morse-code-container__text-field"
) as HTMLInputElement;

if (!englishTextField || !morseCodeTextField) {
  throw new Error("Issue with getting the selector");
}
