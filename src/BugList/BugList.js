import React, {useState, useEffect} from "react"
import {
    Grid,
    List,
} from '@material-ui/core'
import "./BugList.css"
import {
    Link
} from "react-router-dom";
import axios from "axios"

export default function BugList() {
    const [items, setItems] = useState([])
    const server = "http://localhost:8080/new"

    useEffect(() => {
        axios.get(server)
            .then(res => {
                setItems(res.data)
            })
    }, [])

    console.log(items)

    const handleDownload = () => {
        const name = "filename"
        const val = "some cool text"
        let download = document.createElement("a")
        download.href = "data:text/plain;content-disposition=attachment;filename=file, " + val
        download.download = name
        download.style.display = "none"
        download.id = "download"
        document.body.appendChild(download)
        document.getElementById("download").click()
        document.body.removeChild(download)
    }

    return (
        <Grid container direction={"row"} spacing={3} style={{padding: 20}}>
            <Grid item xs={4}>
                <Link to={"/create-task"} className={"create_task"}><a>Добавить задачу</a></Link>
                <List dense component={"div"} role={"list"} disablePadding={true}>
                    {items.map(item => (
                        <div className={"list_item"}>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </div>
                    ))}
                </List>
            </Grid>
            <Grid item xs={8}>
                <div className={"item_block"}>test</div>
            </Grid>
        </Grid>
    )
}