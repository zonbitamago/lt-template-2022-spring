import { Grid, Heading, Box } from "@chakra-ui/react";
import React from "react";

const DetailLayout: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <Grid templateRows="100pt 1fr">
      <Heading size="2xl" mt="8" color="#FD7D09">
        {title}
      </Heading>
      <Box mt="4">{children}</Box>
    </Grid>
  );
};

export default DetailLayout;
