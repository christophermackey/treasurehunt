// alert("connected!")
// console.log(Math.floor(Math.random() * 5))
// math.floor : rounds down
// math.random : gives a random number between 0 and 1
// ^^^ random number between 0 and 4
var dogTreasure = Math.floor(Math.random() * 15)
var cat = Math.floor(Math.random() * 15)
if(dogTreasure === cat) {
  dogTreasure = Math.floor(Math.random() * 15)
}

var counter = 6

const treasure = (location) => {

  if(counter >= 1) {
    counter --
  }

  document.getElementById("counter").innerHTML = counter

  if(dogTreasure === location) {
    document.getElementById(location).innerHTML = "&#x1F436"
    window.setTimeout(() => {
      alert("You Win!");
      window.location.reload(true);
    }, 500);
  } else if (cat === location) {
    document.getElementById(location).innerHTML = "&#x1F431"
    window.setTimeout(() => {
      alert("You Lose!");
      window.location.reload(true);
    }, 500);
  } else {
    document.getElementById(location).innerHTML = "&#x274C"
  }

  if(counter === 0 && dogTreasure !== location && cat !== location) {
    window.setTimeout(() => {
      alert("You Lose!");
      window.location.reload(true);
    }, 500);
  }

}
