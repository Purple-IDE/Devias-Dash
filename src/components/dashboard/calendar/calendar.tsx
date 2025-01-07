import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export function Calendar(): React.JSX.Element {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };

  return (
    <Card>
      <CardHeader title="Calendar" />
      <CardContent>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={2} alignItems="center">
            <DateCalendar value={selectedDate} onChange={handleDateChange} />
            <Typography variant="body1">
              Selected Date: {selectedDate?.toLocaleDateString() || 'None'}
            </Typography>
          </Stack>
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
}
