import './App.css';
import Index from './pages/index';
import UseEffect from './pages/useEffect/useEffect';
import UseMemo from './pages/useMemo/useMemo';
import UseState from './pages/useState/useState';
import UseCallback from './pages/useCallback/useCallback';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UseRef from './pages/useRef/useRef';

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
  },  {
    path: "/usecallback",
    element: <UseCallback/>,
  },  {
    path: "/useref",
    element: <UseRef/>,
  },]);

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
