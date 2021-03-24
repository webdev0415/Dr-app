import { ProtocolKeys } from '../enum/protocol-keys.enum';

export interface TreatmentProtocolDetails {
  alias: string;
  treatments: { name: string; isSelected: boolean }[];
  keys: Array<string | ProtocolKeys>;
}
