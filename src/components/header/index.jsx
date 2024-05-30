import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Box, Modal, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { menuData } from "../../constants/index";
import {
  headerContainerStyles,
  popOverStyles,
  modalStyles,
} from "../header/styles";
import logo from "../../assets/images/avatar(2).svg";
import Chip from "@mui/material/Chip";
import profileImg from "../../assets/images/brother.jpg";

const Header = (props) => {
  // props
  const { setMenuItem, content, openModal, setOpenModal, customModalStyles } =
    props;

  // states:
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleFileDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    link.click();
  };

  const renderLeftSection = () => {
    return (
      <img
        src={logo}
        alt="logo"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
    );
  };

  const renderRightSection = () => {
    return (
      // <Avatar
      //     sx={avartarStyles}
      //     alt="Adarsh Damanellore"
      //     src="/static/images/avatar/1.jpg"
      //     onClick={(event) => setAnchorEl(event.currentTarget)}
      // />
      // <Avatar
      //   sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}
      //   onClick={(event) => setAnchorEl(event.currentTarget)}
      // >
      //   A
      // </Avatar>
      <Chip
        avatar={<Avatar alt="Adarsh" src={profileImg} />}
        label="Explore my profile"
        color="warning"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      />
    );
  };

  const renderPopupSection = () => {
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={popOverStyles}>
          {menuData?.map((item, index) => {
            return (
              <List
                key={index}
                onClick={() => {
                  if (index === 3) {
                    handleFileDownload(item.file);
                  } else {
                    setAnchorEl(null);
                    setMenuItem(item?.title);
                    setOpenModal(true);
                  }
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item?.icon}</ListItemIcon>
                    <ListItemText primary={item?.title} />
                  </ListItemButton>
                </ListItem>
              </List>
            );
          })}
        </Box>
      </Popover>
    );
  };

  const renderModalSection = () => {
    return (
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ ...modalStyles, ...customModalStyles }}>{content}</Box>
      </Modal>
    );
  };
  return (
    <Box sx={headerContainerStyles}>
      {renderLeftSection()}
      {renderRightSection()}
      {renderPopupSection()}
      {renderModalSection()}
    </Box>
  );
};

export default Header;
