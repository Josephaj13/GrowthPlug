import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Facebook from '../facebooklogin';
import FacebokLogin from '../fblogin';
import Sidebar from './Sidebar';
import { Navbar,Nav } from 'react-bootstrap';
import "./listings.css"

function Listings() {

    return (
        <>
            <Sidebar />
            <div className="listings">
                <Router>
                    <Switch>
                        <Route exact path="/facebook-login" component={Facebook}></Route>
                        <Route exact path="/fblogin" component={FacebokLogin}></Route>
                    </Switch>
                </Router>
                <Navbar bg="white" variant="light" style={{width:'150%'}}>
                    <Nav className="ml-auto" style={{paddingRight:'10%'}}>
                    <Button variant="outline-secondary" block ><b>San Jose, CA</b>&nbsp;&nbsp;&nbsp;<span class="iconify" data-icon="bi:caret-down-fill" data-inline="false"></span></Button>{' '}
                    </Nav>
                    
                </Navbar>
                <table>
                    <thead>
                        <tr className="head_style" style={{ backgroundColor: "rgb(239,239,239)" }}>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"><h4>Listings</h4></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>

                        </tr>
                        <tr className="head_style">
                            <th scope="col"></th>
                            <th scope="col">Source</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Listed</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="body_style">
                            <td><span class="iconify" data-icon="ant-design:google-plus-outlined" data-inline="false" style={{ fontSize: 30 }} ></span></td>
                            <td>Google</td>
                            <td>ABC Dental</td>
                            <td>2101 California St</td>
                            <td>111.111.1111</td>
                            <td>3/5</td>
                            <td>Yes</td>
                            <td><span class="iconify" data-icon="fluent:checkmark-12-filled" data-inline="false" style={{ color: "green", fontSize: 30 }}></span></td>
                            <td></td>
                        </tr>
                        <tr className="body_style">
                            <td><span class="iconify" data-icon="mdi-yelp" data-inline="false" style={{ fontSize: 30 }} ></span></td>
                            <td>Yelp</td>
                            <td style={{ color: "red" }}>ABC Dental</td>
                            <td>2101 California St</td>
                            <td style={{ color: "red" }}>111.111.1111</td>
                            <td>3/5</td>
                            <td>No</td>
                            <td><span class="iconify" data-icon="emojione-v1:cross-mark" data-inline="false"></span></td>
                            <td><Button variant="primary" size="sm" block onClick={(e) => {
                                e.preventDefault();
                                window.location.pathname = '/fblogin';
                            }}>
                                Update
                            </Button>
                            </td>
                        </tr>
                        <tr className="body_style">
                            <td ><span class="iconify" data-icon="cib:yahoo" data-inline="false" style={{ fontSize: 30 }} ></span></td>
                            <td >Yahoo</td>
                            <td>ABC Dental</td>
                            <td style={{ color: "red" }}>2101 California St</td>
                            <td>111.111.1111</td>
                            <td>3/5</td>
                            <td>No</td>
                            <td><span class="iconify" data-icon="emojione-v1:cross-mark" data-inline="false"></span></td>
                            <td><Button variant="primary" size="sm" block>
                                Update
                            </Button></td>
                        </tr>
                        <tr className="body_style">
                            <td><span class="iconify" data-icon="cib:foursquare" data-inline="false" style={{ fontSize: 30 }} ></span></td>
                            <td>Foursquare</td>
                            <td>ABC Dental</td>
                            <td>2101 California St</td>
                            <td>111.111.1111</td>
                            <td>3/5</td>
                            <td>No</td>
                            <td><span class="iconify" data-icon="fluent:checkmark-12-filled" data-inline="false" style={{ color: "green", fontSize: 30 }}></span></td>
                            <td></td>
                        </tr>
                        <tr className="body_style">
                            <td><span class="iconify" data-icon="brandico:facebook" data-inline="false" style={{ fontSize: 30 }} ></span></td>
                            <td>Facebook</td>
                            <td>ABC Dental</td>
                            <td>2101 California St</td>
                            <td>111.111.1111</td>
                            <td>3/5</td>
                            <td>No</td>
                            <td><span class="iconify" data-icon="fluent:checkmark-12-filled" data-inline="false" style={{ color: "green", fontSize: 30 }}></span></td>
                            <td><Button variant="primary" size="sm" block onClick={(e) => {
                                e.preventDefault();
                                window.location.pathname = '/facebook-login';
                            }}>
                                Update
                            </Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Listings