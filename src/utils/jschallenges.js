export function scream(screamArray, setScreamArray) {
  const screamCheck = !screamArray.includes("😱");

  screamCheck &&
    setScreamArray(screamArray.split(" ").join(" 😱 ").toUpperCase() + " !!!");
}

export function noScream(setScreamArray) {
  setScreamArray("I am here to scream");
}

export function whisper(whisperArray, setWhisperArray) {
  whisperArray.endsWith("!") &&
    setWhisperArray(whisperArray.slice(0, -1).toLowerCase());
}

export function noWhisper(setWhisperArray) {
  setWhisperArray("I AM HERE TO WHISPER!");
}

export function fun(arr, setArr) {
  let newArr = "";

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr += arr[i].toUpperCase();
    } else {
      newArr += arr[i].toLowerCase();
    }
  }

  setArr(newArr);
}

export function removeDup(arr, setArr) {
  let newArr = arr.split("");
  newArr = newArr.filter((e, i) => {
    return newArr.indexOf(e) === i;
  });

  setArr(newArr.join(""));
}
