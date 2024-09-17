let myDiv = document.querySelector('#myDiv');
// Append child
let newElement = document.createElement('span');
newElement.textContent = "Wristarium";
myDiv.insertAdjacentElement('beforebegin', newElement);


// Remove Child
let prnt = document.querySelector("#myDiv");
let chaild = document.querySelector("#fpara");
parent.removeChild(chaild);
// OR
// Selection prenet element using child element
let child = document.querySelector("#fpara");
let parent = child.parentNode;
parent.removeChild(child);