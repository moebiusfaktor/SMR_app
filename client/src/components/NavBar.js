import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { logout } from "../services/api";

class NavBar extends React.Component {
  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    });
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="nav">
          {this.props.user ? (
            <Link onClick={() => this.handleLogout()} to="/">
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Link to="/bestlist">Bestlist</Link>

          <Link to="/profile">Profile</Link>
        </div>
        <Link to={`/`} activeClassName="active">
          <img src="/images/SMR_logo4.png" alt="SERIOUS RATED MOVIES" />
        </Link>
      </nav>
    );
  }
}

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

// export class NavBar extends Component {
//   render() {
//     return (
//       <Navbar>
//         <Navbar.Brand href="#home">
//           <img
//             src="/images/SMR_logo.png"
//             width="100"
//             height="100"
//             className="d-inline-block align-top"
//             alt="React Bootstrap logo"
//           />
//         </Navbar.Brand>

//         <Nav fill variant="tabs" defaultActiveKey="/home">
//           <Nav.Item>
//             <Nav.Link href="/Profile">Profile</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="/Login">Login</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="disabled" disabled>
//               Compare
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Navbar>
//     );
//   }
// }

export default NavBar;

// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
