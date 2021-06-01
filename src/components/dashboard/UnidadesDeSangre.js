import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { Favorite } from '@material-ui/icons';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const UnidadesDeSangre = (props) => (
  <Card {...props}>
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
            Unidades de sangre donadas
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            200
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <Favorite />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          16%
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

export default UnidadesDeSangre;
