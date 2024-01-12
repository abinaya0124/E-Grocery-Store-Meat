// Import necessary React libraries
import { Input } from "@material-tailwind/react";

import  { useState } from 'react';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
// Define the component
const MyForm = () => {
    const [theme] = useThemeHook();
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    address: '',
    country: '',
    state: '',
    zipcode: '',
    agreeTerms: false,
    additionalInfo: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted:', formData);
  };

  // Options for country and state dropdowns (you can replace it with your own data)
  const countryOptions = ['USA', 'Canada', 'UK'];
  const stateOptions = ['New York', 'California', 'Ontario', 'London'];

  // Render the component
  return (
    <div style={{ position: 'absolute', top: '46%', left: '140px', transform: 'translateY(-50%)', zIndex: '9999' }}>

    <div className="max-w-xl mx-auto mt-10 p-6  bg-white rounded-md shadow-md" style={{backgroundColor:theme?'transparent':'#ffffff'}}>
      <h2 className="text-2xl font-bold mb-6" style={{color:theme?'white':'black'}}>Billing Information</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name, Last Name, and Company Name in the same row */}
        <div className="flex mb-4">
          {/* First Name */}
          <div className="flex-1 mr-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black',}}>
              First Name
            </label>
            <Input
                style={{color:'red',backgroundColor:theme?'#2A2C38':''}} 
              type="text"
              id="firstName"
              name="firstName"
              placeholder='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {/* <Input label="Username" /> */}
          </div>

          {/* Last Name */}
          <div className="flex-1 mx-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
              Last Name
            </label>
            <Input
            style={{color:'red',backgroundColor:theme?'#2A2C38':''}}
              type="text"
              id="lastName"
              name="lastName"
              placeholder='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Company Name */}
          <div className="flex-1 ml-2">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
              Company Name
            </label>
            <Input
            style={{color:'red',backgroundColor:theme?'#2A2C38':''}}
              type="text"
              id="companyName"
              name="companyName"
              placeholder='companyName'
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
            Email
          </label>
          <Input
          style={{color:'red',backgroundColor:theme?'#2A2C38':''}}
            type="email"
            id="email"
            name="email"
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
            Phone Number
          </label>
          <Input
          style={{color:'red',backgroundColor:theme?'#2A2C38':''}}
            type="tel"
            id="phoneNumber"
            placeholder='phoneNumber'
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
            Address
          </label>
          <textarea
          style={{color:'red',backgroundColor:theme?'#2A2C38':''}}
            id="address"
            name="address"
            placeholder='address'
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>

        {/* Country, State, and Zipcode in the same row */}
        <div className="flex mb-4">
          {/* Country */}
          <div className="flex-1 mr-2">
            <label htmlFor="country" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
              Country
            </label>
            <select
            style={{color:theme?'red':'',backgroundColor:theme?'#2A2C38':''}}
              id="country"
              name="country"
              placeholder='country'
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Country</option>
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <div className="flex-1 mx-2">
            <label htmlFor="state" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
              State
            </label>
            <select
            style={{color:theme?'red':'',backgroundColor:theme?'#2A2C38':''}}
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select State</option>
              {stateOptions.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Zipcode */}
          <div className="flex-1 ml-2">
            <label htmlFor="zipcode" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
              Zipcode
            </label>
            <Input
            style={{color:'red',backgroundColor:theme?'#2A2C38':''}}
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder='zipcode'
              value={formData.zipcode}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>

        {/* Additional Information */}
        

        {/* Checkbox for agreeing to terms */}
        <div className="mb-4">
          <input
          style={{color:'red',backgroundColor:theme?'#2A2C38':''}}
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="agreeTerms" className="text-sm text-gray-600" style={{color:theme?'white':'black'}}>
            I agree to the terms and conditions
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-600" style={{color:theme?'white':'black'}}>
            Additional Information
          </label>
          <textarea style={{color:'red',backgroundColor:theme?'#2A2C38':''}}
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            placeholder='Additional Information'
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>

        {/* Submit button */}
        {/* <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Place Order
        </button> */}
      </form>
    </div>
    </div>
  );
};

// Export the component
export default MyForm;
