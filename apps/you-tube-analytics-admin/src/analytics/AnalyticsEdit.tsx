import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VideoTitle } from "../video/VideoTitle";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="metric" source="metric" />
        <NumberInput step={1} label="value" source="value" />
        <ReferenceInput source="video.id" reference="Video" label="video">
          <SelectInput optionText={VideoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
