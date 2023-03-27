export function firstWord(text) {
  return text.match(/[\p{Ll}\p{Lu}\p{Lt}\p{Lo}\p{Lm}\p{Mn}\p{Nd}\p{Pc}']+/u)[0];
}