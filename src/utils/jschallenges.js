export function scream(screamArray, setScreamArray) {
  setScreamArray(screamArray.split(" ").join(" 😱 ").toUpperCase() + " !!!");
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
