import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  plan?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
