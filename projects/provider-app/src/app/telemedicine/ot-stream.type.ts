import { Stream as OTStream } from '@opentok/client';
import { VideoSourceEnum } from './video-source.enum';

export type Stream = Omit<OTStream, 'name'> & { name: VideoSourceEnum };
