import { Data, Route } from '@angular/router';
import { Type } from '@angular/core';

interface CustomData extends Data {
  shouldReuse?: boolean;
  reuseOnlyParentComponent?: Type<any> | null;
}

interface CustomRoute extends Route {
  data?: CustomData;
}

export type Routes = CustomRoute[];
