import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
  faBuilding,
} from "@fortawesome/free-regular-svg-icons";
import Styles from "../../assets/css/home.module.css";
import Logo from "../../assets/images/Logo-icon.png";
import Flag from "../../assets/images/numberFlag.png";
import Banner from "../../assets/images/Deliveryboy-Signup-Banner.png";
import { Link } from "react-router-dom";
import localforage from "localforage";
const DeliveryboySignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const checkboxTypes = ["checkbox"];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await localforage.getItem("roleName");
        //   setSelectedOption(value);
        console.log("Data retrieved successfully:", value);
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };

    retrieveData();
  }, []);

  return (
    <>
      <section className={Styles.profileChooseSec}>
        <div className="container">
          <div>
            <Link className={Styles.logoCard} to="/">
              <img className={Styles.logo} src={Logo} alt="logo" />
              <h2 className={Styles.companyName}>Rapidmate</h2>
            </Link>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className={Styles.pickupSignupFormMainCard}>
                <div className={Styles.chooseMainCard}>
                  <div className={Styles.chooseProfileCard}>
                    <h2 className={Styles.chooseProfileHeading}>
                      Delivery Boy signup
                    </h2>
                    <p className={Styles.chooseProfileSubheading}>
                      Let’s create your profile so you can have complete
                      experience of the app.
                    </p>
                  </div>
                </div>
                <div>
                  <Form>
                    <div className="row">
                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext1">
                          <div className={Styles.pickupSignupContainer}>
                            <FontAwesomeIcon
                              className={Styles.pickupSignupFieldsIcons}
                              icon={faUser}
                            />
                            <Form.Control
                              className={Styles.signupUserName}
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext2">
                          <div className={Styles.pickupSignupContainer}>
                            <FontAwesomeIcon
                              className={Styles.pickupSignupFieldsIcons}
                              icon={faUser}
                            />
                            <Form.Control
                              className={Styles.signupUserName}
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-12">
                        <Form.Group className="mb-3" controlId="formPlaintext3">
                          <div className={Styles.pickupSignupContainer}>
                            <FontAwesomeIcon
                              className={Styles.pickupSignupFieldsIcons}
                              icon={faEnvelope}
                            />
                            <Form.Control
                              className={Styles.signupUserName}
                              type="text"
                              placeholder="Email"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext4">
                          <div className={Styles.pickupSignupContainer}>
                            <FontAwesomeIcon
                              className={Styles.pickupSignupFieldsIcons}
                              icon={faLock}
                            />
                            <Form.Control
                              className={`password-field ${Styles.signupUserName}`}
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEye : faEyeSlash}
                              onClick={togglePasswordVisibility}
                              className={Styles.signupPasswordEyeIcon}
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext5">
                          <div className={Styles.pickupSignupContainer}>
                            <FontAwesomeIcon
                              className={Styles.pickupSignupFieldsIcons}
                              icon={faLock}
                            />
                            <Form.Control
                              className={`password-field ${Styles.signupUserName}`}
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm password"
                            />
                            <FontAwesomeIcon
                              icon={showConfirmPassword ? faEye : faEyeSlash}
                              onClick={toggleConfirmPasswordVisibility}
                              className={Styles.signupPasswordEyeIcon}
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3">
                          <div className={Styles.pickupSignupContainer}>
                            <Form.Select
                              className={Styles.selectNumberByCountry}
                              aria-label="Default select example"
                            >
                              <option value="1">+33</option>
                              <option value="2">+91</option>
                              <option value="3">+11</option>
                            </Form.Select>
                            <Form.Control
                              className={`password-field ${Styles.signupUserName}`}
                              type="text"
                              placeholder="0 00 00 00 00"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext">
                          <Form.Select
                            className={Styles.pickupSingupCountrySelect}
                            aria-label="Default select example"
                          >
                            <option>Country</option>
                            <option value="1">France</option>
                            <option value="2">India</option>
                            <option value="3">Nepal</option>
                          </Form.Select>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext7">
                          <Form.Select
                            className={Styles.pickupSingupCountrySelect}
                            aria-label="Default select example"
                          >
                            <option>Ain</option>
                            <option value="1">France</option>
                            <option value="2">India</option>
                            <option value="3">Nepal</option>
                          </Form.Select>
                        </Form.Group>
                      </div>

                      <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formPlaintext8">
                          <Form.Select
                            className={Styles.pickupSingupCountrySelect}
                            aria-label="Default select example"
                          >
                            <option>ambérieu-e...</option>
                            <option value="1">France</option>
                            <option value="2">India</option>
                            <option value="3">Nepal</option>
                          </Form.Select>
                        </Form.Group>
                      </div>

                      <div className="col-md-12">
                        <Form.Group className="mb-3" controlId="formPlaintext9">
                          <div className={Styles.pickupSignupContainer}>
                            <FontAwesomeIcon
                              className={Styles.pickupSignupFieldsIcons}
                              icon={faLocationDot}
                            />
                            <Form.Control
                              className={Styles.signupUserName}
                              type="text"
                              placeholder="Siret"
                            />
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-md-12">
                        {checkboxTypes.map((type) => (
                          <div
                            key={`default-${type}`}
                            className={`mb-3 ${Styles.deliveryBoySignupCheckboxCard}`}
                          >
                            <Form.Check
                              type={type}
                              id={`default-${type}`}
                              label={null}
                              className={Styles.DeliveryboySignupCustomcheckbox}
                            />
                            <p className={Styles.checkText}>
                              We collect this data for the purposes of
                              processing your application to become a courier.
                              By clicking this box, you acknowledge that you
                              have read and understood the{" "}
                              <Link
                                className={Styles.deliverySignupPolicyCheck}
                                to="#"
                              >
                                Privacy Policy
                              </Link>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Form>

                  <div>
                    <Link
                      to="/deliveryboy-add-vehicle"
                      className={Styles.pickupSignupContinueBtn}
                      type="button"
                    >
                      Continue
                    </Link>
                    <p className={Styles.pickupSignupAcLoginText}>
                      Already have an account?{" "}
                      <Link to="/login" className={Styles.loginTextSignup}>
                        Login
                      </Link>
                    </p>
                    <p className={Styles.pickupSignupAcLoginText}>
                      By signing up you agree to{" "}
                      <Link className={Styles.loginTextSignup} to="#">
                        Privacy policy
                      </Link>{" "}
                      &{" "}
                      <Link className={Styles.loginTextSignup} to="#">
                        Terms
                      </Link>{" "}
                      of RapidMate{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={Styles.profileChooseBannerCard}>
                <img
                  className={Styles.deliveryboySignupbanner}
                  src={Banner}
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliveryboySignup;
