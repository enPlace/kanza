import * as React from "react";
import ProjectForm from "./ProjectForm";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import NewProjectCard from "./NewProjectCard";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm, Head } from "@inertiajs/inertia-react";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "2px",
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <NewProjectCard handleOpen={handleOpen}></NewProjectCard>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <ProjectForm></ProjectForm>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
