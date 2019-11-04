// class 1
document.querySelector('.desc')
var checkDisaster = document.getElementById('disaster')
var checkFamily = document.getElementById('Familylost')
var checkDescription = document.getElementById('descriptionID')
// class 2
var outputSlider = document.getElementById('myRange')
var inputFirst = document.getElementById('firstName')
var inputLast = document.getElementById('lastName')
var checkRebuild = document.getElementById('Rebuild')
var checkRedistribute = document.getElementById('Redistribute')
var checkRebuild = document.getElementById('Relocate')
// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();

class needHelp {
  const Http = new XMLHttpRequest();
  const url='https://jsonplaceholder.typicode.com/posts';
  Http.open("GET", url);
  Http.send();
  constructor(checkDisaster, checkFamily, checkDescription) {
    if (checkDisaster = true) {
      Http.onreadystatechange = (e) => {
        if (this.readyState == 4 && this.status == 200) {
          console.log(Http.checkDisaster)
        }
      }
    }
    else if (Familylost = true) {
      Http.onreadystatechange = (e) => {
        if (this.readyState == 4 && this.status == 200) {
          console.log(Http.checkFamily)
        }
      }
    }

    Http.onreadystatechange = (e) => {
      if (this.readyState == 4 && this.status == 200) {
        console.log(Http.checkDescription)
      }
    }
  }
}
class volunteer {
  constructor() {
    if (checkRebuild = true) {
      Http.onreadystatechange = (e) => {
        if (this.readyState == 4 && this.status == 200) {
          console.log(Http.checkFamily)
        }
      }
    }
  }
}
