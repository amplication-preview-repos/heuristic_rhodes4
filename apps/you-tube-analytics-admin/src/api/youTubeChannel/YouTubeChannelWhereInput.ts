import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type YouTubeChannelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  videos?: VideoListRelationFilter;
};
