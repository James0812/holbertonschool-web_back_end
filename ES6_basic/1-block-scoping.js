export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;
  if (trueOrFalse) {
    let task = true;    // block-scopée, n'écrase PAS l'extérieur
    let task2 = false;  // block-scopée, n'écrase PAS l'extérieur
  }
  return [task, task2]; // retourne toujours [false, true]
}
