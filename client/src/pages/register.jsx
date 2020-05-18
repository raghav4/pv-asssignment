import React, { useState } from 'react';
import { MDBInput } from 'mdbreact';
import axios from 'axios';
import { Toast } from '../components';
// import http from '../services/httpService';
import { apiUrl } from '../config.json';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState({ name: '', email: '', phone: '', address: '' });

  const handleChange = (e) => {};

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${apiUrl}/user`, { name, email, phone, address });
      localStorage.setItem('userId', data._id);
      Toast('Success', 'Successfully added details', 'success');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        Toast('Error', ex.response.data, 'error');
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-6 mt-5 jumbotron ml-3 mr-3" style={{ borderRadius: '2%' }}>
          <h3 className="h3-responsive text-center">Register your details</h3>
          <form className="needs-validation" onSubmit={handleUpdate} noValidate>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <MDBInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id={name}
                    name={name}
                    label="Name"
                    className={error.name !== '' ? 'form-control is-invalid' : ''}
                    icon="user"
                    outline
                    required
                  >
                    <div className="invalid-feedback ml-3 pl-3">{error.name}</div>
                  </MDBInput>
                  <MDBInput
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    id={phone}
                    name={phone}
                    label="Phone Number"
                    className={error.phone ? 'form-control is-invalid' : ''}
                    icon="phone-alt"
                    outline
                    required
                  >
                    <div className="invalid-feedback ml-3 pl-3">ik</div>
                  </MDBInput>

                  <MDBInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    id={email}
                    name={email}
                    label="Email"
                    className={error.email ? 'form-control is-invalid' : ''}
                    icon="envelope-open"
                    outline
                    required
                  >
                    <div className="invalid-feedback ml-3 pl-3">ik</div>
                  </MDBInput>

                  <MDBInput
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    id={address}
                    name={address}
                    label="Address"
                    className={error.address ? 'form-control is-invalid' : ''}
                    icon="address-card"
                    outline
                    required
                  >
                    <div className="invalid-feedback ml-3 pl-3">ik</div>
                  </MDBInput>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
