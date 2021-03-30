import React, {useState} from "react"
import {
    Link,
    Redirect,
} from "react-router-dom"
import {
    TextField,
    Grid,
    Button,
} from "@material-ui/core"
import axios from "axios"

const server = "http://localhost:8080/new"

export default function CreateTask() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        axios.post(server, {
            title: name,
            description: description
        })
    }

    return (
        <Grid container>
            <Grid item>
                <TextField label={"name"} autoComplete={false} onChange={e => setName(e.target.value)}/>
                <TextField label={"description"} autoComplete={false} onChange={e => setDescription(e.target.value)} />
                <Button variant={"contained"} color={"primary"} onClick={handleSubmit}>Сохранить</Button>
                <Link to={"/"}>
                    <Button variant={"contained"}>Назад</Button>
                </Link>
            </Grid>
        </Grid>
    )
}