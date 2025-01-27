import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert
import { getAuth } from 'firebase/auth'; // Import Auth if needed for user authentication
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore'; // Import Firestore functions
function Buisneesloan(){
    // State for form inputs
      const [formData, setFormData] = useState({
        subCategory: '',
        loanPeriod: '',
        initialDeposit: '',
        amount: '',
      });
    
      const [calculatedAmount, setCalculatedAmount] = useState(null); // State to store the calculated amount
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const styles = {
        container: {
          height: '100vh',
          width: '100vw',
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_RWmPLx2un3BSRXkLQ0S6PwNyneD9ImyeQ&s')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#8DC63F', 
          padding: '0 16px',
        },
        formContainer: {
          backgroundColor: 'red', // Green background
          borderRadius: '16px',
          padding: '32px',
          width: '100%',
          maxWidth: '640px',
          marginTop: '40px',
        },
        heading: {
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '24px',
        },
        subHeading: {
          fontSize: '1.25rem',
          marginBottom: '32px',
          color: '#0D6DB7', // Light blue color
        },
        form: {
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        },
        input: {
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          fontSize: '1rem',
          backgroundColor: '#fff',
          color: 'gray',
        },
        select: {
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          fontSize: '1rem',
          backgroundColor: '#fff',
          color: '#333',
        },
        button: {
          width: '100%',
          padding: '16px',
          fontSize: '1.125rem',
          backgroundColor: '#218838', // Darker green
          border: 'none',
          borderRadius: '8px',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        },
        buttonHover: {
          backgroundColor: '#155d27', // Darker green shade on hover
        },
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { subCategory, loanPeriod, initialDeposit, amount } = formData;
    
        // Validate that all fields are filled
        if (!subCategory || !loanPeriod || !initialDeposit || !amount) {
          alert('Please fill all the inputs');
          return;
        } else {
          const totalAmount = parseInt(amount) - parseInt(initialDeposit);
          const monthlyInstallment = totalAmount / parseInt(loanPeriod);
    
          // Set the calculated amount state
          setCalculatedAmount(monthlyInstallment);
    
          // Show SweetAlert with calculated amount
          Swal.fire({
            title: `Your installment amount is ${monthlyInstallment} PKR per month`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Confirmed!',
                text: 'Your loan has been approved.',
                icon: 'success',
              });
            }
          });
        }
      };
    
      return (
        <div style={styles.container}>
          <div style={styles.formContainer}>
          <h1 style={styles.heading}>Welcome to buisnees Loan</h1>
          <h2 style={styles.subHeading}>Please fill all the details to approve your loan</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              {/* Subcategory Dropdown */}
              <div>
                <label htmlFor="subCategory" style={{ fontWeight: 'bold' }}>Select Subcategory:</label>
                <select
                  id="subCategory"
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleInputChange}
                  style={styles.select}
                  required
                >
                  <option value="">Select</option>
                  <option value="buy stall">buy stall</option>
              <option value="shop assests">shop assests</option>
              <option value="shop machinery">shop machinery</option>
              <option value="advace rent for shop">advace rent for shop</option>
                </select>
              </div>
    
              {/* Loan Period */}
              <div>
                <label htmlFor="loanPeriod" style={{ fontWeight: 'bold' }}>Loan Period (in months):</label>
                <input
                  type="number"
                  id="loanPeriod"
                  name="loanPeriod"
                  value={formData.loanPeriod}
                  onChange={handleInputChange}
                  placeholder="Enter loan period"
                  style={styles.input}
                  required
                />
              </div>
    
              {/* Initial Deposit */}
              <div>
                <label htmlFor="initialDeposit" style={{ fontWeight: 'bold' }}>Initial Deposit:</label>
                <input
                  type="number"
                  id="initialDeposit"
                  name="initialDeposit"
                  value={formData.initialDeposit}
                  onChange={handleInputChange}
                  placeholder="Enter initial deposit"
                  style={styles.input}
                  required
                />
              </div>
    
              {/* Loan Amount */}
              <div>
                <label htmlFor="amount" style={{ fontWeight: 'bold' }}>Loan Amount:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Enter loan amount"
                  style={styles.input}
                  required
                />
              </div>
    
              {/* Submit Button */}
              <button
                type="submit"
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              >
                Submit
              </button>
            </form>
    
            {/* Display Calculated Monthly Payment */}
            {calculatedAmount !== null && (
              <div style={{ marginTop: '24px', fontSize: '1.25rem', fontWeight: 'bold' }}>
                <p>Remaining Amount after Initial Deposit: {Number(formData.amount) - Number(formData.initialDeposit)}</p>
                <p>Monthly Payment: {calculatedAmount} PKR</p>
              </div>
            )}
          </div>
        </div>
      );
}
export default Buisneesloan