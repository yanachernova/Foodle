import React, { useContext } from 'react'
import { Context } from '../../store/appContext'
import { Link } from 'react-router-dom'

const ConsumerForgetPassword = props => {
    const { actions, store } = useContext(Context)
    return (
        <div className='container'>
            <div className="row pt-3">
                <div className="col-md-9">
                    <Link to='/'><h1>FOODLE</h1></Link>
                </div>
                    {
                        store.isAuthenticatedBusiness === false ?
                            (
                                <div className="col-md-3 d-flex justify-content-end">
                                    <button className='btn btn-primary form-control mr-2' data-toggle="modal" data-target="#modal_login">login</button>
                                    <button className='btn btn-primary form-control' data-toggle="modal" data-target="#modal_register">register</button>
                                </div>
                            )
                            :
                            (
                                <></>
                            )
                    }                    
            </div>                
            <div className="row pt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="text-muted">Restart yout password</h6>
                        </div>
                        <div className="card-body">
                            <label htmlFor="passwordforgot" className="form-label text-muted">New password:</label>
                            <input type="password" id='passwordforgot' name="password" onChange={e => actions.handleChange(e)} className="form-control"></input>
                        </div>
                        <div className="card-footer">
                            <button className='btn btn-primary form-control' onClick={()=>actions.putChangePassword()}>Restart Password</button>   
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default ConsumerForgetPassword