import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { YouTubeChannelServiceBase } from "./base/youTubeChannel.service.base";

@Injectable()
export class YouTubeChannelService extends YouTubeChannelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
