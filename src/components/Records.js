import React, { Component } from 'react';
import Record from './Record'

class Records extends Component {
    constructor(){
        super();
        this.state = {
            records: [
                {"id": 1, "date": "2018-01-09", "title":"收入", "amount": 20},
                {"id": 2, "date": "2018-01-10", "title":"支出", "amount": 23},
                {"id": 3, "date": "2018-01-11", "title":"支出", "amount": 25},
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Records</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.records.map((record) => <Record record = {record}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Records;
