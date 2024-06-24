import { User } from "../user/User";
import { Video } from "../video/Video";

export type YouTubeChannel = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
  videos?: Array<Video>;
};
