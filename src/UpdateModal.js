import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Update.css'


export default function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update your Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id="container" style={{ width: "100%" }}>
                    <Grid>
                        <Grid item xs={12}>
                            <Paper>
                                <h2>Add Your New Business Info</h2><hr />
                                <form style={{ marginLeft: "4%", marginRight: "4%" }}>
                                    <label><b>Company Name*</b></label><br />
                                    <input type="text" style={{ width: "100%" }} /><br />
                                    <label><b>Sector*</b></label><br />
                                    <input type="text" style={{ width: "100%" }} /><br />

                                    <label><b>Start Date</b></label><br />
                                    <input type="date"></input><br />
                                    <label><b>Country</b></label><br />
                                    <select style={{ backgroundColor: "rgb(240, 240, 240)", width: "100%", borderRadius: "2px", }} defaultValue="Select Account">
                                        <option defaultValue>Select a Country</option>
                                        <option value="">Africa</option>
                                        <option value="">Afghanistan</option>
                                        <option value="">India</option>
                                        <option value="">Europe</option>
                                    </select><br />
                                    <label><b>State/Province</b></label><br />
                                    <select style={{ backgroundColor: "rgb(240, 240, 240)", width: "100%", borderRadius: "2px", }} defaultValue="Select Account">
                                        <option defaultValue>Select a State</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select><br />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label><b>City</b></label><br />
                                            <input type="text" style={{ width: "100%" }} /><br />
                                        </div>
                                        <div class="col-md-6">
                                            <label><b>Postcode</b></label><br />
                                            <input type="text" style={{ width: "100%" }} /><br />
                                        </div>
                                    </div><br />

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label><b>Email</b></label><br />
                                            <input type="email" style={{ width: "100%" }} placeholder="user@example.com" />
                                        </div>
                                        <div class="col-md-6">
                                            <label><b>Mobile Number*</b></label><br />
                                            <input type="number" style={{ width: "100%" }} placeholder="+974" />
                                        </div>
                                    </div><br /><br />
                                    <input type="submit" value="Update Info" /><br /><br />
                                </form>

                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div className="Footer">
                    <Button variant="danger" onClick={props.onHide}>Close</Button>&nbsp;&nbsp;&nbsp;
                    <Button onClick={props.onHide}>Save Changes</Button>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                
            </Modal.Footer> */}
        </Modal>
    );
}