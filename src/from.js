import './App.css';
import React, { Component } from 'react'
import { Radio, Checkbox, Col, Row } from 'antd';
import { connect } from 'react-redux';
import { userDetails } from "./Redux/Action"
import { withRouter } from './wapper';

class From
    extends Component {
    constructor(props) {
        super(props)
        // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@>>>>>>>>>>>>>>",this.props.params.id);
        this.state = {
            error: {},
            userdata: [],
            index: '',
            useDetails: {
                firstname: "",
                lastname: "",
                country: '',
                gender: '',
                hobbiedata: [],
            }
        }
    }


    componentDidMount() {
        const pathName = window.location.pathname
        const data = pathName.split('/')
        const id = data[data.length - 1]
        // console.log("tabledata$$$$$$$$$$$$$$$$$$$$$$$$",this.props.tableData);
        // console.log("tabledata$$$$$$$$$$$$$$$$$$$$$$$$",id);
        if (id && this.props.tableData) {
            this.setState({
                useDetails: this.props.tableData[id]
            })
        }
        this.setState({
            userdata: this.props.tableData,
        })
    }

    validation = (name, value) => {
        switch (name) {
            case "firstname":
                if (!value) {
                    return "*please Enter Your Name";
                } else {
                    return ''
                }
            case "lastname":
                if (!value) {
                    return "*please Enter Your name";
                } else {
                    return ''
                }
            case "country":
                if (!value) {
                    return "*please Enter Your Country"
                } else {
                    return ''
                }
            case "gender":
                if (!value) {
                    return "*please Enter Your Gender"
                } else {
                    return ''
                }
            default:
                return ""
        }
    }

    handleChange = (e) => {
        const { hobbiedata } = this.state.useDetails
        if (e.target.checked && e.target.name !== "gender") {
            hobbiedata.push(e.target.name);
        }
        this.setState({
            useDetails: { ...this.state.useDetails, [e.target.name]: e.target.value, key: new Date().getTime() }
        })
    }

    handlesubmit = () => {
        let error = {}
        const displayObject = this.state.useDetails
        Object.keys(displayObject).forEach((key) => {
            let eror = this.validation(key, displayObject[key]);
            if (eror.length > 0) {
                error[key] = eror;
            }
        });
        if (Object.keys(error).length > 0) {
            this.setState({
                error: error
            })
            return;
        } else (
            this.setState({
                error: {}
            })
        )

        let newdata = this.props.tableData;
        const id = this.props.params.id
        if (id) {
            newdata[id] = this.state.useDetails
            this.setState({
                userdata: [...newdata],
                id: "",
            })
        }
        else {
            this.setState({
                userdata: [...this.state.userdata, { ...this.state.useDetails }]
            },
                () => {
                    this.props.usersubmit(this.state.userdata)
                })
        }
        this.setState({
            useDetails: {
                firstname: '',
                lastname: '',
                country: '',
                gender: '',
                hobbiedata: [],
            }
        })

    }
    render() {
        console.log(this.state.userdata, "<<<<<<<<<<<<<<<<???????????userdata");
        return (
            <>
                <h1 className='abc'>Register
                    Form</h1>
                <div>
                    <div className="container">
                        <h4>First Name </h4>
                        <span className='red'> {this.state.error.firstname}</span>
                        <input type="text" name="firstname" onChange={(e) => this.handleChange(e)} value={this.state.useDetails.firstname} placeholder="Your name.." />
                        <h4>Last Name</h4>
                        <span className='red'> {this.state.error.lastname}</span>
                        <input type="text" name="lastname" onChange={(e) => this.handleChange(e)} value={this.state.useDetails.lastname} placeholder="Your last name.." />
                        <h4>Country</h4>
                        <span className='red'> {this.state.error.country}</span>
                        <select name="country" onChange={(e) => this.handleChange(e)} value={this.state.useDetails.country} >
                            <option> Your City</option>
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <h4>Gender</h4><br />

                        <Radio.Group name='gender' size="large" onChange={(e) => this.handleChange(e)} value={this.state.useDetails.gender}>
                            <Radio.Button value="Male">Male</Radio.Button>
                            <Radio.Button value="FeMale">FeMale</Radio.Button>
                            <Radio.Button value="Other">Other</Radio.Button>
                        </Radio.Group>
                        <span className='red'> {this.state.error.gender}</span>

                        <div className='mt-5'>
                            <h4>Hobbies</h4>
                            <div className='mt-4'>
                                <Row>
                                    <Col span={4}>
                                        <Checkbox onChange={(e) => this.handleChange(e)} checked={this.state.useDetails.hobbiedata.includes("Cricket")} name="Cricket">Cricket</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox onChange={(e) => this.handleChange(e)} checked={this.state.useDetails.hobbiedata.includes("Ball")} name="Ball">Ball</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox onChange={(e) => this.handleChange(e)} checked={this.state.useDetails.hobbiedata.includes("Carom")} name="Carom">Carom</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox onChange={(e) => this.handleChange(e)} checked={this.state.useDetails.hobbiedata.includes("Rani")} name="Rani" >Rani</Checkbox>
                                    </Col>
                                    <Col span={4}>
                                        <Checkbox onChange={(e) => this.handleChange(e)} checked={this.state.useDetails.hobbiedata.includes("Soni")} name="Soni">Soni</Checkbox>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        {/* <input className='mt-5' type="submit" onClick={() => this.handlesubmit()} value="Submit" /> */}
                        <button className="w3-button  mt- 5 w3-black w3-section w3-left" type="submit" onClick={() => this.handlesubmit()} value="Submit" style={{ width: "200" }}>SUBMIT</button>
                    </div>

                </div>
                {/* <Table columns={this.columns} dataSource={this.state.userdata} /> */}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        usersubmit: (data) => dispatch(userDetails(data))
    }
}
const mapStateToPrpos = (state) => {
    return {
        tableData: state.data,
    }
}

export default withRouter(connect(mapStateToPrpos, mapDispatchToProps)(From));