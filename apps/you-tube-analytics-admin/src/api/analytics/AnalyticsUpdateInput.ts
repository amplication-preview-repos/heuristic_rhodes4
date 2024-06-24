import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type AnalyticsUpdateInput = {
  metric?: string | null;
  value?: number | null;
  video?: VideoWhereUniqueInput | null;
};
