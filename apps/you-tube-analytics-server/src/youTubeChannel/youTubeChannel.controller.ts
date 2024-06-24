import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { YouTubeChannelService } from "./youTubeChannel.service";
import { YouTubeChannelControllerBase } from "./base/youTubeChannel.controller.base";

@swagger.ApiTags("youTubeChannels")
@common.Controller("youTubeChannels")
export class YouTubeChannelController extends YouTubeChannelControllerBase {
  constructor(
    protected readonly service: YouTubeChannelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
