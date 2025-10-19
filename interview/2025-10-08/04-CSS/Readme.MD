### 💥 CSS Interview Preparation (By Anurag Kumar)

---

####
<details>
<summary> 🟩 Box Model + z-index stacking. </summary>

Every HTML element is represented as a rectangular box, consisting of four layers:

```sql
|--------------------------------|
|        Margin (outer)          |
|  ----------------------------  |
|  |      Border layer        |  |
|  |  ----------------------  |  |
|  |  |   Padding area    |  |  |
|  |  |  ---------------  |  |  |
|  |  |  | Content |     |  |  |
|  |  |  ---------------  |  |  |
|  |  ----------------------  |  |
|  ----------------------------  |
|--------------------------------|
```

```css
* {
  box-sizing: border-box; /* recommended */
}
```

The z-index determines which element appears “on top” when elements overlap.
However, it only works within the same stacking context.

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: relative;
  z-index: 1; /* creates stacking context */
}
.child {
  position: absolute;
  z-index: 999; /* only relative within .parent, not global */
}

```
</details>

####
<details>
<summary> 🟩 position relative/absolute/fixed/sticky </summary>



</details>

####
<details>
<summary> 🟩 Specificity rules </summary>



</details>

####
<details>
<summary> 🟩 Reflow vs Repaint </summary>



</details>

####
<details>
<summary> 🟩 Flexbox vs Grid </summary>



</details>

####
<details>
<summary> 🟩 CSS variables & themes </summary>



</details>

####
<details>
<summary> 🟩 Responsive design (media queries, fluid layouts) </summary>



</details>

####
<details>
<summary> 🟩 BEM naming and scoping </summary>



</details>

####
<details>
<summary> 🟩 CSS Modules / Styled Components / Emotion </summary>



</details>

####
<details>
<summary> 🟩 Critical CSS and PurgeCSS </summary>



</details>

####
<details>
<summary> 🟩 Building a component library design token system </summary>



</details>