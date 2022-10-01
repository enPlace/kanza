import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
export default function ActionAreaCard({ handleOpen }) {
    return (
        <Card
            sx={{
                maxWidth: 345,
            }}
        >
            <CardActionArea onClick={() => handleOpen()}>
                <CardContent
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        Create a new project
                    </Typography>
                    <AddCircleIcon fontSize="large"></AddCircleIcon>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
