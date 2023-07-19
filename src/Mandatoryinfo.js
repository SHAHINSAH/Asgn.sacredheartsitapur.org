import React from 'react';

const Mandatoryinfo = () => {
  const data = [
    { title: 'SCHOOL REPORT', size: '1.74 MB', preview: '' },
    { title: 'NUMBER OF STUDENT', size: '330.99 KB', preview: '' },
    { title: 'WATER HEALTH AND SANITATION CERTIFICATE', size: '338.85 KB', preview: '' },
    { title: 'LIST OF SCHOOL PARENTS TEACHER ASSOCIATION [PTA] MEMBER', size: '448.78 KB', preview: '' },
    { title: 'AFFIDAVIT', size: '941.79 KB', preview: '' },
    { title: 'AFFILATION COPY WITH ATTESTED', size: '1.58 MB', preview: '' },
    { title: 'NOC', size: '3.21 MB', preview: '' },
    { title: 'SOCIETY REGISTRATION', size: '381.37 KB', preview: '' },
    { title: 'FEE BOOK', size: '758.22 KB', preview: '' },
    { title: 'BUILDING SAFETY CERTIFICATE', size: '326.15 KB', preview: '' },
    { title: 'FIRE SAFETY CERTIFICATE', size: '605.61 KB', preview: '' },
    { title: 'DETAILS OF TEACHER', size: '1.90 MB', preview: '' },
    { title: 'ACADEMIC CALENDER', size: '165.76 KB', preview: '' },
    { title: 'SCHOOL MANAGEMENT COMMITTEE', size: '289.11 KB', preview: '' },
    { title: 'MANDATORY PUBLIC DISCLOSURE', size: '397.23 KB', preview: '' },
  ];

  return (
    <div style={{marginLeft: "300px", padding: "130px"}}>
      <h2>Mandatory Information</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Size</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.title}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.size}</td>
              <td style={{ border: '1px solid black', padding: '8px', backgroundColor: 'transparent', transition: 'background-color 0.3s' }}>
                {item.preview}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mandatoryinfo;
