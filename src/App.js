import { Routes, Route } from "react-router-dom";

import { routes } from './routes';

function App() {
  return (
    <Routes>
      {routes.map((item, key) => <Route key={key} path={item.path} element={item.element} />)}
    </Routes>
  );
}

export default App;