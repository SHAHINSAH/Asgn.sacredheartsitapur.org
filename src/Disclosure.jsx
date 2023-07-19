import React from 'react';
import './Disclosure.css';

const Disclosure = () => {
  return (
    <div className="centered-container">
      <h2>School Information:</h2>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>SL NO.</th>
            <th>INFORMATION</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>NAME OF THE SCHOOL</td>
            <td>SACRED HEART HIGHER SECONDARY SCHOOL</td>
          </tr>
          <tr>
            <td>2</td>
            <td>AFFILIATION NO.(IF APPLICABLE)</td>
            <td>2132357</td>
          </tr>
          <tr>
            <td>3</td>
            <td>SCHOOL CODE (IF APPLICABLE)</td>
            <td>71214</td>
          </tr>
          {/* ... Add more rows for each detail */}
        </tbody>
      </table>

      <h2>Documents and Information:</h2>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>SL NO.</th>
            <th>DOCUMENTS/INFORMATION</th>
            <th>LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL'S WEBSITE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
            <td>VIEW (Link)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
            <td>VIEW (Link)</td>
          </tr>
          {/* ... Add more rows for each detail */}
        </tbody>
      </table>

      <h2>Result and Academics:</h2>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>DOCUMENTS/INFORMATION</th>
            <th>LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL'S WEBSITE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>FEE STRUCTURE OF THE SCHOOL</td>
            <td>VIEW (Link)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ANNUAL ACADEMIC CALENDER</td>
            <td>VIEW (Link)</td>
          </tr>
          {/* ... Add more rows for each detail */}
        </tbody>
      </table>

      <h2>Staff (Teaching):</h2>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>INFORMATION</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>PRINCIPAL</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>2</td>
            <td>TOTAL NO. OF TEACHERS</td>
            <td>96</td>
          </tr>
          {/* ... Add more rows for each detail */}
        </tbody>
      </table>

      <h2>Result Class: X</h2>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>YEAR</th>
            <th>NO. OF REGISTERED STUDENTS</th>
            <th>NO. OF STUDENTS PASSED</th>
            <th>PASS PERCENTAGE</th>
            <th>REMARKS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2021</td>
            <td>245</td>
            <td>245</td>
            <td>100%</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022</td>
            <td>206</td>
            <td>206</td>
            <td>100%</td>
            <td></td>
          </tr>
          {/* ... Add more rows for each detail */}
        </tbody>
      </table>

      <h2>Result Class: XII</h2>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>YEAR</th>
            <th>NO. OF REGISTERED STUDENTS</th>
            <th>NO. OF STUDENTS PASSED</th>
            <th>PASS PERCENTAGE</th>
            <th>REMARKS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2021</td>
            <td>172</td>
            <td>164</td>
            <td>95%</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022</td>
            <td>179</td>
            <td>179</td>
            <td>100%</td>
            <td></td>
          </tr>
          {/* ... Add more rows for each detail */}
        </tbody>
      </table>

      <h2>School Infrastructure:</h2>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>INFORMATION</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td>
            <td>15094</td>
          </tr>
          <tr>
            <td>2</td>
            <td>NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td>
            <td>95 & 105</td>
          </tr>
          {/* ... Add more rows for each detail */}
        </tbody>
      </table>
      <div>
      <h2>YouTube Video of the Inspection of School Covering the Infrastructure of the School:</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_o8GVKz5wDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Disclosure;
