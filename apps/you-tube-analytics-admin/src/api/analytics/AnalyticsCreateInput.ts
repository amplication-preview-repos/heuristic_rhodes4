import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type AnalyticsCreateInput = {
  metric?: string | null;
  value?: number | null;
  video?: VideoWhereUniqueInput | null;
};
