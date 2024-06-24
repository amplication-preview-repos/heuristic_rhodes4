import { AnalyticsCreateNestedManyWithoutVideosInput } from "./AnalyticsCreateNestedManyWithoutVideosInput";
import { YouTubeChannelWhereUniqueInput } from "../youTubeChannel/YouTubeChannelWhereUniqueInput";

export type VideoCreateInput = {
  analyticsItems?: AnalyticsCreateNestedManyWithoutVideosInput;
  description?: string | null;
  title?: string | null;
  youtubeChannel?: YouTubeChannelWhereUniqueInput | null;
};
