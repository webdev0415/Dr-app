import { HistoryItem } from '../../../../../pharmacist/src/lib/side-models/common/interfaces/health-history/history-item.interface';
import { PatientDataSectionNameEnum } from '../enums/patient-data-section.enum';
import { ParsedSymptom } from '../interfaces/symptoms.interface';

export type PatientDataSection = {
    [key in keyof typeof PatientDataSectionNameEnum]: {
        name: PatientDataSectionNameEnum;
        data: HistoryItem[];
        list: Array<ParsedSymptom & Partial<HistoryItem>>;
        showPersonalHistory: boolean;
    };
};
