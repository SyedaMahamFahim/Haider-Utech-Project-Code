import React, { Component } from 'react';
import axios from 'axios';

// import '../components/Context/GV';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';

import Xslider from '../components/Sliders/Xslider';
import Yslider from '../components/Sliders/Yslider';

// import Iframe from 'react-iframe'

import Canvas from '../components/canva/Canvas';

export class Draw extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userToken: '',
            device: '',
            pattern: '',
            cord: '',
            shift: ''
        }
    }

    componentDidMount() {
        var token = localStorage.getItem("token");
        var d = localStorage.getItem("device");
        this.setState({ userToken: token, device: d });
        console.log("token : " + this.state.userToken);
    }

    handleAxis() {
        console.log("X : " + global.axis0);
        console.log("Y : " + global.axis1);
    }

    handleChange = event => {
        this.setState({ pattern: event.target.value });
    }

    handleItemChange = (e) => {

        if (this.state.userToken == '') {
            console.log("Please login first");
            alert("Please login first");
        }
        else {
            axios.post(`http://165.227.123.50:5000/api/addPattern`, {
                Device: this.state.device,
                cord: this.state.cord,
                shift: this.state.shift
            })
                .then(res => {
                    if (res.status == 200) {
                        console.log("Pattern Saved Successful");
                        alert("Pattern Saved Successful");
                    }
                    else {
                        alert("Pattern Failed");
                    }
                    alert(Xarray.length);
                    alert(Xarray)

                    console.log(res);
                    console.log(res.data);
                })

            global.xcord = [];
            global.ycord = [];
        }


    }

   
    
    


    handleSubmit  (event,a,b)  {
        console.log("this is a and b",a,b);
        this.setState({ cord: "x", shift:0})

        var Xarray = [];
        var Yarray = [];

        global.xcord.forEach(element => {
            // console.log(element)
            Xarray.push(element)
        });

        global.ycord.forEach(element => {
            Yarray.push(element)
        });

        console.log(JSON.stringify(Xarray));

        if (this.state.userToken == '') {
            console.log("Please login first");
            alert("Please login first");
        }
        else {
            axios.put(`http://165.227.123.50:5000/api/addPattern`, {
                Device: this.state.device,
                cord: this.state.cord,
                shift: this.state.shift
            })
                .then(res => {
                    if (res.status == 200) {
                        console.log("Pattern Saved Successful");
                        alert("Pattern Saved Successful");
                    }
                    else {
                        alert("Pattern Failed");
                    }
                
                    console.log(res);
                    console.log(res.data);
                })
        }
    }

    


    render() {

        return (
            <div className="App" style={{ height: '100%' }}>
                <h3><Badge bg="secondary">Draw Pattern</Badge></h3>

                <Card className="col-md-12" style={{ alignItems: 'center', marginTop: '5%' }}>
                    <div className="row" style={{ justifyContent: 'space-between' }}>
                        <Card.Title>Set Axis</Card.Title>
                        <Card className="col-md-5">
                            <label>X-axis</label>
                            <Xslider />
                        </Card>
                        <Card className="col-md-5">
                            <label>Y-axis</label>
                            <Yslider />
                        </Card>
                    </div>
                    <Button style={{ marginTop: '1%', marginBottom: '1%' }} onClick={this.handleAxis}>Set Axis</Button>
                </Card>

                <Card className="col-md-12" style={{ marginTop: '2%', }}>
                    <Canvas />
                </Card>

                <Card className="col-md-12" style={{ marginTop: '2%' }}>
                    <Dropdown style={{ marginTop: '0.5%', marginBottom: '0.5%' }}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Speed
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Slow</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Fast</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>

                <Card className="col-md-12" style={{ marginTop: '2%', }}>
                    <input onChange={this.handleChange} style={{ width: '30%', alignSelf: 'center', marginTop: '1%', marginBottom: '1%' }} placeholder="Name Pattern" />
                </Card>

                <div className="col-md-12" style={{ marginTop: '2%' }}>
                    <Button style={{ marginBottom: '10%' }}

                        onClick={this.handleSubmit("x",8).bind(this)}>Save Pattern</Button>

            
                </div>

            </div>
        )
    }
}

export default Draw;