import React, { Component } from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux';
import { userDelete, userEdit } from './Redux/Action';
import { withRouter } from './wapper';



class Tabledata extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.tableData, ",,,,,,,,,,,,,,,,,,,..........tableData")
        this.state = {
            userdata: [],
        }
    }
    displayhobbiedata = (recode, data) => {
        if (data.hobbiedata.length > 0) {
            return data.hobbiedata.toString()
        }

    }

    // componentDidMount() {
    //     const tableData = JSON.parse(localStorage.getItem("dataKey"));
    //     this.setState({
    //         userdata: tableData,
    //     })
    // }

    columns = [
        {
            title: 'firstname',
            dataIndex: 'firstname',
        },
        {
            title: 'lastname',
            dataIndex: 'lastname',
        },
        {
            title: 'country',
            dataIndex: 'country',
        },
        {
            title: 'gender',
            dataIndex: 'gender',
        },
        {
            title: 'hobbies',
            dataIndex: 'hobbiedata',
            render: (recode, data, i) => this.displayhobbiedata(recode, data),
        },
        {
            title: 'Action',
            dataIndex: "action",
            render: (recode, data, i) => {
                return (<>
                    <button type="button" onClick={() => this.handleEdit(i)} className="btn btn-success mx-3">Edit</button>
                    <button type="button" onClick={() => this.handleDelete(i)} className="btn btn-danger">Delete</button>
                </>)
            }
        }

    ];

    handleDelete = (i) => {
        this.props.userDelete(i)
        this.props.navigate(`/ `)
    }

    handleEdit = (i) => {
        this.props.userEdit(i)
        this.props.navigate(`/edit/${i}`)
    }

    render() {
        return (
            <>
                <div className='mt-5'>
                    <h1 className='NPM'> Ragister Form Table</h1>
                    <Table className="mt-5" columns={this.columns} dataSource={this.props.detail} />
                </div>
            </>
        )
    }
}

const mapStateToPrpos = (state) => {

    return {

        detail: state.data,
        editData: state.editData
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        userDelete: (data) => dispatch(userDelete(data)),
        userEdit: (data) => dispatch(userEdit(data))
    }

}

export default withRouter(connect(mapStateToPrpos, mapDispatchToProps)(Tabledata))