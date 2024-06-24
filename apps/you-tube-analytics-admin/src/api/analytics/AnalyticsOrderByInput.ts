import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  metric?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
  videoId?: SortOrder;
};
