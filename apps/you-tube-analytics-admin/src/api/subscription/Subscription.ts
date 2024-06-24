import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  plan: string | null;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
