import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  InputsModule,
  ButtonsModule,
  PreloadersModule,
  WavesModule,
  CardsModule,
  InputUtilitiesModule,
  ModalModule,
  CollapseModule,
  AccordionModule,
  NavbarModule,
  DropdownModule,
  TooltipModule,
  IconsModule,
  SelectModule,
  DatepickerModule,
  CheckboxModule,
  AutoCompleterModule,
  BadgeModule,
  ChipsModule,
  TabsModule,
  MDBSpinningPreloader,
  RangeModule,
  TableModule,
  TooltipConfig,
  MdbSelectModule, PopoverConfig, PopoverModule
} from 'ng-uikit-pro-standard';

const mdbComponents = [
  InputsModule,
  InputUtilitiesModule,
  ButtonsModule,
  PreloadersModule,
  WavesModule,
  CardsModule,
  CollapseModule,
  AccordionModule,
  NavbarModule,
  IconsModule,
  SelectModule,
  DatepickerModule,
  CheckboxModule,
  AutoCompleterModule,
  BadgeModule,
  ChipsModule,
  RangeModule,
  TableModule,
  MdbSelectModule,
  PopoverModule
];

@NgModule({
  imports: [
    ...mdbComponents,
    TabsModule.forRoot(),
    ModalModule,
    DropdownModule.forRoot(),
    TooltipModule
  ],
  providers: [TooltipConfig, PopoverConfig],
  exports: [
    ...mdbComponents,
    ModalModule,
    DropdownModule,
    TooltipModule,
    TabsModule,
  ]
})
export class MDBModule {
  static forRoot(): ModuleWithProviders<MDBModule> {
    return {
      ngModule: MDBModule,
      providers: [ MDBSpinningPreloader ]
    };
  }
}
