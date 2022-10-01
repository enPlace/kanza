import React from "react";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useForm, Head } from "@inertiajs/inertia-react";
export default function ProjectForm({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("projects.store"));
    }; /* , { onSucces: () => reset() } */
    return (
        <Container>
            <form
                onSubmit={submit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "space-between",
                    justifyContent: "space-between",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Project Title"
                    variant="outlined"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />

                <Button variant="contained" onClick={submit}>
                    Create Project
                </Button>
            </form>
        </Container>
    );
}
