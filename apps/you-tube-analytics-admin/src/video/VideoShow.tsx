import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VIDEO_TITLE_FIELD } from "./VideoTitle";
import { YOUTUBECHANNEL_TITLE_FIELD } from "../youTubeChannel/YouTubeChannelTitle";

export const VideoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="youtubeChannel"
          source="youtubechannel.id"
          reference="YouTubeChannel"
        >
          <TextField source={YOUTUBECHANNEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Analytics"
          target="videoId"
          label="AnalyticsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="metric" source="metric" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
            <ReferenceField label="video" source="video.id" reference="Video">
              <TextField source={VIDEO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
