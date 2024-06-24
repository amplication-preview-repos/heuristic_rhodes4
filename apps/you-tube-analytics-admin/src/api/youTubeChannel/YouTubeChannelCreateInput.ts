import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoCreateNestedManyWithoutYouTubeChannelsInput } from "./VideoCreateNestedManyWithoutYouTubeChannelsInput";

export type YouTubeChannelCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  videos?: VideoCreateNestedManyWithoutYouTubeChannelsInput;
};
