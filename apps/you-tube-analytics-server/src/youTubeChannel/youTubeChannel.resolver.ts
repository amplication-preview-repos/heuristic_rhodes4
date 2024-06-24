import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { YouTubeChannelResolverBase } from "./base/youTubeChannel.resolver.base";
import { YouTubeChannel } from "./base/YouTubeChannel";
import { YouTubeChannelService } from "./youTubeChannel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => YouTubeChannel)
export class YouTubeChannelResolver extends YouTubeChannelResolverBase {
  constructor(
    protected readonly service: YouTubeChannelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
