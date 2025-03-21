import React, { useState, useEffect } from "react";

const Information = () => {
  // State for recipient information
  const [recipientInfo, setRecipientInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  // State for delivery information
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: "",
    city: "",
    state: "",
  });

  // State to control modals
  const [showRecipientModal, setShowRecipientModal] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  // State for error messages
  const [recipientError, setRecipientError] = useState("");
  const [deliveryError, setDeliveryError] = useState("");

  // Load data from local storage on component mount
  useEffect(() => {
    const savedRecipientInfo = JSON.parse(
      localStorage.getItem("recipientInfo")
    );
    const savedDeliveryInfo = JSON.parse(localStorage.getItem("deliveryInfo"));

    if (savedRecipientInfo) {
      setRecipientInfo(savedRecipientInfo);
    }
    if (savedDeliveryInfo) {
      setDeliveryInfo(savedDeliveryInfo);
    }
  }, []);

  // Handle recipient form submission
  const handleRecipientSubmit = (data) => {
    if (!data.fullName || !data.phoneNumber || !data.email) {
      setRecipientError("All fields are required.");
      return;
    }
    setRecipientInfo(data);
    localStorage.setItem("recipientInfo", JSON.stringify(data)); // Save to local storage
    setRecipientError("");
    setShowRecipientModal(false);
  };

  // Handle delivery form submission
  const handleDeliverySubmit = (data) => {
    if (!data.address || !data.city || !data.state) {
      setDeliveryError("All fields are required.");
      return;
    }
    setDeliveryInfo(data);
    localStorage.setItem("deliveryInfo", JSON.stringify(data)); // Save to local storage
    setDeliveryError("");
    setShowDeliveryModal(false);
  };

  // Clear local storage data (optional)
  const clearLocalStorage = () => {
    localStorage.removeItem("recipientInfo");
    localStorage.removeItem("deliveryInfo");
    setRecipientInfo({ fullName: "", phoneNumber: "", email: "" });
    setDeliveryInfo({ address: "", city: "", state: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>

      {/* Recipient Information Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Recipient Information</h2>
        <button
          onClick={() => setShowRecipientModal(true)}
          className="bg-[#B67B0F] text-white px-4 py-2 rounded hover:bg-[#A56C0D]"
        >
          {recipientInfo.fullName
            ? "Edit Recipient Info"
            : "Add Recipient Info"}
        </button>
        {recipientInfo.fullName && (
          <div className="mt-4">
            <p>Full Name: {recipientInfo.fullName}</p>
            <p>Phone Number: {recipientInfo.phoneNumber}</p>
            <p>Email: {recipientInfo.email}</p>
          </div>
        )}
      </div>

      {/* Delivery Information Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Delivery Information</h2>
        <button
          onClick={() => setShowDeliveryModal(true)}
          className="bg-[#B67B0F] text-white px-4 py-2 rounded hover:bg-[#A56C0D]"
        >
          {deliveryInfo.address
            ? "Edit Delivery Address"
            : "Add Delivery Address"}
        </button>
        {deliveryInfo.address && (
          <div className="mt-4">
            <p>Address: {deliveryInfo.address}</p>
            <p>City: {deliveryInfo.city}</p>
            <p>State: {deliveryInfo.state}</p>
          </div>
        )}
      </div>

      {/* Clear Data Button (Optional) */}
      <button
        onClick={clearLocalStorage}
        className="bg-[#B67B0F] text-white px-4 py-2 rounded hover:bg-[#A56C0D]"
      >
        Clear All Data
      </button>

      {/* Recipient Modal */}
      {showRecipientModal && (
        <div className="fixed inset-0 main-wrapper  bg-no-repeat bg-cover bg-center bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Recipient Information</h2>
            {recipientError && (
              <p className="text-red-500 text-sm mb-4">{recipientError}</p>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRecipientSubmit({
                  fullName: e.target.fullName.value,
                  phoneNumber: e.target.phoneNumber.value,
                  email: e.target.email.value,
                });
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={recipientInfo.fullName}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  defaultValue={recipientInfo.phoneNumber}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={recipientInfo.email}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowRecipientModal(false)}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#B67B0F] text-white rounded hover:bg-[#A56C0D]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delivery Modal */}
      {showDeliveryModal && (
        <div className="fixed inset-0 main-wrapper  bg-no-repeat bg-cover bg-center bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
            {deliveryError && (
              <p className="text-red-500 text-sm mb-4">{deliveryError}</p>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleDeliverySubmit({
                  address: e.target.address.value,
                  city: e.target.city.value,
                  state: e.target.state.value,
                });
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  defaultValue={deliveryInfo.address}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  defaultValue={deliveryInfo.city}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  defaultValue={deliveryInfo.state}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowDeliveryModal(false)}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#B67B0F] text-white rounded hover:bg-[#A56C0D]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
