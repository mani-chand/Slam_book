"use client";
import { Button, Typography, Grid } from "@mui/material/";
export function Navbar(props) {
return (
    <Grid container bgcolor="darkgrey" padding={1}>
    <Grid item xs={9}>
        <Typography variant="h4" gutterBottom>
        Streaming app
        </Typography>
    </Grid>
    <Grid item>
        <Button size="large" style={{ fontSize: "20px" }} variant="text">
        login
        </Button>
        <Button size="large" style={{ fontSize: "20px" }} variant="text">
        signup
        </Button>
        <Button size="large" style={{ fontSize: "20px" }} variant="text">
        logout
        </Button>
    </Grid>
    </Grid>
);
}
