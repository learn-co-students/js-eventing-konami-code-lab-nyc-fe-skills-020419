const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let tracker = 0

function init() {}
  
function onKeyDown(event) {
  if (event.keyCode === code[tracker]) {
    tracker++ 
  } else {
  tracker = 0
  }
 if (tracker === 10) {
 alert('Nice job!')
}
}

 // event //callback (trigger something)
document.addEventListener('keydown', onKeyDown)
                           
init()

//  let key = parseInt(event.which)
//  console.log(event.which);
//if (key === code[tracker])