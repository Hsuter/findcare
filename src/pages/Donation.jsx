import React, { useState } from "react";

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!donationAmount || !cardNumber || !expiryDate || !cvv || !nameOnCard) {
      alert("Please fill in all payment details");
      return;
    }

    alert("Thank you for your generous donation!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-8 md:flex">
        <div className="md:w-1/2 flex justify-center items-center"></div>

        <div className="md:w-1/2 flex flex-col justify-center items-center md:ml-10">
          <h1 className="text-[30px] font-bold text-darkgreen mb-8">
            Make a Donation
          </h1>

          <form className="w-full" onSubmit={handleSubmit}>
            {/* Donation Amount */}
            <div className="mb-6">
              <input
                type="number"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Donation Amount (USD)"
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>

            {/* Name on Card */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Name on Card"
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>

            {/* Card Number */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Card Number"
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            {/* Expiry Date */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Expiry Date (MM/YY)"
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>

            {/* CVV */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="CVV"
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`inline-block w-full px-7 py-3 bg-darkgreen text-white font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out ${
                donationAmount && cardNumber && expiryDate && cvv && nameOnCard
                  ? "cursor-pointer"
                  : "cursor-not-allowed pointer-events-none"
              }`}
            >
              Donate
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Donation;
