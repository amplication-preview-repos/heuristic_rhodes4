import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type AnalyticsWhereInput = {
  id?: StringFilter;
  metric?: StringNullableFilter;
  value?: IntNullableFilter;
  video?: VideoWhereUniqueInput;
};
