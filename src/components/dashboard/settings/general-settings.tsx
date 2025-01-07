import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export function GeneralSettings(): React.JSX.Element {
  return (
    <Card>
      <CardHeader title="Notifications" />
      <CardContent>
        <Stack spacing={2}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Email Notifications"
          />
          <FormControlLabel
            control={<Switch />}
            label="Push Notifications"
          />
          {/* Add more settings */}
        </Stack>
      </CardContent>
    </Card>
  );
} 