import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { yellow, red } from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const DonadoresRegistrados = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Donadores registrados
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            44
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: yellow[800],
              height: 56,
              width: 56
            }}
          >
            <PersonAddIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Comparación al último mes
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default DonadoresRegistrados;
