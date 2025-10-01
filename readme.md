1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

* getElementById("id") → Finds one element by its unique id.
* getElementsByClassName("class") → Finds all elements with that class. Returns a live list (updates if DOM changes).
* querySelector("css") → Finds the first element that matches a CSS selector.
* querySelectorAll("css") → Finds all elements that match a CSS selector. Returns a static list (does not auto-update).

Quick tip:
ById = one element
ByClassName = many (live)
querySelector = first match
querySelectorAll = all matches

---

2. How do you create and insert a new element into the DOM?

Step 1: Create an element
const newDiv = document.createElement("div");

Step 2: Add content
newDiv.innerText = "Hello World!";

Step 3: Insert into the DOM
document.body.appendChild(newDiv);

You can also use prepend, insertBefore, or insertAdjacentHTML to control where it goes.

---

3. What is Event Bubbling and how does it work?

Event bubbling means when you click an element, the event starts on that element and then bubbles up through its parent elements.

Example: Click on a button → triggers on the button → then its parent div → then body → then html.

By default, most DOM events in JavaScript bubble like this.

---

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is when you add one event listener to a parent element, instead of adding listeners to all its child elements. The parent listens for events, and you check which child was clicked using event.target.

Example:
document.getElementById("list").addEventListener("click", (e) => {
if (e.target.tagName === "LI") {
console.log("Clicked:", e.target.innerText);
}
});

Why useful:

* Better performance (fewer listeners).
* Works even for new child elements added later.

---

5. What is the difference between preventDefault() and stopPropagation()?

preventDefault() → Stops the browser’s default action.
Example: Prevent a form from submitting or a link from opening.

stopPropagation() → Stops the event from bubbling up to parent elements.
Example: Prevent a click inside a modal from also triggering a click on the background.

Easy memory:
preventDefault = stop the browser
stopPropagation = stop the bubbling

---

