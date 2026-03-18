# React State Logger

A lightweight debugging utility for React to log:

* 🟢 State changes
* 🔁 Component re-renders
* 🔍 Prop updates

Get structured logs instead of scattered `console.log` calls.

---

## 🚀 Installation

```bash id="bq3p9p"
npm install react-state-logger
```

---

## 📦 Usage

### Log State Changes

```jsx id="1x0vij"
import { useStateTracker } from "react-state-logger"

const [count, setCount] = useStateTracker(0, "count")
```

---

### Log Component Renders

```jsx id="2w7e0l"
import { useRenderTracker } from "react-state-logger"

useRenderTracker("App")
```

---

### Log Prop Changes

```jsx id="9prq9k"
import { useWhyDidYouUpdate } from "react-state-logger"

function Child({ value }) {
  useWhyDidYouUpdate("Child", { value })

  return <div>{value}</div>
}
```

---

## 🧪 Example

```jsx id="3p7u0c"
import {
  useStateTracker,
  useRenderTracker,
  useWhyDidYouUpdate
} from "react-state-logger"

function Child({ value }) {
  useWhyDidYouUpdate("Child", { value })
  return <div>{value}</div>
}

function App() {
  const [count, setCount] = useStateTracker(0, "count")

  useRenderTracker("App")

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child value={count} />
    </div>
  )
}
```

---

## 🧠 Why Use This?

Instead of:

```js id="2y0bwe"
console.log(state)
```

You get:

* previous vs next values
* render counts
* prop differences
* structured logs

---

## ⚠️ Notes

* Works only in development mode
* Uses shallow comparison

---

## 📄 License

MIT
