import axios from 'axios';
import React, { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import { Link,useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate();

    const [user, setUser] = useState({
        userFirstName: "",
        userMiddleName: "",
        userLastName: "",
        userGender:""
    });

    const { userFirstName, userMiddleName, userLastName, userGender } = user

    const onInputChange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='fw-semibold text-primary text-center'> Register User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='form-floating mb-3'>
                        <input type={"text"}
                            className="form-control"
                            placeholder='Enter your first name'
                            name='userFirstName'
                            value={userFirstName}
                            onChange={(e) => onInputChange(e)}
                        />
                        <label htmlFor='userFirstName' className='form-label'>
                            First Name
                        </label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type={"text"}
                            className="form-control"
                            placeholder='Enter your middle name'
                            name='userMiddleName'
                            value={userMiddleName}
                            onChange={(e) => onInputChange(e)}
                        />
                        <label htmlFor='userMiddleName' className='form-label'>
                            Middle Name
                        </label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type={"text"}
                            className="form-control"
                            placeholder='Enter your last name'
                            name='userLastName'
                            value={userLastName}
                            onChange={(e) => onInputChange(e)}
                        />
                        <label htmlFor='userLastName' className='form-label'>
                            Last Name
                        </label>
                    </div>
                    <div className="row g-2 mb-3">
                        <div className="form-floating  col-md-6">
                            <select className="form-select" name="userGender" value={userGender} onChange={(e)=>onInputChange(e)}>
                                <option defaultValue>Select Gender</option>
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                                <option value="3">Other</option>
                            </select>
                            <label htmlFor="userGender">Gender</label>
                        </div>
                    </div>
                    <button name="submit" type="submit" className='btn btn-outline-primary mx-2'>Submit</button>
                    <Link name="cancel"  to="/" className='btn btn-outline-secondary mx-2'>Cancel</Link>
                    </form>
                </div>

            </div>
        </div>
    )
}
