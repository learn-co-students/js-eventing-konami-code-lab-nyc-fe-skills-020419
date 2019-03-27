const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

function init() {
  // Write your JavaScript code inside the init() function

function onKeyDown(event){
  if (event.keyCode === code[tracker]){
    tracker++
  } else {
    tracker = 0
  } 
  if (tracker === 10){
    alert('Nice Job')
  }
}
                            //event,  callback
document.addEventListener('keydown', onKeyDown)

}
init()