### JavaScript

- document.documentElement.clientHeight -> visible page height.
- document.documentElement.scrollHeight -> page total height including scroll.
- document.documentElement.scrollTop -> page scroll position from top.
- do something on scroll
```js
window.addEventListener("scroll", () => {
  console.log("User scrolled the page!");
});