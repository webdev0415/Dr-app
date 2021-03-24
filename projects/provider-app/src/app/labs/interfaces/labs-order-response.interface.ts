import { OrderStateEnum } from '../../common/enums';

export interface LabsOrderResponseInterface {
  orderedLabs: string[];
  orderedMeasurements: string[];
  labsState: OrderStateEnum;
  measurementsState: OrderStateEnum;
}
