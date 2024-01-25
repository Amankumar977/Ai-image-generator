import { surpriseMePrompts } from "../constants/index";
export function getRandomPrompt(prompt) {
  let randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  if (randomIndex === prompt) {
    return getRandomPrompt(prompt);
  }
  return surpriseMePrompts[randomIndex];
}
