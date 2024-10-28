import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { FaRegUser } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { SidebarStyled } from "./sidebarstyled";
import { useNavigate } from "react-router-dom";

export default function Sidebar({onSidebar}) {

  const [ team , setTeam] = useState(2);
  const navigate = useNavigate();

  const handleSideIcon = (id) => {
    setTeam((prev) => (prev===id? "" : id))
    onSidebar(id)
  }

  const handleClose = (id) => {
    if(id===3){
      navigate("/signup");
    }
  }

  const SidebarIcons = [
    {
      id: 1,
      icon: <FaRegUser style={SidebarStyled.iconimgsidebar} />,
      iconname: "Profile",
    },
    {
      id: 2,
      icon: <RiTeamLine style={SidebarStyled.iconimgsidebar} />,
      iconname: "Team",
    },
    {
      id: 3,
      icon: <BiMessageDetail style={SidebarStyled.iconimgsidebar} />,
      iconname: "Feedback",
    },
  ];

  const SidebarOptions = [
    {
      id: 1,
      icon: <IoSettingsOutline style={SidebarStyled.iconimgsidebar} />,
    },
    {
      id: 2,
      icon: <GoBell style={SidebarStyled.iconimgsidebar} />,
    },
    {
      id: 3,
      icon: <LiaSignOutAltSolid style={SidebarStyled.iconimgsidebarlogout} />,
    },
  ];

  return (
    <Box sx={SidebarStyled.main}>
      <Box sx={SidebarStyled.top}>
        <Box sx={SidebarStyled.Logocon}>
          <img src={Logo} />
          <Box sx={SidebarStyled.logoname}>V 1.0.02</Box>
        </Box>
        <Divider sx={SidebarStyled.hr} />
        <Box sx={SidebarStyled.sidebars}>
          {SidebarIcons.map((item) => (
            <Box sx={SidebarStyled.iconcon} key={item.id} onClick={() => handleSideIcon(item.id)}>
              <Box sx={ team==item.id ? SidebarStyled.iconimgcontainerclicked : SidebarStyled.iconimgcontainer}>{item.icon}</Box>
              <Box sx={SidebarStyled.sidename}>{item.iconname}</Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={SidebarStyled.bottom}>
        <Box sx={SidebarStyled.options}>
          {SidebarOptions.map((item) => (
            <Box sx={SidebarStyled.iconcon} key={item.id}>
              <Box sx={SidebarStyled.iconimgcontainer} onClick={() => handleClose(item.id)}>{item.icon}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
