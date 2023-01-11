import './App.css';
import Index from './pages/index';
import UseEffect from './pages/useEffect/useEffect';
import UseMemo from './pages/useMemo/useMemo';
import UseState from './pages/useState/useState';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/useeffect",
    element: <UseEffect/>,
  },
  {
    path: "/usememo",
    element: <UseMemo/>,
  },
  {
    path: "/usestate",
    element: <UseState/>,
  },
]);

function App() {
  return (
    <div className="App">
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
