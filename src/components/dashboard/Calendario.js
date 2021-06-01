import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { useState } from 'react';

const Calendario = (props) => {
  const [valueCalendar, onChange] = useState(new Date());

  return (
    <Card {...props}>
      <CardHeader title="Calendario" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: '100%',
            position: 'relative',
          }}
        >
          <Calendar
            onChange={onChange}
            value={valueCalendar}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Calendario;
