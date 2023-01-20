export function capEveryOtherChar(text, setText) {
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      newText += text[i].toUpperCase();
    } else {
      newText += text[i].toLowerCase();
    }
  }

  setText(newText);
}

export function removeDup(text, setText) {
  let newText = text.split("");

  newText = newText.filter((e, i) => {
    return newText.indexOf(e) === i;
  });

  setText(newText.join(""));
}

export function scream(text, setText) {
  setText(text.split(" ").join(" 😱 ").toUpperCase() + " !!!");
}
