### 💥 Full-Stack + Frontend + Java Interview Preparation (By Anurag Kumar)

---

#### page scroll indicator

```jsx
const useScrollPosition = () => {
  // need usestate as it needs to render the event after every change
  const [scrollPosition, setScrollPosition] = useState(0);

  // this is how we can controll the user action
  window.addEventListener('scroll', () => {
    // scrollTop - scroll position from top
    // scrollHeight - total page height
    // clientHeight - visible page height
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    // converting string value to number
    const scrollHeightNum = Number(scrollHeight);
    const clientHeightNum = Number(clientHeight);
    const scrollTopNum = Number(scrollTop);

    setScrollPosition(
      (scrollTopNum / (scrollHeightNum - clientHeightNum)) * 100
    );
  });

  return scrollPosition;
};

export const PageScrollIndicator = () => {
  const progressIndicatorPosition = useScrollPosition();

  return (
    <div
      className="progress-indicator"
      // this is how we can write inline css
      style={{ width: `${progressIndicatorPosition}%` }}
    ></div>
  );
};
```

---

#### handle multi-field form data

```jsx
const Login: React.FC = () => {
  const [helperTextMessage, setHelperTextMessage] = useState('')
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  })

  const handleFormValueChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="login-zone-screen">
      <h2>Login here:</h2>
      <form>
        <label htmlFor="email">Your email:</label>
        <input
          type="text"
          name="emailId"
          value={formData.emailId}
          placeholder="Enter your email ID please..."
          onChange={handleFormValueChange}
        />
        <label htmlFor="password">Your password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password please..."
          onChange={handleFormValueChange}
        />
      </form>
    </div>
  )
}
```

---

#### way to make API call

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=500");
      const json = await res.json();
      setProductList((prev) => ({
        ...prev,
        data: json.products,
        isError: false,
      }));
    } catch {
      setProductList((prev) => ({
        ...prev,
        isError: true,
      }));
    } finally {
      setProductList((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  fetchData();
}, []);
```

```js
const val = Math.ceil(23.0001) // output -> 24

const name = "anurag kumar"
name.slice(0, 3) + "..." // anur...

[...Array(5).keys()] // [1, 2, 3, 4, 5]
```