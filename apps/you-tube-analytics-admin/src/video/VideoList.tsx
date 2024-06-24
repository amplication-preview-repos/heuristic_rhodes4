import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { YOUTUBECHANNEL_TITLE_FIELD } from "../youTubeChannel/YouTubeChannelTitle";

export const VideoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Videos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
