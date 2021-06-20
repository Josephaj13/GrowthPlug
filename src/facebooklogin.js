import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';
import './facebook.css'
import MyVerticallyCenteredModal from './UpdateModal';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Facebook() {
    const classes = useStyles();
    const [modalShow, setModalShow] = React.useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameChange = (event) => {
        setUsername(event.target.value)
    }
    const passwordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit =()=>{
        console.log(usernameChange)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div id="title">
                        <h1><b>facebook</b></h1>
                        <h3><b>Facebook helps you connect and share with the people in your life.</b></h3>
                    </div>
                </Col>
                <Col>
                    <div className={classes.root}>
                        <Grid item xs={9} sm={9}>
                            <Paper className={classes.paper}>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">

                                        <input type="text" onChange={usernameChange} placeholder="Email address or Phone Number" class="form-control" />
                                        <br />
                                        <input type="password" onChange={passwordChange} placeholder="Password" class="form-control" />
                                    </div>
                                    <div>
                                        <Button variant="primary" size="lg" block onClick={() => setModalShow(true)}>
                                            Log In
                                        </Button>
                                        <br />
                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </form>
                                <a href="Password.html" style={{ fontSize: "small" }}>Forgotten Password?</a>
                                <hr />
                                <div>
                                    <Button variant="success" size="lg">Create New Account</Button>{' '}
                                </div>
                                <br />
                            </Paper>
                        </Grid><br />
                        <div id="form-group" style={{ fontSize: "smaller", marginLeft: "10%" }}>
                            <a href="Create.html" style={{ color: "black" }}><b>Create a Page</b></a> for a celebrity,band or business.
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )

}
