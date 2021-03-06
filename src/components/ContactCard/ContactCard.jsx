import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function ContactCard({ contact }) {

    return (
        <>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    First Name:
                </Typography>
                <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                    {contact.first}
                </Typography>
                <Typography variant="h6" component="div">
                    Last Name:
                </Typography>
                <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                    {contact.last}
                </Typography>
                <Typography variant="h6" component="div">
                    Phone Number:
                </Typography>
                <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                    {contact.phone}
                </Typography>
                <Typography variant="h6" component="div">
                    Email Address:
                </Typography>
                <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                    {contact.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Link className="link-btn" to={`/edit/${contact.first}`}>Edit Contact</Link>
            </CardActions>
        </Card>
        <br />
        </>
    );
}