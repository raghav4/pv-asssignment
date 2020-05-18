import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios';
import { Toast } from '../components';
import { apiUrl } from '../config.json';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [Loading, setLoading] = useState(false);

  const isDisabled = () => {
    return name === '' && email === '' && phone === '';
  };

  const handleUpdate = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(`${apiUrl}/user`, {
        name,
        email,
        phone,
        address,
      });
      localStorage.setItem('userId', data._id);
      Toast('Success', 'Successfully added details', 'success');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        Toast('Error', ex.response.data, 'error');
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="col-md-6 mt-5 jumbotron ml-3 mr-3"
          style={{ borderRadius: '2%' }}
        >
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
                    icon="user"
                    outline
                    required
                  />
                  <MDBInput
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    id={phone}
                    name={phone}
                    label="Phone Number"
                    icon="phone-alt"
                    outline
                    required
                  />

                  <MDBInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    id={email}
                    name={email}
                    label="Email"
                    icon="envelope-open"
                    outline
                    required
                  />

                  <MDBInput
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    id={address}
                    name={address}
                    label="Address"
                    icon="address-card"
                    outline
                    required
                  />

                  <div className="text-center">
                    <MDBBtn
                      color="unique"
                      type="submit"
                      disabled={isDisabled()}
                    >
                      {Loading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        'Register'
                      )}
                    </MDBBtn>
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
