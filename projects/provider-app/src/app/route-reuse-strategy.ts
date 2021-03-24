import { ActivatedRouteSnapshot, DetachedRouteHandle, OutletContext, RouteReuseStrategy } from '@angular/router';
import { Type } from '@angular/core';

interface HandlerValue {
  handle: DetachedRouteHandle;
  reuseOnlyParentComponent: Type<any> | string | null;
}


export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  handlers: {[key: string]: HandlerValue} = {};

  static deactivateOutletForHandle(handle: DetachedRouteHandle): void {
    const contexts: Map<string, OutletContext> = handle['contexts'];
    handle['componentRef'].destroy();
    contexts.forEach((context: OutletContext) => {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
    });
  }

  private checkHandlers(component: Type<any> | string | null): void {
    Object.entries(this.handlers).forEach(([key, handlerValue]: [string, HandlerValue]) => {
      if (handlerValue.reuseOnlyParentComponent === null) return;
      if (component === handlerValue.reuseOnlyParentComponent) return;
      CustomRouteReuseStrategy.deactivateOutletForHandle(handlerValue.handle);
      delete this.handlers[key];
    });
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data.shouldReuse || false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const data = route.data;
    if (data.shouldReuse) {
      this.handlers[route.routeConfig.path] = {
        handle: handle,
        reuseOnlyParentComponent: 'reuseOnlyParentComponent' in data ? data.reuseOnlyParentComponent : null
      };
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.parent && route.parent.component) this.checkHandlers(route.parent.component);
    return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig) return null;
    if (route.routeConfig.loadChildren || route.routeConfig.children) return null;
    const handleValue = this.handlers[route.routeConfig.path];
    return handleValue ? handleValue.handle : null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
