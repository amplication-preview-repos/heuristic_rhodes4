import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AnalyticsTitle } from "../analytics/AnalyticsTitle";
import { YouTubeChannelTitle } from "../youTubeChannel/YouTubeChannelTitle";

export const VideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="analyticsItems"
          reference="Analytics"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalyticsTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
        <ReferenceInput
          source="youtubeChannel.id"
          reference="YouTubeChannel"
          label="youtubeChannel"
        >
          <SelectInput optionText={YouTubeChannelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
