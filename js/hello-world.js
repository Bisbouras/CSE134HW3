// Custom Element #2 for CSE 134B HW2 (JavaScript permitted for this element only).
// <hello-world> logs a greeting to the browser console when it is placed on a page.
// It never touches the DOM: no shadow root, no children, no attribute changes.
class HelloWorld extends HTMLElement {
  connectedCallback() {
    console.log('Hello World!');
  }
}

customElements.define('hello-world', HelloWorld);
