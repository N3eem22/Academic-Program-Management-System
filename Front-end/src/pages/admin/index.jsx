import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const AdminPage = React.memo(() => {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
});
