// Event Delegation
//
// Event delegation is a technique using event bubbling in JS.
// A use case of event delegation would be to attaching a listener on the
// parent node that will listen for an event triggered by a child node.
//
// Example:

// The variable parent is the node where we will attach a listener.
// The listener will be listening to a click on a child.
// A click on a child will trigger the listener on the parent and this is
// what event delegation is.
//
// We will notice that:
//   1) A child click will trigger the event
//   2) A new child created dynamically will still trigger the event
//
const parent = document.getElementsByClassName('parent');
let count = 0;

parent[0].addEventListener('click', function(e){
  if(e.target.className == 'child'){
    count++;
    let v = e.target.innerHTML;
    console.log('Your child '+v+' was clicked!');
    this.appendChild(childElement(count))
  }
});

function childElement(count){
  let child = document.createElement('li');
      child.setAttribute('class', 'child');
      child.innerHTML = 'new'+count;
  return child;
}
