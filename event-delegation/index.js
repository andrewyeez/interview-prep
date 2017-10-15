/**
 * Event Delegation
 *
 * Event delegation is a technique using event bubbling in JS.
 * Event delegation avoids targeting a specific node in the DOM
 * but instead uses the technique where a listener is attached
 * to the parent node to target a child node.
 *
 * Example:
 * The variable parent is the node where we will attach a listener.
 * The listener will be listening to a click on a child.
 * A click on a child will trigger the listener on the parent and this is
 * what event delegation is.
 *
 * We will notice that:
 *   1) A child click will trigger the event
 *   2) A new child created dynamically will still trigger the event
 *
 */

const parent = document.getElementsByClassName('parent');
let count = 0;
let child = (count) => {
  let c = document.createElement('li');
      c.setAttribute('class', 'child');
      c.innerHTML = 'new'+count;
  return c;
}
parent[0].addEventListener('click', function(e){
  if(e.target.className == 'child'){
    this.appendChild(child(++count))
  }
});
