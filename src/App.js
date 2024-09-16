import { RouterProvider } from "react-router-dom";
import root from "./router/root";

function App() {
  return (
    // 구성요소들을 전달하고 활성화
    <RouterProvider router={root}/>  
  );
}

export default App;
