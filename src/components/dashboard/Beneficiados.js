import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { blue, red } from '@material-ui/core/colors';
import { Face } from '@material-ui/icons';

const Beneficiados = (props) => (
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
            Personas beneficiadas
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            150
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: blue[600],
              height: 56,
              width: 56
            }}
          >
            <Face />
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

export default Beneficiados;
