import React, { useState, useEffect } from 'react';
import './Ecommerce.css';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { TextField, Card, CardMedia, ButtonGroup, Button, CardContent, Typography, Checkbox, Grid, Container } from '@material-ui/core';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
function Ecommerce() {


    const [posts, setPosts] = useState([]);

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    }

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        } else {
            setValue(0);
        }
    }

    useEffect(async () => {

        const response = await axios.get(`https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7`);

        console.log(response.status);

        if (response.status === 200) {

            console.log(response);

            setPosts(response.data);

        }

        else { alert('Something went wrong') }

    }, []);


    return (
        <>
            <div className="nav">

                <div className="head">
                    <Typography variant="h3">McDonald's</Typography>
                </div>

                <div className='field'>
                    <SearchIcon size="large" className="search" />
                    <TextField placeholder="search for dishes" variant="outlined" size="small" className='text' />


                    <div className="btn1">
                        <Button
                            style={{ backgroundColor: "white", maxHeight: "2.5rem" }}
                            variant="contained"
                            color="default"
                        >
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            veg only
                        </Button>
                    </div>


                    <div className="btn1">
                        <Button

                            style={{ backgroundColor: "white", maxHeight: "2.5rem" }}
                            variant="contained"
                            color="default"
                        >

                            {<Checkbox icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />} />}


                            favourite
                        </Button>
                    </div>
                </div>

                <div className="star">

                    <Typography variant="h6" className="star-content"> <StarBorderIcon fontSize="small" />4.3 | 35 mins | ₹ 400 for two </Typography>
                </div>
            </div>
            <div className='lists'>
                <Grid Container spacing={4}>
                    {posts.map((list, index) =>
                        <Grid item key={list} xs={12} sm={6} md={4}>
                        <table>
                            <Container className="content">
                                <Card className="card">
                                    <td ><h3>{list.item_name}</h3></td> <hr />
                                    <td><p>₹{list.price}</p></td>
                                    <CardMedia>
                                        <img src='/Images/juice.jpeg' />
                                        <div className='btn'>
                                            <ButtonGroup size="small">
                                                <Button onClick={handleDecrement}><RemoveIcon fontSize="small" /></Button>
                                                <Button>{value}</Button>
                                                <Button onClick={handleIncrement}><AddIcon fontSize="small" /></Button>
                                            </ButtonGroup>
                                        </div>
                                    </CardMedia>
                                    <CardContent className="content">
                                        <h5>stay home stay safe & share a meal.<br /> we are there to serve you </h5>
                                    </CardContent>
                                </Card>
                            </Container>
                               
                        </table>
                    </Grid>
                    )}
                  </Grid>
            </div>

        </>


            )
}

            export default Ecommerce
