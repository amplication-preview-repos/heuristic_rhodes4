import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  plan?: string | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
