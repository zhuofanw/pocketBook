import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Records extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.title}</td>
                <td>{this.props.amount}</td>
            </tr>
        );
    }
}

Records.propTypes = {
    id: PropTypes.number,
    date:PropTypes.string,
    title:PropTypes.string,
    amount:PropTypes.number
}
