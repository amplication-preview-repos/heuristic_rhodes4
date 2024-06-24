import { InputJsonValue } from "../../types";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";
import { YouTubeChannelCreateNestedManyWithoutUsersInput } from "./YouTubeChannelCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
  username: string;
  youTubeChannels?: YouTubeChannelCreateNestedManyWithoutUsersInput;
};
