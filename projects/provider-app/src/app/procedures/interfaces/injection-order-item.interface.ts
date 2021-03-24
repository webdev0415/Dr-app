import { OrderStateEnum } from '../../common/enums';

export interface InjectionOrderItem {
  name: string;
  state: OrderStateEnum;
  dosage: string;
  route: string;
  toleratedWell: boolean;
  noDifficulty: boolean;
}
