import { Value } from './measurement-value.interface';
import { AuditMeasurementsTypes } from '../../types/audit-measurement.type';

export interface Measurement {
  trustabilityScore: number;
  measureType: AuditMeasurementsTypes;
  timestamp: string;
  value: Value;
  temp?: boolean;
}
