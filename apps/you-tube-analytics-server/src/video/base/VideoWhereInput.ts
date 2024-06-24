/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyticsListRelationFilter } from "../../analytics/base/AnalyticsListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { YouTubeChannelWhereUniqueInput } from "../../youTubeChannel/base/YouTubeChannelWhereUniqueInput";

@InputType()
class VideoWhereInput {
  @ApiProperty({
    required: false,
    type: () => AnalyticsListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AnalyticsListRelationFilter)
  @IsOptional()
  @Field(() => AnalyticsListRelationFilter, {
    nullable: true,
  })
  analyticsItems?: AnalyticsListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => YouTubeChannelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => YouTubeChannelWhereUniqueInput)
  @IsOptional()
  @Field(() => YouTubeChannelWhereUniqueInput, {
    nullable: true,
  })
  youtubeChannel?: YouTubeChannelWhereUniqueInput;
}

export { VideoWhereInput as VideoWhereInput };
