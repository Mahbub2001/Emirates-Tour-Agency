import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { routers } from "./routes/routers/Router";

function App() {
  return (
    <div className="m-container">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
