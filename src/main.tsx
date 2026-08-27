import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
flushSync(() => {
  createRoot(rootEl).render(<App />);
});
rootEl.setAttribute("data-ready", "");
