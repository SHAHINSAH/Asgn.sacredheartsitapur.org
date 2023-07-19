// import * as React from 'react';
import './Nav.css'; // Import the CSS file for styling

// function Nav() {
//   return (
//     <div>
//       <nav className="navbar navbar-dark bg-dark p-4">
//         <div className="container-fluid">
//           <a href="_blank">MANDATORY INFORMATION</a>
//           <a href="_blank">| STUDENT LOGIN L</a>
//           <a href="_blank">| EXAMS </a>
//           <a href="_blank">| RESULTS </a>
//           <a href="_blank">| SYLLABUS </a>
//           <a href="_blank">| TC – VERIFICATION </a>
//           <a href="https://www.cbse.gov.in/">| LINK TO CBSE </a>
//           <a href="/contact">|  CONTACT-US</a>
//         </div>
//       </nav>

//       <nav className="navbar navbar-light bg-darkt">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">HOME</a>
//           <a className="navbar-brand" href="/cardabout">ABOUT US</a>
//           <a className="navbar-brand" href="_blank">STUDENTS COUNCIL</a>
//           <a className="navbar-brand" href="_blank">OSHA</a>
//           <a className="navbar-brand" href="_blank">ACHIEVEMENTS</a>
//           <a className="navbar-brand" href="_blank">GALLERY</a>
//           <a className="navbar-brand" href="_blank">ACADEMIC</a>
//           <a className="navbar-brand" href="_blank">DISCLOSURE</a>
//           <a className="navbar-brand" href="./blank">RULES AND REGULATION</a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Nav;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';




function Nav() {

    const navigate = useNavigate()

    return (

        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"

                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => navigate('')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            Home
                        </Button>
                        <Button
                            onClick={() => navigate('/cardabout')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            ABOUT US
                        </Button>
                        <Button
                            // onClick={() => navigate('/cardabout')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            STUDENTS COUNCIL
                        </Button>
                        <Button
                            // onClick={() => navigate('/contact')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            OSHA
                        </Button>
                        <Button
                            // onClick={() => navigate('/cardabout')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            ACHIEVEMENTS
                        </Button>
                        <Button
                            // onClick={() => navigate('/contact')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            GALLERY
                        </Button>
                        {/* <Button
                            onClick={() => navigate('/cardabout')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            ACADEMIC
                        </Button> */}
                        <Button
                            // onClick={() => navigate('/contact')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            DISCLOSURE
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }} className="hover-text">
                            RULES AND REGULATION
                            <ul className="tooltip-text" id="bottom">
                                <li>
                                    <Link to='aCbse Corner'>Attendances, Leave and Absence</Link>
                                </li>
                                <li>
                                    <Link to='Fees Structure'>Exam and Promotion Rules</Link>
                                </li>
                                <li>
                                    <Link to='Book List'> Book List</Link>
                                </li>
                                <li>
                                    <Link to='aCbse Corner'>Cbse Corner</Link>
                                </li>
                                <li>
                                    <Link to='Fees Structure'>Fees Structure</Link>
                                </li>
                                <li>
                                    <Link to='Book List'> Book List</Link>
                                </li>

                            </ul>

                        </Button>
                        <Button
                            onClick={() => navigate('/contact')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            CONTACT-US
                        </Button>

                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }} className="hover-text">
                            ACADEMIC
                            <ul className="tooltip-text" id="bottom">
                                <li>
                                    <Link to='aCbse Corner'>Cbse Corner</Link>
                                </li>
                                <li>
                                    <Link to='Fees Structure'>Fees Structure</Link>
                                </li>
                                <li>
                                    <Link to='Book List'> Book List</Link>
                                </li>

                            </ul>

                        </Button>
                        <Button
                            onClick={() => navigate('/disclosure')}
                            sx={{ my: 2, color: 'white', display: 'block' }} className="button">
                            DISCLOSURE
                        </Button>

                    </Box>


                </Toolbar>
            </Container>
        </AppBar>


    );
}
export default Nav;
