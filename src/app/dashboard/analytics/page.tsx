'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function AnalyticsPage(): React.JSX.Element {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Analytics</Typography>
      <Grid container spacing={3}>
        {/* Add analytics components here */}
      </Grid>
    </Box>
  );
} 