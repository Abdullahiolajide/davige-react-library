A simple responsive react navbar


````md
# davige-react-library

A modular React component library built with Tailwind CSS — featuring customizable UI components like `Navbar`, `Button`, and more.

---

## 🚀 Installation

```bash
npm install davige-react-library
````

> **Note:** Tailwind CSS and react-router-dom must be installed and configured in your project.

In your `tailwind.config.js`, be sure to include:

```js
content: [
  "./node_modules/davige-react-library/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

---

## ✨ Example: Responsive Navbar

```jsx
import {
  Navbar,
  NavbarButtons,
  Button,
  Input
} from "davige-react-library";

export default function App() {
  return (
    <Navbar
      navColors="bg-blue-400 text-white"
      listColors="bg-blue-300 lg:bg-transparent text-white"
    >
      <Navbar.Container>
        <Navbar.Logo>
          <span className="font-bold">BI </span>ByIge
        </Navbar.Logo>

        <Navbar.MenuIcon />

        <Navbar.List>
          <Navbar.ListItem>Hotel</Navbar.ListItem>
          <Navbar.ListItem>Train</Navbar.ListItem>
          <Navbar.ListItem>Flight</Navbar.ListItem>
          <Navbar.ListItem>Travel</Navbar.ListItem>
          <Navbar.ListItem>Car Rental</Navbar.ListItem>
          <Navbar.ListItem>
            <Input />
          </Navbar.ListItem>
        </Navbar.List>

        <Navbar.Buttons>
          <Button>Login</Button>
          <Button outline className="text-black">Signup</Button>
        </Navbar.Buttons>
      </Navbar.Container>

      {/* Mobile Section */}
      <Navbar.Mobile>
        <Navbar.List screen>
          <Navbar.ListItem screen>Hotel</Navbar.ListItem>
          <Navbar.ListItem screen>Train</Navbar.ListItem>
          <Navbar.ListItem screen>Flight</Navbar.ListItem>
          <Navbar.ListItem screen>Travel</Navbar.ListItem>
          <Navbar.ListItem screen>Car Rental</Navbar.ListItem>
          <Navbar.ListItem>
            <Input />
          </Navbar.ListItem>
        </Navbar.List>
      </Navbar.Mobile>
    </Navbar>
  );
}
```

---

## 📚 Components

* `Navbar` – A responsive, customizable navbar with subcomponents.
* `Navbar.Container`
* `Navbar.Logo`
* `Navbar.MenuIcon`
* `Navbar.List`, `Navbar.ListItem`
* `Navbar.Mobile`
* `NavbarButtons`
* `Button`
* `Input`

---

## 🪪 License

MIT
