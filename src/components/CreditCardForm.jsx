import React, { useState } from 'react';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const isCardNumberValid = (number) => {
    const sanitizedNumber = number.replace(/\s/g, '');
    return sanitizedNumber.length === 16;

  };

  const isExpiryDateValid = (month, year) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const expiryYear = parseInt(year, 10);
    const expiryMonth = parseInt(month, 10);

    return expiryYear > currentYear || (expiryYear === currentYear && expiryMonth >= currentMonth);
  };

  const isCvcValid = (cvc) => cvc.length === 3 && /^[0-9]+$/.test(cvc);

  const formatCardNumber = (number) => {
    return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!isCardNumberValid(cardNumber)) {
      newErrors.cardNumber = 'Invalid card number';
    } else {
      newErrors.cardNumber = null;
    }

    if (!isExpiryDateValid(expiryMonth, expiryYear)) {
      newErrors.expiryDate = 'Invalid or expired card';
    } else {
      newErrors.expiryDate = null;
    }

    if (!isCvcValid(cvc)) {
      newErrors.cvc = 'Invalid CVC';
    } else {
      newErrors.cvc = null;
    }

    setErrors(newErrors);
    if (!newErrors.cardNumber && !newErrors.expiryDate && !newErrors.cvc) {
        // Simulate a payment process
        const paymentProcessed = Math.random() > 0.5; // Random success or failure for demonstration
        setPaymentStatus(paymentProcessed ? 'success' : 'failure');
        setIsModalVisible(true);
    
        // Clear the input fields if payment processed successfully
        if (paymentProcessed) {
          setCardNumber('');
          setExpiryMonth('');
          setExpiryYear('');
          setCvc('');
        }
      }
    };

  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex flex-col">
        <label className="mb-2">Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          placeholder="1234 5678 9012 3456"
          maxLength="19"
          onChange={(e) => {
            const formattedNumber = formatCardNumber(e.target.value);
            setCardNumber(formattedNumber);
            if (isCardNumberValid(formattedNumber)) {
              setErrors({ ...errors, cardNumber: null });
            }
          }}
          className="p-2 border-2 border-gray-200 rounded"
        />
        {errors.cardNumber && <span className="text-red-500">{errors.cardNumber}</span>}
      </div>

      <div className="flex space-x-2">
        <div className="flex flex-col w-1/2">
          <label className="mb-2">Expiry Month:</label>
          <select
            value={expiryMonth}
            onChange={(e) => {
              setExpiryMonth(e.target.value);
              if (isExpiryDateValid(e.target.value, expiryYear)) {
                setErrors({ ...errors, expiryDate: null });
              }
            }}
            className="p-2 border-2 border-gray-200 rounded"
          >
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {month.toString().padStart(2, '0')}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-1/2">
          <label className="mb-2">Expiry Year:</label>
          <select
            value={expiryYear}
            onChange={(e) => {
              setExpiryYear(e.target.value);
              if (isExpiryDateValid(expiryMonth, e.target.value)) {
                setErrors({ ...errors, expiryDate: null });
              }
            }}
            className="p-2 border-2 border-gray-200 rounded"
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      {errors.expiryDate && <span className="text-red-500">{errors.expiryDate}</span>}

      <div className="flex flex-col">
        <label className="mb-2">CVC:</label>
        <input
          type="text"
          value={cvc}
          placeholder="123"
          onChange={(e) => {
            setCvc(e.target.value);
            if (isCvcValid(e.target.value)) {
              setErrors({ ...errors, cvc: null });
            }
          }}
          className="p-2 border-2 border-gray-200 rounded"
        />
        {errors.cvc && <span className="text-red-500">{errors.cvc}</span>}
      </div>

      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
    {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            {paymentStatus === 'success' ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">Payment Successful</h2>
                <p>Your payment has been processed successfully.</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-red-500">Payment Failed</h2>
                <p>There was an issue processing your payment. Please try again.</p>
              </>
            )}
            <button
              className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-blue-700"
              onClick={() => setIsModalVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      </>
  );
};

export default CreditCardForm;
