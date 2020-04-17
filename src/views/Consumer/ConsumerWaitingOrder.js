import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Waiting = props => {
    const now = 60;

    return (
        <>
            <Link to='/'><h1>Thanks for give me your money $$</h1></Link>
            <div className="row">
            <div className="col-md-6">
            <ProgressBar striped variant="info" now={now} label={`${now}%`} />
            </div>
            </div>
        </>

    )
}
export default Waiting