import React from "react";
import ProjectForm from "@/Components/Projects/ProjectForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NewProjectModal from "../Components/Projects/NewProjectModal";
import Container from "@mui/material/Container";

export default function Projects({ props }) {
    {
        console.log(props);
    }
    return (
        <>
            <AuthenticatedLayout auth={props.auth}>
                <div>Projects</div>
                <Container>
                    <NewProjectModal></NewProjectModal>
                </Container>
            </AuthenticatedLayout>
        </>
    );
}
