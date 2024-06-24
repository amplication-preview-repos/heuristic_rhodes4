import { AnalyticsListRelationFilter } from "../analytics/AnalyticsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { YouTubeChannelWhereUniqueInput } from "../youTubeChannel/YouTubeChannelWhereUniqueInput";

export type VideoWhereInput = {
  analyticsItems?: AnalyticsListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  youtubeChannel?: YouTubeChannelWhereUniqueInput;
};
