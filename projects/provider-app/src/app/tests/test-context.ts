import { DebugElement, NO_ERRORS_SCHEMA, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { configureTestSuite } from 'ng-bullet';

import { CommonTestModule } from './common-test.module';


export class TestContext<T> {
  private readonly _componentType: Type<T>;
  private readonly _detectChangesOnUpdate: boolean;
  component: T;
  fixture: ComponentFixture<T>;
  debugElement: DebugElement;
  debugComponent: any;
  nativeElement: HTMLElement;

  constructor(componentType: Type<T>, detectChangesOnUpdate: boolean) {
    this._componentType = componentType;
    this._detectChangesOnUpdate = detectChangesOnUpdate === undefined ? true : detectChangesOnUpdate;
  }

  detectChanges(): void {
    this.fixture.detectChanges();
  }

  updateContext(detectChanges = false): void {
    const fixture: ComponentFixture<T> = TestBed.createComponent(this._componentType);
    this.fixture = fixture;
    this.component = fixture.componentInstance;
    this.debugElement = fixture.debugElement;
    this.debugComponent = fixture.debugElement.componentInstance;
    this.nativeElement = fixture.nativeElement;
    if (this._detectChangesOnUpdate || detectChanges) this.detectChanges();
  }

  componentFixtureCreate(detectChanges = false): T {
    this.updateContext(detectChanges);
    return this.component;
  }
}

interface SpecConfiguration<T> {
  componentType?: Type<T>;
  imports?: any[];
  declarations?: any[];
  providers?: any[];
  noErrorsSchema?: boolean;
  entryComponents?: any[];
  beforeEachDetectChanges?: boolean;
  beforeComponentFixtureCreated?: boolean;
}

export function generateSpecs<T>(configuration: SpecConfiguration<T>,
                                                describeSuite: (context?: TestContext<T>) => void) {
  return () => {
    const { componentType, imports, declarations, providers, noErrorsSchema,
      entryComponents, beforeEachDetectChanges, beforeComponentFixtureCreated } = configuration;
    const prepareImports: any[] = imports ? imports : [];
    let context: TestContext<T>;
    if (componentType) {
      context = new TestContext<T>(componentType, beforeEachDetectChanges);
    }
    const schemas = [];
    if (noErrorsSchema) schemas.push(NO_ERRORS_SCHEMA);
    configureTestSuite(() => {
      if (entryComponents) {
        TestBed.overrideModule(BrowserDynamicTestingModule, {
          set: {
            entryComponents: entryComponents
          }
        });
      }
      TestBed.configureTestingModule({
        imports: [
          CommonTestModule,
          ...prepareImports
        ],
        declarations: declarations ? declarations : [],
        providers: providers ? providers : [],
        schemas: schemas
      });
    });
    if (componentType) {
      beforeEach(() => {
        const componentCreate = beforeComponentFixtureCreated === undefined ? true : beforeComponentFixtureCreated;
        if (componentCreate) {
          context.updateContext();
        }
      });
    }
    describeSuite(context);
  };
}
