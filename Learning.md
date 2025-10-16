### JavaScript - website scroll indicator

- document.documentElement.clientHeight -> visible page height.
- document.documentElement.scrollHeight -> page total height including scroll.
- document.documentElement.scrollTop -> page scroll position from top.
- do something on scroll
```js
window.addEventListener('scroll', () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    const pageHeight = Number(scrollHeight);
    const screenHeight = Number(clientHeight);
    const scrollPositionHeight = Number(scrollTop);

    setScrollPosition(
      (scrollPositionHeight / (pageHeight - screenHeight)) * 100
    );
  });
```

### React

- memo
- lazy loading and suspense
- ref hooks
- context api
- redux

### Frontend security

- Cross-Site Scripting (XSS) from user input
```js
const userInput = 'alert("XSS")'; 
div.innerHTML = userInput; // Unsafe
div.textContent = userInput; // Safe
```
- Risks of using innerHTML to inject content
```js
const safeDiv = document.createElement('div');
safeDiv.textContent = userInput;
```
- Security checks for image uploads
```js
const file = input.files[0]; 
if (!['image/jpeg', 'image/png'].includes(file.type)) alert('Invalid file type');
```
- Iframe embedding vulnerabilities
```js
X-Frame-Options: DENY
```
- Storing JWT in localStorage
```js
localStorage.setItem('token', jwt); // insecure
Set tokens in httpOnly cookies from the server side. // Preferred
```
- Form submission from another domain (CSRF)
```js
Set-Cookie: token=abc123; SameSite=Strict; // Secure
```
- Accessing pages after logout via back button
```js
res.setHeader('Cache-Control', 'no-store'); // secure
```
- Ensuring CDN script integrity
- Auto-triggered button actions from external links
```js
document.querySelector('button').addEventListener('click', () => doSomething());
```
- POST requests triggered silently by attackers
```js
fetch('/api', { method: 'POST', headers: { 'X-CSRF-Token': token } });
```
- Sensitive data in URLs
```js
/login?token=abc123 // bad
Send token in POST body // good

```
- Exposing environment variables in frontend
```js
REACT_APP_PUBLIC_KEY // good
REACT_APP_SECRET_KEY // bad
```
- Over-requesting browser permissions
```js
navigator.geolocation.getCurrentPosition(pos => { console.log(pos); });
```
- Insecure postMessage usage
```js
window.addEventListener('message', (e) => { if (e.origin !== 'https://yourdomain.com') return; });
```
- Loose CORS policies
```js
Access-Control-Allow-Origin: * // bad
Access-Control-Allow-Origin: https://yourdomain.com // good
```
- Invisible overlay hijacking clicks
```js
CSS: pointer-events: none;
```
- Unvalidated redirect URLs
```js
if (!allowedUrls.includes(redirectUrl)) 
  redirectUrl = '/';
```
- No rate limiting on frontend actions - use debounce
```js
const debounce = (fn, delay) => { let timer; return
(...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; };
```
- Exposing backend errors to users
```js
res.status(500).send('Something went wrong');
```