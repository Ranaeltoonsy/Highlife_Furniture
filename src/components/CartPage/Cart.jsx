import "./Cart.scss";
import { useCart } from "../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faXmark } from "@fortawesome/free-solid-svg-icons";
import EmptyCartImage from "../../../public/Images/Home/Empty_Cart.png";
import "animate.css";
import { useState } from "react";
export default function Cart() {
  const { cartProducts, setCartProducts } = useCart();
  const [selectedAddress, setSelectedAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const removeFromCart = (id) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + quantity) }
          : product
      )
    );
  };

  const total = cartProducts.reduce((sum, product) => {
    const price = product.product_price || 0;
    const quantity = product.quantity || 1;
    return sum + price * quantity;
  }, 0);

  const totalItems = cartProducts.reduce(
    (total, product) => total + (product.quantity || 1),
    0
  );

  const handleAddAddress = (e) => {
    e.preventDefault();

    const newAddress = `${e.target.firstName.value} ${e.target.lastName.value}, ${e.target.building.value}, ${e.target.city.value}`;
    setSelectedAddress(newAddress);
    setModalVisible(false);
  };
  const checkoutData = {
    cartProducts,
    selectedAddress,
    paymentMethod,
    total: total + 50,
    timestamp: new Date().toISOString(),
  };

  const handleCheckout = () => {
    if (!selectedAddress || !paymentMethod) {
      alert("Please select an address and a payment method.");
      return;
    }
    setIsCheckoutComplete(true);
    setShowAlert(true);
    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));

    setTimeout(() => setShowAlert(false), 4000);
    setTimeout(() => {
      setCartProducts([]);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="row gap-2">
        <div className="col-12">
          <h2 className="bg-white shadow-sm border-1 p-3 rounded-3">
            Shopping Cart
          </h2>
        </div>

        {cartProducts && cartProducts.length > 0 ? (
          <>
            {cartProducts.map((el) => (
              <div
                key={el.id}
                className="col-12 d-flex flex-row shadow-sm rounded-3 border-1 bg-white p-3 mb-3"
              >
                <img
                  src={`http://localhost:1337${el.product_image?.url}`}
                  alt={el.product_name || "Product Image"}
                  className="productImage me-3"
                />
                <div className="flex-grow-1">
                  <h5>{el.product_name || "Unnamed Product"}</h5>
                  <p>Price: EGP {el.product_price?.toFixed(2) || "N/A"}</p>
                  <div className="d-flex flex-row gap-2 align-items-center">
                    <FontAwesomeIcon icon={faTruck} />
                    <p className="m-0">
                      Delivery expected between 18 December to 22 December
                    </p>
                  </div>
                  <div className="d-flex flex-row justify-content-between mt-3">
                    <button
                      onClick={() => removeFromCart(el.id)}
                      className="btn btn-link text-danger"
                    >
                      Remove
                    </button>
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => updateQuantity(el.id, -1)}
                        className="btn btn-outline-secondary"
                        disabled={el.quantity === 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{el.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(el.id, 1)}
                        className="btn btn-outline-secondary"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12">
              <h2 className="bg-white p-3">Shipping Address</h2>
              <div className="bg-white p-3 rounded-3 shadow-sm">
                <h3>Address</h3>
                <hr className="w-50" />
                <h6>Deliver to: {selectedAddress || "None selected"}</h6>
                <div className="d-flex flex-row justify-content-between bg-body-tertiary">
                  <button
                    className="btn border-0"
                    onClick={() => setModalVisible(true)}
                  >
                    + Add new Address
                  </button>
                </div>
              </div>

              {modalVisible && (
                <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <div className="modal-content bg-white p-4 rounded-3 shadow">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h2 className="m-0">Address Details</h2>
                      <button
                        className="btn btn-link text-danger"
                        onClick={() => setModalVisible(false)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>
                    <form onSubmit={handleAddAddress}>
                      <div className="mb-3 d-flex gap-2">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control"
                          placeholder="First Name"
                          required
                        />

                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          required
                        />
                      </div>

                      <div className="mb-3 d-flex gap-2">
                        <input
                          type="number"
                          name="building"
                          id="building"
                          className="form-control"
                          placeholder="Building"
                          required
                        />

                        <input
                          type="number"
                          name="floor"
                          id="floor"
                          className="form-control"
                          placeholder="Floor"
                          required
                        />
                        <input
                          type="number"
                          name="apartment"
                          id="apartment"
                          className="form-control"
                          placeholder="Apartment"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <input
                          type="text"
                          name="details"
                          id="details"
                          className="form-control"
                          placeholder="Address Details"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          name="label"
                          id="label"
                          className="form-control"
                          placeholder="Address Label"
                          required
                        />
                      </div>
                      <div className="mb-3 d-flex gap-2">
                        <input
                          type="Phone"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                        />
                        <select
                          name="city"
                          id="city"
                          className="form-select"
                          required
                        >
                          <option value="City">City</option>
                          <option value="Cairo">Cairo</option>
                          <option value="Giza">Giza</option>
                          <option value="Alexandria">Alexandria</option>
                          <option value="Qalyubia">Qalyubia</option>
                        </select>
                      </div>

                      <h6 className="mt-4">Address Type</h6>

                      <div className="mb-3 d-flex gap-2">
                        <input type="radio" name="adtype" id="home" />
                        <label htmlFor="home"> Home </label>
                        <input type="radio" name="adtype" id="work" />
                        <label htmlFor="work"> Work </label>
                      </div>
                      <div className="text-end">
                        <button
                          type="submit"
                          id="submit"
                          className="saveButton btn btn-primary w-25"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div className="col-12">
              <h2 className="bg-white p-3 "> Choose Your Payment Method </h2>
              <select
                className="form-select mb-3 bg-body-tertiary"
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select a payment method</option>
                <option value="National Bank Of Egypt">
                  National Bank Of Egypt
                </option>
                <option value="Debit/Credit Card">Debit/Credit Card</option>
                <option value="Vodafone Wallet">Vodafone Wallet</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>

            <div className="col-12">
              <h2 className="bg-white shadow-sm border-1 p-3 rounded-3">
                Order Summary
              </h2>
              <div className="bg-white p-3 rounded-3 shadow-sm">
                <div className="d-flex flex-row justify-content-between">
                  <p>
                    {" "}
                    Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"}
                    )
                  </p>
                  <p>EGP {total.toFixed(2)}</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <p>Shipping fee</p>
                  <p>EGP 50.00</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <h5>Total</h5>
                  <h5>EGP {(total + 50).toFixed(2)}</h5>
                </div>
              </div>
            </div>

            {showAlert && (
              <div className="alert alert-success" role="alert">
                Checkout Successful
              </div>
            )}

            <div className="col-12 text-center">
              <button
                className="btn btn-primary fs-5"
                style={{ backgroundColor: "#1A3D6D" }}
                type="submit"
                id="liveAlertBtn"
                onClick={handleCheckout}
                disabled={
                  !selectedAddress || !paymentMethod || isCheckoutComplete
                }
              >
                {isCheckoutComplete ? "Checked Out" : "Checkout"}
              </button>
            </div>
          </>
        ) : (
          <div className="col-12 text-center">
            <p className="animate animate__animated animate__heartBeat fs-5">
              Your cart is empty! Start shopping now.
            </p>
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="col-12 col-md-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}
