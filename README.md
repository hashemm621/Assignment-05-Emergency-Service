### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**? 
1. ##### getElementById(): id name contains alaways unique name . If getElementById() is not found in dom then return null.
2. ##### getElementByClassName: class name contains all element by that have a specific class. and it alaways return array. but this not just a array this is array like object.Iam alaways use class name for specific element with loop for manupulate.
3. ##### querySelector: this is like a css selector. querySelector alaways retun first element on the dom.
4. ##### querySelectorAll: its also like a css selector. but its return specifc element single or multiple in array like object that nodeList.


2. How do you **create and insert a new element into the DOM**?
1. ##### 1. at first use const newDiv = document.createElement(div).
2. ##### 2. then newDiv.innerText = 'Hello World'.
3. ##### 3. finaly container.appendChild(newDiv).



3. What is **Event Bubbling** and how does it work?
1. ##### when tregart an event on dom. this is until bubbling from deepest element there target on event to upper parents html . when cald propagetion stop then bubbiling stop this immidiet parent.




4. What is **Event Delegation** in JavaScript? Why is it useful?
1. ##### Event delegation is a technique in javascript. where instead addEventlistener add on parent for manupulate multiple child with out any loop or huge codding

 
5. What is the difference between **preventDefault() and stopPropagation()** methods?
1. ##### preventDefault(): stops the default browser behavior of  an element in dom
2. ##### stopPropagation(): Stops the event from bubbling up the DOM tree
