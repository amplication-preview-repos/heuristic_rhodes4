import { Analytics as TAnalytics } from "../api/analytics/Analytics";

export const ANALYTICS_TITLE_FIELD = "metric";

export const AnalyticsTitle = (record: TAnalytics): string => {
  return record.metric?.toString() || String(record.id);
};
