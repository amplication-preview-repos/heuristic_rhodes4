import { YouTubeChannelWhereInput } from "./YouTubeChannelWhereInput";
import { YouTubeChannelOrderByInput } from "./YouTubeChannelOrderByInput";

export type YouTubeChannelFindManyArgs = {
  where?: YouTubeChannelWhereInput;
  orderBy?: Array<YouTubeChannelOrderByInput>;
  skip?: number;
  take?: number;
};
