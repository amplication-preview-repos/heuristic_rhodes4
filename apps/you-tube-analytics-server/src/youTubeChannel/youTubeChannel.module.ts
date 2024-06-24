import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { YouTubeChannelModuleBase } from "./base/youTubeChannel.module.base";
import { YouTubeChannelService } from "./youTubeChannel.service";
import { YouTubeChannelController } from "./youTubeChannel.controller";
import { YouTubeChannelResolver } from "./youTubeChannel.resolver";

@Module({
  imports: [YouTubeChannelModuleBase, forwardRef(() => AuthModule)],
  controllers: [YouTubeChannelController],
  providers: [YouTubeChannelService, YouTubeChannelResolver],
  exports: [YouTubeChannelService],
})
export class YouTubeChannelModule {}
