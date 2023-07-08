import { Outlet } from "react-router-dom";
const AuthLayouts = () => {
  return (
    <>
      <h1>Desde AuthLayout</h1>
      <Outlet />
    </>
  );
};

export default AuthLayouts;
