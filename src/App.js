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
import ReduxToolkit from './pages/reduxToolkit/reduxToolkit';
import { Provider } from "react-redux"; 
import { store } from './toolkit/state/state';


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
    path: "/toolkit",
    element: <ReduxToolkit/>,
  }, {
    path: "/usecallback",
    element: <UseCallback/>,
  },  {
    path: "/useref",
    element: <UseRef/>,
  },]);

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <main>
          <RouterProvider router={router} />
        </main>
      </div>
    </Provider>
  );
}

export default App;
