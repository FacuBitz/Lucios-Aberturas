import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import logo from "../assets/img/logo-lucio.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

// Custom Button for dropwdown menu
const CustomButton = styled(Button)(() => ({
  minWidth: "30px",
}));

function NavBar(props) {
  // drawer toggle
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Accordion for responsive
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // drawer for mobile
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Lucio's Aberturas
      </Typography>
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{ justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/">
            <Button color="secondary">Home</Button>
          </Link>
        </ListItem>
        <ListItem
          sx={{ justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="/empresa">
            <Button color="secondary">Empresa</Button>
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            sx={{ boxShadow: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="button">Productos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{ boxShadow: 0 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Puertas
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <CustomButton>
                    <Link
                      to={`/category/${"interior"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Interior
                    </Link>
                  </CustomButton>
                  <CustomButton>
                    <Link
                      to={`/category/${"exterior"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Exterior
                    </Link>
                  </CustomButton>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{ boxShadow: 0 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Aluminio
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <CustomButton>
                    <Link
                      to={`/category/${"modena"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Linea Modena
                    </Link>
                  </CustomButton>
                  <CustomButton>
                    <Link
                      to={`/category/${"a30"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      A30 New
                    </Link>
                  </CustomButton>
                  <CustomButton>
                    <Link
                      to={`/category/${"herrero"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Herrero
                    </Link>
                  </CustomButton>
                  <CustomButton>
                    <Link
                      to={`/category/${"hetonda"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Hetonda
                    </Link>
                  </CustomButton>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{ boxShadow: 0 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Vidrios
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <CustomButton>
                    <Link
                      to={`/category/${"float"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Float
                    </Link>
                  </CustomButton>
                  <CustomButton>
                    <Link
                      to={`/category/${"laminados"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      Laminados
                    </Link>
                  </CustomButton>
                  <CustomButton>
                    <Link
                      to={`/category/${"dvh"}`}
                      className="dropdown-content-link"
                      onClick={handleDrawerToggle}
                    >
                      DVH
                    </Link>
                  </CustomButton>
                </AccordionDetails>
              </Accordion>
              <Divider sx={{ marginBottom: "10px" }} />
              <Link
                to={`/category/${"portones"}`}
                className="dropdown-content-link link-padding"
                onClick={handleDrawerToggle}
              >
                Portones
              </Link>
              <Divider sx={{ marginY: "10px" }} />
              <Link
                to={`/category/${"placard"}`}
                className="dropdown-content-link link-padding"
                onClick={handleDrawerToggle}
              >
                Frentes de placard
              </Link>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem
          sx={{ justifyContent: "center" }}
          onClick={handleDrawerToggle}
        >
          <Link to="tel:+5491138158705">
            <Button color="secondary">Contacto</Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // handle menu dropdown "productos" in desktop
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
      }}
    >
      <AppBar component="nav" position="sticky">
        <Box backgroundColor="secondary.dark">
          <Stack
            flexDirection="row"
            spacing={5}
            alignItems="center"
            sx={{ justifyContent: { xs: "space-around", sm: "center" } }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                color="#d16014"
                sx={{
                  my: "4px",
                  display: { xs: "none", sm: "block" },
                }}
              />
            }
          >
            <Stack flexDirection="row" alignItems="center">
              <Stack
                sx={{ width: { xs: "auto", sm: "260px" } }}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <WhatsAppIcon
                  color="primary"
                  sx={{
                    m: "4px",
                    py: "2px",
                    fontSize: { xs: "20px", lg: "25px" },
                    display: { xs: "none", br400: "block" },
                  }}
                />
                <Typography
                  color="primary"
                  variant="body2"
                  sx={{ fontSize: { xs: "10px", br400: "12px", lg: "14px" } }}
                >
                  +54 011 3815-8705
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{ width: { xs: "auto", sm: "260px" } }}>
              <Typography
                color="primary"
                variant="body2"
                sx={{ fontSize: { xs: "10px", br400: "12px", lg: "14px" } }}
              >
                LA TABLADA, PARTIDO DE LA MATANZA
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Toolbar
          sx={{
            justifyContent: { xs: "space-between", md: "space-around" },
            maxWidth: "2000px",
            margin: "auto",
            width: "100%",
          }}
        >
          <Box sx={{ mr: 2, display: { md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Link to="/">
            <Card
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                margin: "10px",
                width: { md: "140px" },
              }}
            >
              <CardMedia
                component="img"
                image={logo}
                alt="logo empresa"
                sx={{ maxWidth: { xs: "60px", md: "90px" } }}
              />
            </Card>
          </Link>
          <List sx={{ display: { xs: "none", md: "flex" } }}>
            <ListItem>
              <Link to="/">
                <Button color="secondary">Home</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/empresa">
                <Button color="secondary">Empresa</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                color="secondary"
                id="prods-button"
                aria-controls={open ? "prods-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Productos
              </Button>
              <Menu
                id="prods-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "prods-button",
                }}
              >
                <MenuItem className="dropdown">
                  <Typography>Puertas</Typography>
                  <div className="dropdown-content">
                    <Link
                      to={`/category/${"interior"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Interior
                    </Link>
                    <Link
                      to={`/category/${"exterior"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Exterior
                    </Link>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to={`/category/${"portones"}`}>Portones</Link>
                </MenuItem>
                <MenuItem className="dropdown">
                  <Typography>Aluminio</Typography>
                  <div className="dropdown-content">
                    <Link
                      to={`/category/${"modena"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Linea Modena
                    </Link>
                    <Link
                      to={`/category/${"a30"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      A30 New
                    </Link>
                    <Link
                      to={`/category/${"herrero"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Herrero
                    </Link>
                    <Link
                      to={`/category/${"hetonda"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Hetonda
                    </Link>
                  </div>
                </MenuItem>
                <MenuItem className="dropdown">
                  <Typography>Vidrios</Typography>
                  <div className="dropdown-content">
                    <Link
                      to={`/category/${"float"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Float
                    </Link>
                    <Link
                      to={`/category/${"dvh"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      DVH
                    </Link>
                    <Link
                      to={`/category/${"laminados"}`}
                      className="dropdown-content-link"
                      onClick={handleClose}
                    >
                      Laminados
                    </Link>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to={`/category/${"placard"}`}>Frentes de placard</Link>
                </MenuItem>
              </Menu>
            </ListItem>
            <ListItem>
              <a href="/#cto">
                <Button color="secondary">Contacto</Button>
              </a>
            </ListItem>
          </List>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              to={
                "https://wa.me/+5491138158705?text=Hola!%20les%20queria%20hacer%20una%20consulta"
              }
              target="_blank"
            >
              <Button
                aria-label="escribinos"
                variant="contained"
                color="error"
                startIcon={<WhatsAppIcon />}
              >
                <Typography fontWeight={500} fontSize="1em" letterSpacing={1}>
                  Escribinos
                </Typography>
              </Button>
            </Link>
          </Box>
          {/* hides "escribinos" button and leaves wpp logo only */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Link
              to={
                "https://wa.me/+5491138158705?text=Hola!%20les%20queria%20hacer%20una%20consulta"
              }
              target="_blank"
            >
              <IconButton color="secondary" aria-label="whatsapp">
                <WhatsAppIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default NavBar;
