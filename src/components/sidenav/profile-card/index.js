import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
function CardComponent(props)
{
   
    return (
        <Card variant="outlined">
            <CardActionArea>
                <CardContent>
                    <div className='title'>
                        {props.title}
                    </div>
                    <div className='content'>
                        {props.children}
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button variant="contained" color="secondary" size="medium">Submit</Button>
                <Button variant="contained" color="secondary" size="medium">Cancel</Button> */}
                {props.actionbuttons}
            </CardActions>
        </Card>
    );
}

export default CardComponent;