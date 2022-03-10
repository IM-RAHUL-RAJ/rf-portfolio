import React from 'react'

 const Contact = () => {
  return (
    <>
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="contact-leftside col-12 col-lg-5">
                        
                            <h1 className="main-heading fw-bold">Connect with us<br/>Dev Team.</h1>
                            <p className="main-hero-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?
                            </p>
                            <figure>
                                <img 
                                 className="img-fluid" src="./Images/Contactus.jpg" alt=" " />
                            </figure>
                        </div>
                            {/* //rigght side */}

                            <div className="contact-rightside col-12 col-lg-7">

                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                        //   value={userData.firstName}
                        //   onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                        //   value={userData.lastName}
                        //   onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                        //   value={userData.phone}
                        //   onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                        //   value={userData.email}
                        //   onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                        //   value={userData.address}
                        //   onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                        //   value={userData.message}
                        //   onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100">
                    {/* //   onClick={submitData}>
                    //   Submit */}
                    </button>
                  </form>
                </div>

                    </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact;
