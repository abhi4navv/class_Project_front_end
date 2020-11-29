

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import { observer } from 'mobx-react';



import './styles/main.css'
import loaderImg from "../assets/image/loader2.gif";




const Analytics = observer(class Analytics extends React.Component {
    constructor(props) {
        super(props);
        this.conv_ins_bin = this.conv_ins_bin.bind(this)
        this.conv_bin_ins = this.conv_bin_ins.bind(this)
        this.state = {
            url: 'https://converterapi.herokuapp.com/',
            instruction: '',
            binarydata: '',
            type: "",
            values: "",
            values_type: "",
            load_image: false,
        }
    }
    convert_data(codes, types) {
        var url = this.state.url + '?initval=' + codes + '&type=' + types
        fetch(url)

            .then(res => res.json())
            .then(
                (result) => {
                    if (Object.keys(result).length > 0 && result.constructor === Object) {
                        if (Object.keys(result['result']).length > 0 && Object.keys(result['type']).length > 0 && Object.keys(result['value']).length > 0) {
                            if (result['result'] === 'success' && result['type'] !== "" && result['value'] !== "") {
                                this.setState({
                                    load_image: false,
                                    type: result['type'],
                                    values: result['value'],
                                    values_type: 'Instruction Type:- ' + result['type']
                                });
                            }
                            else {
                                this.setState({
                                    load_image: false,
                                    type: "",
                                    values: 'Invalid Data/Error in getting value'
                                });

                            }



                        }
                        else {
                            this.setState({
                                load_image: false,
                                type: "",
                                values: 'Invalid Data/Error in getting value'
                            });

                        }

                    }
                    else {
                        this.setState({
                            load_image: false,
                            type: "",
                            values: 'Invalid Data/Error in getting value'
                        });

                    }
                },
                (error) => {
                    this.setState({
                        load_image: false,
                        type: "",
                        values: 'Invalid Data/Error in getting value'
                    });

                }

            )
    }
    conv_ins_bin() {
        this.setState({

            type: "",
            values: '',
            load_image: true
        });
        this.convert_data(this.state.binarydata, "binary")

    }
    conv_bin_ins() {
        this.setState({
            type: "",
            values: '',
            load_image: true,
        });
        this.convert_data(this.state.instruction, "mips")

    }
    onchange_ins = (e) => {


        this.setState({ instruction: e.target.value })
    }
    onchange_bin = (e) => {
        this.setState({ binarydata: e.target.value })
    }
    // componentDidMount() {

    /// this.getalldata(true)


    //}
    render() {



        return (

            <Container width="100%" >
                <link rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous" />
                <div>
                    <Row>
                        <Col xs={12} >
                            <h6 style={{ textAlign: "center" }}>Welcome to the MIPS Instruction Converter! This tool lets you convert between most common MIPS instructions and their hexadecimal (and binary) equivalents! Just enter your instruction or hex, select whether you use register names or numbers, and click convert!</h6>

                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '40px', border: "solid 1px" }}>
                        <Col xs={6}>
                            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                                <h3 className="util-text">Binary to Instruction </h3>
                                <p className="util-text">ex: 100011 01000 10000  0000 0000 0000 0100</p>


                                <div className="form-check" style={{ padding: '5px' }}>
                                    <input type="text" autoFocus="autofocus" style={{ width: "95%" }} onChange={this.onchange_bin} value={this.state.binarydata} placeholder="ex: 100011 01000 10000  0000 0000 0000 0100" />
                                </div>
                                <div className="form-check">

                                </div>
                                <button type="submit" className="btn btn-dark" onClick={this.conv_ins_bin} >Convert!</button>
                            </div>
                        </Col>

                        <Col xs={6}>
                            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                                <h3 className="util-text">Instruction to Binary</h3>
                                <p className="util-text">ex: add t1, t2, t3, addi $7, $8, 8 </p>

                                <div className="form-check" style={{ padding: '5px' }}>
                                    <input type="text" autoFocus="autofocus" value={this.state.instruction} onChange={this.onchange_ins} style={{ width: "95%" }} placeholder="ex: add t1, t2, t3" />
                                </div>
                                <div className="form-check">

                                </div>
                                <button type="submit" className="btn btn-dark" onClick={this.conv_bin_ins} >Convert!</button>
                            </div>
                        </Col>
                    </Row>
                    {this.state.load_image === false
                            ?

                    <div>
                        
                            <Row className="shadow-lg p-3 mb-5 bg-white rounded">

                                <Col xs={12} >
                                    <h4 style={{ textAlign: "center" }}>{this.state.values}</h4>


                                </Col>
                                <Col xs={12} >
                                    <h4 style={{ textAlign: "center" }}>{this.state.values_type}</h4>


                                </Col>


                            </Row>
                    </div>
                    : <span><img alt="Loading" src={loaderImg}></img></span>}
                </div>


            </Container>
        );
    }
});



export default Analytics
