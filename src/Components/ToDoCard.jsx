import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



const ToDoCard = (props) => {
    const card = (
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            <div className="row">
              <div className="col-sm-9">
                    {props.content}
              </div>
              <div className="col text-end">
                {props.buttons}
              </div>
            </div>
          </Typography>
        </CardContent>
      </React.Fragment>
    );
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}

export default ToDoCard;