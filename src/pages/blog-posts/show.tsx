import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export const BlogPostShow = () => {
  const { query } = useShow({});

  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.id} />

        <Typography variant="body1" fontWeight="bold">
          {"Title"}
        </Typography>
        <TextField value={record?.title} />

        <Typography variant="body1" fontWeight="bold">
          {"Content"}
        </Typography>
        <MarkdownField value={record?.content} />

        <Typography variant="body1" fontWeight="bold">
          {"Category"}
        </Typography>
        <div>{record?.category?.title}</div>
        <Typography variant="body1" fontWeight="bold">
          {"Status"}
        </Typography>
        <TextField value={record?.status} />
        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.$createdAt} />
      </Stack>
    </Show>
  );
};
