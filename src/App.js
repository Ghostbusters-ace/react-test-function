import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Router/Routes";

function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
