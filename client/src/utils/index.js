import { surpriseMePrompts } from "../constants/index";
import FileSaver from "file-saver";
export function getRandomPrompt(prompt) {
  let randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  if (randomIndex === prompt) {
    return getRandomPrompt(prompt);
  }
  return surpriseMePrompts[randomIndex];
}
export function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
