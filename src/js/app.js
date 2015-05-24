import React from "react";
import Flux from "./Flux";
import Router from "react-router";
import routes from "./routes";

async function performRouteHandlerStaticMethod(routes, methodName, ...args) {
  return Promise.all(routes
    .map(route => route.handler[methodName])
    .filter(method => typeof method === 'function')
    .map(method => method(...args))
  );
}

export function run(mountPoint) {
  let flux = new Flux();
  let router = Router.create({
    routes,
    location: Router.HashLocation
  });

  router.run(async (Root,state) => {
    const routeHandlerInfo = { state, flux };

    await performRouteHandlerStaticMethod(state.routes, 'routerWillRun', routeHandlerInfo);

    React.render(
      <Root flux={flux}/>,
      mountPoint
    );
  });
}
