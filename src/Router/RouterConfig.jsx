import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteData } from "./Routes";
import PrivateRouter from "./privateRouter";

export default function RouterConfig() {
  return (
    <>
      <Routes>
        {RouteData.map(({ route, Component, isPublic }) => {
          return (
            <>
              {isPublic ? (
                <Route path={route} Component={Component} />
              ) : (
                <>
                  <Route element={<PrivateRouter />}>
                    <Route path={route} Component={Component} />
                  </Route>
                </>
              )}
            </>
          );
        })}
      </Routes>
    </>
  );
}
