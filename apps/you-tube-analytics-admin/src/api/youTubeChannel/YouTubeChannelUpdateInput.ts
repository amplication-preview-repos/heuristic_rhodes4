import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoUpdateManyWithoutYouTubeChannelsInput } from "./VideoUpdateManyWithoutYouTubeChannelsInput";

export type YouTubeChannelUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  videos?: VideoUpdateManyWithoutYouTubeChannelsInput;
};
