import { AnalyticsUpdateManyWithoutVideosInput } from "./AnalyticsUpdateManyWithoutVideosInput";
import { YouTubeChannelWhereUniqueInput } from "../youTubeChannel/YouTubeChannelWhereUniqueInput";

export type VideoUpdateInput = {
  analyticsItems?: AnalyticsUpdateManyWithoutVideosInput;
  description?: string | null;
  title?: string | null;
  youtubeChannel?: YouTubeChannelWhereUniqueInput | null;
};
