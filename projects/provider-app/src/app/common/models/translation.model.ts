/**********************************
 *  translation.model
 *********************************/

 import { AvailableLanguageTypesEnum } from '../enums/available-language-types.enum';

 /*******************************
  * Class declaration
 ******************************/

 export interface Translation {
     selector: string;
     languageKey: AvailableLanguageTypesEnum;
     term: string;
 }
