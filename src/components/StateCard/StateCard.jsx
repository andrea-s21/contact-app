import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function StateCard({ state }) {

    return (
        <>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    First Name:
                </Typography>
                <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                    {state.first}
                </Typography>
                <Typography variant="h6" component="div">
                    Last Name:
                </Typography>
                <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                    {state.last}
                </Typography>
                <Typography variant="h6" component="div">
                    Phone Number:
                </Typography>
                <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                    {state.phone}
                </Typography>
                <Typography variant="h6" component="div">
                    Email:
                </Typography>
                <Typography sx={{ fontSize: 17 }} color="dark" gutterBottom>
                    {state.email}
                </Typography>
            </CardContent>
        </Card>
        <br />
        </>
    );
}