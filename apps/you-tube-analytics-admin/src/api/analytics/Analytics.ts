import { Video } from "../video/Video";

export type Analytics = {
  createdAt: Date;
  id: string;
  metric: string | null;
  updatedAt: Date;
  value: number | null;
  video?: Video | null;
};
