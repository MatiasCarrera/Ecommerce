import { Routes, Route } from "react-router-dom";
import { routes } from "./menuRoutes";
import Layout from "../components/layout/Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../components/pages/dashboard/Dashboard";


const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
<Route element={<ProtectedRoutes/>}>
<Route path="/dashboard" element={<Dashboard/>}></Route>
</Route>
      <Route path="*" element={<h1>404- Not Found</h1>} />
    </Routes>
  );
};

export default AppRouter;
