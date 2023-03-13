import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function
    () {

    const { id } = useParams();

    const [user, setUser] = useState({
        userFirstName: "",
        userMiddleName: "",
        userLastName: "",
        userGender: ""
    });
    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    };
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='fw-semibold text-primary text-center'> User Details</h2>
                    <div className='card'>
                        <div className='card-header'>Details of user id :
                        <b>{user.id}</b>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>First : </b>
                                    {user.userFirstName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Middle Name : </b>
                                    {user.userMiddleName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Last Name : </b>
                                    {user.userLastName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Gender : </b>
                                    {user.userGender}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
