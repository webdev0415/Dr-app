import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GeneratorContext } from './generator-context.model';

export const ReturnToWorkTableImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAVCAYAAACHUoQEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGUlEQVQImWP4////fyYGBgYG2hEMDAwM/wGiBwUi5DeUfwAAAABJRU5ErkJggg==';
export const LOADER = new InjectionToken<BehaviorSubject<boolean>>('EMITS LOADER DISPLAY AND HIDE');
export const GENERATOR_CONTEXT = new InjectionToken<GeneratorContext>('PDV GENERATOR CONTEXT');
