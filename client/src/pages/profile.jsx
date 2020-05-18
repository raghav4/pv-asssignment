/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config.json';
import { Toast } from '../components';

const Profile = () => {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  const fetchUserProfile = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/user/${userId}`);
      setName(data.name);
      setPhone(data.phone);
      setEmail(data.email);
      setAddress(data.address);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        Toast('Error', 'Invalid User Id', 'error');
      }
    }
  };

  const renderData = () => {
    if (userId !== null) {
      fetchUserProfile();
      return (
        <div className="jumbotron justify-content-center text-center mx-5 my-5">
          <h3 className="h3-responsive">Your Details</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Name </b> : {Name}
            </li>
            <li className="list-group-item">
              <b>Phone </b> : {Phone}
            </li>
            <li className="list-group-item">
              <b>Email </b> : {Email}
            </li>
            <li className="list-group-item">
              <b>Address </b> : {Address}
            </li>
          </ul>
        </div>
      );
    }
    return (
      <h2 className="h2-responsive text-center mx-5 my-5">
        Please Fill in your details first in order to view the profile
      </h2>
    );
  };

  return <>{renderData()}</>;
};

export default Profile;
