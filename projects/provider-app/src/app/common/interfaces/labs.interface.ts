import { LabsOrdersEnum } from '../../labs/enums/labs-orders.enum';
import { OrderStateEnum } from '../enums';

export interface Lab {
  ids: string[];
  name: string;
  prefix: string;
  ordering?: boolean;
  code?: keyof typeof LabsOrdersEnum;
  regular?: boolean;
  normal?: string;
  negative?: boolean;
  urineTest?: boolean;
  numeric?: boolean;
  state: OrderStateEnum;
}

