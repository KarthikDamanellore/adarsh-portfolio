import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  contactUsData,
  educationData,
  skillsData,
} from "../../constants/index";
import {
  cardStyles,
  contactItemTextStyles,
  customModalStyles,
  educationBlockStyles,
  educationHeadingStyles,
  mySelfContainerStyles,
  selfContentDescStyles,
  skillsModalStyles,
} from "../../pages/portfolio/styles";
import { Typewriter } from "react-simple-typewriter";
import { Button, Typography } from "@mui/material";
import mySelfImg from "../../assets/images/brother.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./global.module.css";

const PortFolioApp = () => {
  const [menuItem, setMenuItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(0);
  const [isMobile, setIsMobile] = useState(null);

  const getContent = () => {
    switch (menuItem) {
      case "My Self":
        return renderMySelfSection();
      case "Education":
        return renderEducationSection();
      case "Skills":
        return renderSkillsSection();
      case "Contact":
        return renderContactSection();
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 510);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const renderBannerSection = () => {
    return (
      <div className={styles.bannerContainerStyles}>
        <h1
          style={{
            fontWeight: "normal",
            textAlign: "center",
          }}
          className={styles.bannerTextStyles}
        >
          Hi, Iam Adarsh Web Developer <br /> ready to &nbsp;
          <span
            style={{ color: "red", fontWeight: "bold" }}
            className={styles.bannerTextStyles}
          >
            <Typewriter
              words={["Innovate", "Collaborate", "Develop", "Succeed!"]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={1000}
              loop={false}
            />
          </span>
        </h1>
      </div>
    );
  };

  const renderMySelfSection = () => {
    return (
      <>
        <Box sx={mySelfContainerStyles}>
          <img
            src={mySelfImg}
            alt="mySelfImg"
            style={{ width: "150px", height: "150px" }}
            className={styles.mySelfImageStyles}
          />
          <div className={styles.selfContentBlockStyles}>
            <Typography variant="h4" sx={selfContentDescStyles}>
              About Me
            </Typography>
            <Typography sx={selfContentDescStyles}>
              I am Adarsh, a passionate front-end developer with a keen eye for
              detail and a love for creating engaging, user-friendly web
              interfaces. As a recent graduate, I have honed my skills in HTML,
              CSS, JavaScript, and React. I am eager to bring my fresh
              perspective and technical expertise to a dynamic team,
              contributing to and growing within it.
            </Typography>
          </div>
        </Box>
        {renderCloseBtnSection()}
      </>
    );
  };

  const renderEducationSection = () => {
    return (
      <>
        <Box className={styles.educationBlockStyles}>
          {educationData?.map((item, index) => {
            return (
              <Accordion
                key={index}
                expanded={expandedAccordion === index}
                onChange={() =>
                  setExpandedAccordion(
                    expandedAccordion === index ? null : index
                  )
                }
              >
                <AccordionSummary
                  sx={educationHeadingStyles}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <img
                    src={item?.icon}
                    alt="item?.icon"
                    style={{ width: "40px", height: "40px" }}
                    className={styles.educationImgStyles}
                  />
                  {item?.graduation} - {item?.aggregate}
                </AccordionSummary>
                <AccordionDetails sx={educationHeadingStyles}>
                  {item?.instituteName}
                </AccordionDetails>
                <AccordionDetails sx={educationHeadingStyles}>
                  {item?.year}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
        {renderCloseBtnSection()}
      </>
    );
  };

  const renderSkillsSection = () => {
    return (
      <Box className={styles.skillsContainerStyles}>
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          swipeable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          showDots={isMobile}
          arrows={!isMobile}
        >
          {skillsData?.map((item, index) => {
            return (
              <Card key={index} sx={cardStyles}>
                <CardActionArea>
                  <CardContent>
                    <img
                      src={item?.image}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                      alt={item?.title}
                      className={styles.imageStyles}
                    />
                    <Typography gutterBottom variant="h5">
                      {item?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Carousel>
        {renderCloseBtnSection()}
      </Box>
    );
  };

  const renderContactSection = () => {
    return (
      <>
        {contactUsData?.map((item, index) => (
          <List key={index} className={styles.contactUsListStyles}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  if (index === 5) {
                    return null;
                  } else {
                    window.open(item.link, "_blank");
                  }
                }}
              >
                <ListItemIcon>{item?.icon}</ListItemIcon>
                <ListItemText
                  primary={item?.title}
                  sx={contactItemTextStyles}
                />
              </ListItemButton>
            </ListItem>
          </List>
        ))}
        {renderCloseBtnSection()}
      </>
    );
  };

  const renderCloseBtnSection = () => {
    return (
      <Button
        variant="contained"
        color="error"
        sx={{ display: "flex", marginLeft: "auto", marginTop: "10px" }}
        onClick={() => setOpenModal(false)}
      >
        Close
      </Button>
    );
  };

  return (
    <Box>
      <Header
        setMenuItem={setMenuItem}
        openModal={openModal}
        setOpenModal={setOpenModal}
        content={getContent()}
        customModalStyles={
          menuItem === "Education"
            ? customModalStyles
            : menuItem === "Skills" && skillsModalStyles
        }
      />
      {renderBannerSection()}
    </Box>
  );
};

export default PortFolioApp;
