import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VideoTitle } from "../video/VideoTitle";

export const AnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="metric" source="metric" />
        <NumberInput step={1} label="value" source="value" />
        <ReferenceInput source="video.id" reference="Video" label="video">
          <SelectInput optionText={VideoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
