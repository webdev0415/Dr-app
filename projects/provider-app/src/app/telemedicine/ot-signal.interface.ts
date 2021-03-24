import { Connection } from '@opentok/client';

export interface OTSignal { type: string; data: string; to?: Connection; from?: Connection; }
