<template>
    <footer>
      <div class="footer-content">
        <div class="section">
          <h3>Contact Us</h3>
          <p>Email: clinic.support@toothfairydentisthub.com</p>
          <p>Customer Support: +46 1111-22334</p>
        </div>
  
        <div class="section">
          <h3>About Us</h3>
          <p>Explore our mission, vision, and values.</p>
          <router-link to="/about">Learn More</router-link>
        </div>
  
        <div class="section">
            <h3>Payment Information</h3>
            <p>Payments are handled at our clinic during your visit.</p>
        </div>

      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer-content {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
    background-color: #214471;
    color: white;
    position:fixed;
    bottom: 0;
    width: 100%;
  }
  
  .section {
    flex: 1;
    margin-right: 20px;
  }
  
  .section h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .section p {
    margin: 5px 0;
  }
  
  .section router-link {
    color: white;
    text-decoration: none;
  }
  
  .section router-link:hover {
    text-decoration: underline;
  }
  </style>
  