import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Styles from "../../assets/css/home.module.css";
import Logo from "../../assets/images/Logo-icon.png";
import Bicycle from "../../assets/images/Cycle-Vehicle.png";
import Scooter from "../../assets/images/Scooter-Vehicle.png";
import Car from "../../assets/images/Car-Vehicle.png";
import Partner from "../../assets/images/Partner-Vehicle.png";
import Van from "../../assets/images/Van-Vehicle.png";
import Pickup from "../../assets/images/Pickup-Vehicle.png";
import Truck from "../../assets/images/Truck-Vehicle.png";
import Package from "../../assets/images/Package.png";
import { Form } from "react-bootstrap";
import { useSelector } from 'react-redux';
function AddVehicle() {
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const { isAuthenticated, role } = useSelector((state) =>state.auth );
    const baseUrl=role?.toLowerCase().replace(/_/g, '');

    const vehicles = [
      {
        image: Bicycle,
        name: "Bicycle",
        capacity: "5 liters",
        className: "DeliveryBicycle",
      },
      {
        image: Scooter,
        name: "Scooter",
        capacity: "10 liters",
        className: "DeliveryScooter",
      },
      {
        image: Car,
        name: "Car",
        capacity: "10 liters",
        className: "DeliveryCar",
      },
      {
        image: Partner,
        name: "Partner",
        capacity: "10 liters",
        className: "DeliveryPartner",
      },
      {
        image: Van,
        name: "Van",
        capacity: "10 liters",
        className: "DeliveryVan",
      },
      {
        image: Pickup,
        name: "Pickup",
        capacity: "10 liters",
        className: "DeliveryPickup",
      },
      {
        image: Truck,
        name: "Truck",
        capacity: "10 liters",
        className: "DeliveryTruck",
      },
      {
        image: Package,
        name: "Package",
        capacity: "10 liters",
        className: "DeliveryPackage",
      },
    ];
  
    const handleVehicleClick = (vehicleName) => {
      setSelectedVehicle(vehicleName);
    };
  
    return (
      <>
        <section className={Styles.profileChooseSec}>
          <div className="container">
            <div>
              <Link className={Styles.logoCard} to={!isAuthenticated && !role ? '/' : `/${baseUrl}/add-vehicle`}>
                <img className={Styles.logo} src={Logo} alt="logo" />
                <h2 className={Styles.companyName}>Rapidmate</h2>
              </Link>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className={Styles.pickupSignupFormMainCard}>
                  <div className={Styles.chooseMainCard}>
                    <div className={Styles.chooseProfileCard}>
                      <h2 className={Styles.chooseProfileHeading}>Add vehicle</h2>
                      <p className={Styles.chooseProfileSubheading}>
                        Please add vehicle you will use for delivery
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className={Styles.deliveryboyVehicleSelectText}>
                      Select vehicle type
                    </p>
                    <div className={Styles.deliveryboyAddVehicleAllImagesCard}>
                      {vehicles.map((vehicle, index) => (
                        <div
                          key={index}
                          className={`${Styles.deliveryboyAddVehicleVehicleCard} ${
                            selectedVehicle === vehicle.name ?  Styles.selected : ""
                          }`}
                          onClick={() => handleVehicleClick(vehicle.name)}
                        >
                          <div className={Styles.deliveryboyaddVehicleVehicleImageCard}>
                            <img
                              className={Styles[`${vehicle.className}`]}
                              src={vehicle.image}
                              alt={vehicle.name}
                            />
                          </div>
                          <p className={Styles.deliveryboyVehicleName}>
                            {vehicle.name}
                          </p>
                        </div>
                      ))}
                    </div>
  
                    <div>
                      <p className={Styles.deliveryboyVehicleFormDetailText}>
                        Fill vehicle details
                      </p>
                      <Form>
                        <div className="row">
                          <div className="col-md-6">
                            <Form.Group
                              className="mb-2"
                              controlId="formPlaintext1"
                            >
                              <Form.Label className={Styles.deliveryboyLabelVehicleInfo}>
                                Vehicle No.
                              </Form.Label>
                              <Form.Control
                                className={Styles.deliveryboyVehicleInfo}
                                type="text"
                                placeholder="Type here.."
                              />
                            </Form.Group>
                          </div>
  
                          <div className="col-md-6">
                            <Form.Group
                              className="mb-2"
                              controlId="formPlaintext2"
                            >
                              <Form.Label className={Styles.deliveryboyLabelVehicleInfo}>
                                Vehicle model
                              </Form.Label>
                              <Form.Control
                                className={Styles.deliveryboyVehicleInfo}
                                type="text"
                                placeholder="Type here.."
                              />
                            </Form.Group>
                          </div>
  
                          <div className="col-md-6">
                            <Form.Group
                              className="mb-2"
                              controlId="formPlaintext3"
                            >
                              <Form.Label className={Styles.deliveryboyLabelVehicleInfo}>
                                Vehicle make
                              </Form.Label>
                              <Form.Control
                                className={Styles.deliveryboyVehicleInfo}
                                type="text"
                                placeholder="Type here.."
                              />
                            </Form.Group>
                          </div>
  
                          <div className="col-md-6">
                            <Form.Group
                              className="mb-2"
                              controlId="formPlaintext4"
                            >
                              <Form.Label className={Styles.deliveryboyLabelVehicleInfo}>
                                Vehicle variant
                              </Form.Label>
                              <Form.Control
                                className={Styles.deliveryboyVehicleInfo}
                                type="text"
                                placeholder="Type here.."
                              />
                            </Form.Group>
                          </div>
  
                          <p className={Styles.deliveryboyVehicleFormDetailText}>
                            Upload documents
                          </p>
                          <div className="col-md-6">
                            <div className="mb-2">
                              <Form.Label className={Styles.deliveryboyLabelVehicleInfo}>
                                Vehicle variant
                              </Form.Label>
                              <div className={Styles.deliveryaddVehicleVehicleUploadCard}>
                                <input
                                  type="file"
                                  accept=".png, .jpg, .pdf, .svg,"
                                />
                              </div>
                            </div>
                          </div>
  
                          <div className="col-md-6">
                            <div className="mb-2">
                              <Form.Label className={Styles.deliveryboyLabelVehicleInfo}>
                                Driving license
                              </Form.Label>
                              <div className={Styles.deliveryaddVehicleVehicleUploadCard}>
                                <input
                                  type="file"
                                  accept=".png, .jpg, .pdf, .svg,"
                                />
                              </div>
                            </div>
                          </div>
  
                          <div className="col-md-6">
                            <div className="mb-2">
                              <Form.Label className={Styles.deliveryboyLabelVehicleInfo}>
                                Vehicle insurance
                              </Form.Label>
                              <div className={Styles.deliveryaddVehicleVehicleUploadCard}>
                                <input
                                  type="file"
                                  accept=".png, .jpg, .pdf, .svg,"
                                />
                              </div>
                            </div>
                          </div>
  
                          <div className="col-md-6">
                            <div className="mb-2">
                              <Form.Label className={Styles.deliveryboyLabelVehicleInfo}>
                                Passport
                              </Form.Label>
                              <div className={Styles.deliveryaddVehicleVehicleUploadCard}>
                                <input
                                  type="file"
                                  accept=".png, .jpg, .pdf, .svg,"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                    </div>
  
                    <div>
                      <Link
                        to="/deliveryboy/add-work-type"
                        className={Styles.pickupSignupContinueBtn}
                        type="button"
                      >
                        Continue
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default AddVehicle
