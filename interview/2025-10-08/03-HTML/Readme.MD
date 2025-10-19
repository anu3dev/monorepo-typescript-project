### 💥 HTML Interview Preparation (By Anurag Kumar)

---

####
<details>
<summary> 🟩 Semantic HTML benefits. </summary>

Semantic HTML means using HTML elements that clearly describe their purpose and content — both to browsers and developers.

Instead of `<div>` everywhere, you use meaningful tags like `<header>`, `<article>`, `<nav>`, `<section>`, `<footer>`, etc.

```html
<!-- ❌ Non-semantic -->
<div id="header"></div>
<div class="menu"></div>

<!-- ✅ Semantic -->
<header></header>
<nav></nav>
```

Semantic HTML improves accessibility, SEO, maintainability, and readability
by giving meaning to structure

</details>

####
<details>
<summary> 🟩 block/inline/inline-block. </summary>

- Block → full-width, new line.
- Inline → flows with text.
- Inline-Block → inline positioning + block styling.

</details>

####
<details>
<summary> 🟩 Lazy loading images. </summary>

Lazy loading is a performance optimization technique where images (or other resources) are loaded only when they enter the viewport — instead of loading all at once when the page first renders.

```html
<img 
    src="profile.jpg" 
    alt="User profile"
    loading="lazy" 
    width="400" 
    height="400"
/>
<!-- Modern browsers support the loading="lazy" attribute directly -->
```

</details>

####
<details>
<summary> 🟩 ARIA roles and tabindex. </summary>

ARIA (Accessible Rich Internet Applications) provides a set of attributes that make dynamic, interactive web content accessible to users with assistive technologies (like screen readers).

```html
<div role="button" aria-pressed="false" tabindex="0">Play</div>
<!-- Even though it’s a <div>, screen readers will treat it like a button. -->

<button aria-label="Close modal" aria-expanded="true" aria-controls="menu">X</button>

<div tabindex="0">Focusable element</div>
<button tabindex="-1">Can’t be tabbed, only focused programmatically</button>

<!-- ARIA roles describe what an element is or does,
and tabindex defines how users navigate it via keyboard. -->
```

</details>

####
<details>
<summary> 🟩 SEO meta tags and Open Graph. </summary>

Meta tags are snippets inside the <head> of an HTML page that provide metadata — information about the page for search engines, social networks, and browsers.

```html
<meta property="og:title" content="Full-Stack Interview Prep Guide" />
<meta property="og:description" content="React + Java by Anurag Kumar." />
<meta property="og:image" content="https://anurag.dev/preview.png" />
<meta property="og:url" content="https://anurag.dev/interview" />
<meta property="og:type" content="website" />
```

</details>

####
<details>
<summary> 🟩 srcset & picture element. </summary>

Modern websites must serve different image sizes for different devices (mobile, tablet, desktop, retina displays).
Using srcset and `<picture>` helps browsers choose the best image automatically, optimizing performance and bandwidth.

```html
<img
    src="image-400.jpg"
    srcset="
        image-400.jpg 400w,
        image-800.jpg 800w,
        image-1200.jpg 1200w"
    sizes="(max-width: 600px) 400px,
            (max-width: 900px) 800px,
            1200px"
    alt="Responsive example"
/>

<!-- srcset: list of image files with their intrinsic widths (400w, 800w, etc.) -->
<!-- sizes: tells the browser how much viewport space the image will take. -->
```

When you need different image versions, not just sizes (e.g., square for mobile, wide for desktop).

```html
<picture>
    <source srcset="image.webp" type="image/webp" />
    <source srcset="image-large.jpg" media="(min-width: 800px)" />
    <source srcset="image-small.jpg" media="(max-width: 799px)" />
    <img src="image-fallback.jpg" alt="Beautiful landscape" />
</picture>

<!-- srcset → same image, multiple sizes/resolutions. -->
<!-- picture → different images or formats for different contexts. -->
```
</details>

####
<details>
<summary> 🟩 Shadow DOM concept. </summary>

The Shadow DOM is a browser feature that lets you attach a hidden, encapsulated DOM tree to an element — isolating its markup, styles, and behavior from the rest of the document.

Building reusable UI components — <date-picker>, <custom-modal>, <user-avatar> are real world use-cases.

```html
<div id="user-card"></div>

<script>
  const host = document.querySelector("#user-card");

  // Attach shadow DOM to the host
  const shadow = host.attachShadow({ mode: "open" });

  // Add content inside shadow DOM
  shadow.innerHTML = `
    <style>
      p { color: green; font-weight: bold; }
    </style>
    <p>👋 Hello from Shadow DOM!</p>
  `;
</script>

<!-- The <p> tag and its styles are completely isolated from the main DOM. -->
```

</details>

####
<details>
<summary> 🟩 CSR vs SSR impact on SEO. </summary>

CSR → Renders in the browser, slower first load, weaker SEO.
SSR → Renders on the server, faster first load, strong SEO.

</details>