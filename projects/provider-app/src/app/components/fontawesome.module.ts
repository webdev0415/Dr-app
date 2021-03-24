import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheck as fasCheck,
  faChevronDown as fasChevronDown,
  faChevronRight as fasChevronRight,
  faPen as fasPen,
  faSearch as fasSearch,
  faSyncAlt as fasSyncAlt,
  faTimes as fasTimes,
  faUserMd as fasUserMd,
  faUsersMedical as fasUsersMedical,
  faPills as faPills
} from '@fortawesome/pro-solid-svg-icons';
import {
  faAddressCard as falAddressCard,
  faAngleDown as falAngleDown,
  faCheckSquare as falCheckSquare,
  faCommentAltMedical as falCommentAltMedical,
  faMars as falMars,
  faPlus as falPlus,
  faSquare as falSquare,
  faThermometer as falThermometer,
  faTransgender as falTransgender,
  faTv as falTv,
  faUndo as falUndo,
  faUserShield as falUserShield,
  faVenus as falVenus,
  faVial as falVial,
  faWindowClose as falWindowClose,
  faCheck as falCheck,
} from '@fortawesome/pro-light-svg-icons';
import {
  faBug as fadBug,
  faClinicMedical as fadClinicMedical,
  faClipboardPrescription as fadClipboardPrescription,
  faNotesMedical as fadNotesMedical,
  faPenAlt as fadPenAlt,
  faPennant as fadPennant,
  faScalpelPath as fadScalpelPath,
  faSignOut as fadSignOut,
  faTasksAlt as fadTasksAlt,
  faTv as fadTv,
  faUserInjured as fadUserInjured,
  faVial as fadVial,
  faCog as fadCog,
  faEnvelopeSquare as fadEnvelopeSquare
} from '@fortawesome/pro-duotone-svg-icons';
import { faPills as farPills, faSyringe as farSyringe } from '@fortawesome/pro-regular-svg-icons';

const FontAwesomeIcons = [
  fasUsersMedical,
  fasUserMd,
  fasCheck,
  fasTimes,
  fasSearch,
  fasChevronRight,
  fasChevronDown,
  fasPen,
  fasSyncAlt,
  falSquare,
  falCheckSquare,
  falVial,
  falThermometer,
  falCommentAltMedical,
  falWindowClose,
  falAngleDown,
  falUndo,
  falPlus,
  falMars,
  falVenus,
  falTransgender,
  falAddressCard,
  falUserShield,
  falTv,
  falCheck,
  fadUserInjured,
  fadTasksAlt,
  fadSignOut,
  fadBug,
  fadPennant,
  fadNotesMedical,
  fadClinicMedical,
  fadScalpelPath,
  fadVial,
  fadPenAlt,
  fadClipboardPrescription,
  fadTv,
  farPills,
  farSyringe,
  fadCog,
  fadEnvelopeSquare,
  faPills
];

@NgModule({
  imports: [FontAwesomeModule],
  providers: [],
  exports: [FontAwesomeModule],
  declarations: []
})
export class CustomFontAwesomeModule {
  constructor (library: FaIconLibrary) {
    library.addIcons(...FontAwesomeIcons);
  }
}
