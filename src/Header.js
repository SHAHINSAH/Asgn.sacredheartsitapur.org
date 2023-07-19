import React from 'react';
import './Header.css'

const Header = () => {
  const logoUrl = 'https://sacredheartsitapur.org/wp-content/uploads/2019/11/imageedit_2_3428997672-150x150.png';

  return (
    <div style={{ marginTop: "70px", marginBottom: "30px" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img src={logoUrl} alt="Logo" style={{ marginLeft: 'auto', height: '200px' }} />

        </div>
        <h2>Affiliated to C.B.S.E Board </h2>
        <h1> SACRED HEART HIGHER SECONDARY SCHOOL </h1>
        <p> Affiliation No. 2132357 </p>
        <p> Sitapur (U.P)</p>
      </div>
      <div className='nav'>
        <a href="/mandatoryinfo"> MANDATORY INFORMATION </a>&nbsp;
        <a href="/login"> | STUDENT LOGIN L</a>&nbsp;
        <a href="/authentication"> | Authentication </a>&nbsp;
        <a href="_blank"> | RESULTS </a>&nbsp;
        <a href="_blank"> | SYLLABUS </a>&nbsp;
        <a href="https://sacredheartsitapur.org/"> | TC – VERIFICATION </a>&nbsp;
        <a href="https://www.cbse.gov.in/"> | LINK TO CBSE </a>
        <a href="/contact">|  CONTACT-US</a>
      </div>
    </div>
  );
};

export default Header;
