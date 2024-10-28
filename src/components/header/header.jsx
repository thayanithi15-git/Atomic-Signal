import {
  Badge,
  Box,
  Button,
  Checkbox,
  Dialog,
  Divider,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { HeaderStyled } from "./headerstyled";
import { BiFilterAlt } from "react-icons/bi";
import { TbFileTypeXls } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { TeamContext } from "../usecontext/usecontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosSearch } from "react-icons/io";
import { LoginStyled } from "../login/loginstyled";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function Header({ onSearch }) {
  const [Add, setAdd] = useState(false);
  const [Filter, setFilter] = useState(false);
  const [selectedPerformance, setSelectedPerformance] = useState("Impactful");
  const [selectedRole, setSelectedRole] = useState("Impactful");
  const { addMember } = useContext(TeamContext);
  const [Popup, setPopup] = useState(false);
  const [Welcome, setWelcome] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    designation: "",
    department: "",
    signals: "C E T D U",
    performance: "",
    reporting: "",
    role: "",
    email: "",
    experience: "",
    status: "Active",
    actions: "Add feedback",
  });

  useEffect(() => {
    setWelcome(true);

    const timer = setTimeout(() => {
      setWelcome(false);
      setPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  const handleAdd = () => {
    setAdd(true);
  };

  const handleFilter = () => {
    setFilter(true);
  };

  const handlePerformanceClick = (performance) => {
    setSelectedPerformance(performance);
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const performanceOptions = [
    ["Impactful", "Spectacular", "Very Good"],
    ["Good", "Need to improve"],
    ["Need to improve a lot", "Completely away"],
  ];

  const handleCloseDialog = () => {
    setAdd(false);
    setFilter(false);
  };

  const handleInputChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (event) => {
    setNewMember({ ...newMember, role: event.target.value });
  };

  const handleDesignationChange = (event) => {
    setNewMember({ ...newMember, designation: event.target.value });
  };

  const handleDateChange = (date) => {
    setNewMember({ ...newMember, date });
  };

  const handleAddMember = () => {
    const { name, designation, department, reporting, role, email, date } =
      newMember;

    if (
      !name ||
      !designation ||
      !department ||
      !reporting ||
      !role ||
      !email ||
      !date
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const calculateExperience = (startDate) => {
      const start = dayjs(startDate, "DD-MM-YYYY");
      const now = dayjs();

      let years = now.year() - start.year();
      let months = now.month() - start.month();

      const today = dayjs();
      if (date && dayjs(date).isAfter(today, "month")) {
        toast.error("Please enter a date within the current month and year.");
        return;
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      return `${years} Yrs ${months} Mon`;
    };

    const experienceFormatted = calculateExperience(date);

    addMember({ ...newMember, experience: experienceFormatted });

    setNewMember({
      name: "",
      designation: "",
      department: "",
      signals: "C E T D U",
      performance: "",
      reporting: "",
      role: "",
      email: "",
      experience: "",
      status: "Active",
      actions: "Add feedback",
    });

    setPopup(true);
    setAdd(false);

    setTimeout(() => {
      setPopup(false);
    }, 3000);
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const designations = [
    "Visual Designer",
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
    "Mobile App Developer",
    "UI Designer",
  ];

  const roles = ["Design", "Engineering", "Development", "Training"];

  return (
    <Box sx={HeaderStyled.header}>
      <Box sx={HeaderStyled.teammembers}>Team members</Box>
      <Box sx={HeaderStyled.rightoptions}>
        <Box sx={HeaderStyled.checkboxname}>
          <Checkbox defaultChecked sx={HeaderStyled.checkbox} />
          <Box sx={HeaderStyled.show}>Show only my reportees</Box>
        </Box>
        <Box sx={HeaderStyled.inputcontainer}>
          <TextField
            sx={HeaderStyled.input}
            placeholder="Search by name, email"
            onChange={handleSearchChange}
            inputProps={{
              style: { ...HeaderStyled.inputsvaluefonts },
            }}
          />
          <IoIosSearch style={HeaderStyled.searchicon} />
        </Box>
        <Box sx={HeaderStyled.filter} onClick={handleFilter}>
          <Badge
            color="error"
            overlap="circular"
            badgeContent=" "
            variant="dot">
            <BiFilterAlt style={HeaderStyled.importicon} />
          </Badge>
        </Box>
        <Divider sx={HeaderStyled.hr} />
        <Button sx={HeaderStyled.import}>
          <TbFileTypeXls style={HeaderStyled.importicon} />
          <Box>Import</Box>
        </Button>
        <Button sx={HeaderStyled.addmember} onClick={handleAdd}>
          Add member
        </Button>
      </Box>
      {Add || Filter ? (
        <RxCross2
          style={HeaderStyled.dialoground}
          onClick={handleCloseDialog}
        />
      ) : (
        ""
      )}
      <Dialog
        fullScreen
        open={Add}
        onClose={() => setAdd(false)}
        sx={HeaderStyled.dialog}>
        <Box sx={HeaderStyled.adddialog}>
          <Box sx={HeaderStyled.addmembertitlecon}>
            <Box sx={HeaderStyled.addmembertitle}>Add member</Box>
          </Box>
          <Box sx={HeaderStyled.allinput}>
            <Box sx={HeaderStyled.nameinputs}>
              <Box sx={HeaderStyled.nameasterisk}>
                <Box>Name</Box>
                <Box sx={HeaderStyled.asterisk}>*</Box>
              </Box>
              <TextField
                name="name"
                value={newMember.name}
                onChange={handleInputChange}
                placeholder="Type name"
                sx={HeaderStyled.inputs}
                inputProps={{
                  style: { ...HeaderStyled.inputsvaluefonts },
                }}
              />
            </Box>
            <Box sx={HeaderStyled.nameinputs}>
              <Box sx={HeaderStyled.nameasterisk}>
                <Box>Email</Box>
                <Box sx={HeaderStyled.asterisk}>*</Box>
              </Box>
              <TextField
                name="email"
                value={newMember.email}
                onChange={handleInputChange}
                placeholder="Type email"
                sx={HeaderStyled.inputs}
                inputProps={{
                  style: { ...HeaderStyled.inputsvaluefonts },
                }}
              />
            </Box>

            <Box sx={HeaderStyled.nameinputs}>
              <Box sx={HeaderStyled.nameasterisk}>
                <Box>Date of joining</Box>
                <Box sx={HeaderStyled.asterisk}>*</Box>
              </Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={newMember.date}
                  onChange={handleDateChange}
                  sx={HeaderStyled.inputs}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select date" />
                  )}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={HeaderStyled.nameinputs}>
              <Box sx={HeaderStyled.nameasterisk}>
                <Box>Department</Box>
              </Box>
              <TextField
                name="department"
                value={newMember.department}
                onChange={handleInputChange}
                placeholder="Type department"
                sx={HeaderStyled.inputs}
                inputProps={{
                  style: { ...HeaderStyled.inputsvaluefonts },
                }}
              />
            </Box>
            <Box sx={HeaderStyled.nameinputs}>
              <Box sx={HeaderStyled.nameasterisk}>
                <Box>Designation</Box>
                <Box sx={HeaderStyled.asterisk}>*</Box>
              </Box>
              <FormControl fullWidth size="small" sx={{ marginBottom: 2 }}>
                <Select
                  displayEmpty
                  value={newMember.designation}
                  onChange={handleDesignationChange}
                  input={<OutlinedInput />}
                  sx={HeaderStyled.inputsselect}
                  renderValue={(selected) => {
                    if (!selected)
                      return (
                        <em style={HeaderStyled.placeholder}>Designation</em>
                      );
                    return selected;
                  }}>
                  {designations.map((designation) => (
                    <MenuItem
                      key={designation}
                      value={designation}
                      sx={HeaderStyled.items}>
                      {designation}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={HeaderStyled.nameinputs}>
              <Box sx={HeaderStyled.nameasterisk}>
                <Box>Role</Box>
                <Box sx={HeaderStyled.asterisk}>*</Box>
              </Box>
              <FormControl fullWidth size="small" sx={{ marginBottom: 2 }}>
                <Select
                  displayEmpty
                  value={newMember.role}
                  onChange={handleRoleChange}
                  input={<OutlinedInput />}
                  sx={HeaderStyled.inputsselect}
                  renderValue={(selected) => {
                    if (!selected)
                      return <em style={HeaderStyled.placeholder}>Role</em>;
                    return selected;
                  }}>
                  {roles.map((role) => (
                    <MenuItem key={role} value={role} sx={HeaderStyled.items}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={HeaderStyled.nameinputs}>
              <Box sx={HeaderStyled.nameasterisk}>
                <Box>Reporting to</Box>
              </Box>

              <FormControl fullWidth size="small">
                <Select
                  displayEmpty
                  value={newMember.reporting}
                  onChange={(e) =>
                    setNewMember({ ...newMember, reporting: e.target.value })
                  }
                  input={<OutlinedInput />}
                  sx={HeaderStyled.inputsselect}
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={HeaderStyled.placeholder}>Manager name</em>
                      );
                    }
                    return selected;
                  }}>
                  {names.map((name) => (
                    <MenuItem key={name} value={name} sx={HeaderStyled.items}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={HeaderStyled.bottomdialogbuttons}>
              <Button
                sx={HeaderStyled.addmemberconfirm}
                onClick={handleAddMember}>
                Add member
              </Button>
              <Button
                onClick={() => setAdd(false)}
                sx={HeaderStyled.cancelconfirm}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Dialog>
      <Dialog
        fullScreen
        open={Filter}
        onClose={() => setFilter(false)}
        sx={HeaderStyled.dialog}>
        <Box sx={HeaderStyled.adddialog}>
          <Box sx={HeaderStyled.addmembertitlecon}>
            <Box sx={HeaderStyled.addmembertitle}>Filters</Box>
          </Box>
          <Box sx={HeaderStyled.allinputfilter}>
            <Box sx={HeaderStyled.filtermain}>
              <Box sx={HeaderStyled.performancetypes}>
                <Box sx={HeaderStyled.overallperform}>Overall performance</Box>
                {performanceOptions.map((row, rowIndex) => (
                  <Box key={rowIndex} sx={HeaderStyled.eachperform}>
                    {row.map((performance) => (
                      <Button
                        key={performance}
                        sx={
                          selectedPerformance === performance
                            ? HeaderStyled.performclick
                            : HeaderStyled.perform
                        }
                        onClick={() => handlePerformanceClick(performance)}>
                        {performance}
                      </Button>
                    ))}
                  </Box>
                ))}
              </Box>
              <Box sx={HeaderStyled.nameinputs}>
                <Box sx={HeaderStyled.nameasterisk}>
                  <Box>Department</Box>
                </Box>
                <TextField
                  sx={HeaderStyled.inputs}
                  placeholder="Select"
                  inputProps={{
                    style: { ...HeaderStyled.inputsvaluefonts },
                  }}
                />
              </Box>
              <Box sx={HeaderStyled.nameinputs}>
                <Box sx={HeaderStyled.nameasterisk}>
                  <Box>Designation</Box>
                </Box>
                <TextField
                  sx={HeaderStyled.inputs}
                  placeholder="Select"
                  inputProps={{
                    style: { ...HeaderStyled.inputsvaluefonts },
                  }}
                />
              </Box>
              <Box sx={HeaderStyled.nameinputs}>
                <Box sx={HeaderStyled.nameasterisk}>
                  <Box>Reporting to</Box>
                </Box>
                <TextField
                  sx={HeaderStyled.inputs}
                  placeholder="Name"
                  inputProps={{
                    style: { ...HeaderStyled.inputsvaluefonts },
                  }}
                />
              </Box>
              <Box sx={HeaderStyled.roletitle}>
                <Box sx={HeaderStyled.nameasterisk}>Role</Box>
                <Box sx={HeaderStyled.eachperform}>
                  {["Impactful", "Spectacular", "Very Good"].map((role) => (
                    <Button
                      key={role}
                      sx={
                        selectedRole === role
                          ? HeaderStyled.performclick
                          : HeaderStyled.perform
                      }
                      onClick={() => handleRoleClick(role)}>
                      {role}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box sx={HeaderStyled.bottomdialogbuttonsfilter}>
              <Button sx={HeaderStyled.addmemberconfirm}>Apply filter</Button>
              <Button sx={HeaderStyled.cancelconfirm}>Reset</Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
      {Popup ? (
        <Box sx={LoginStyled.popuphome}>
          <Box sx={LoginStyled.popupin}>
            <Box>Team member added successfully</Box>
            <Divider orientation="vertical" sx={LoginStyled.hrtag} />
            <RxCross2
              style={LoginStyled.cross}
              onClick={() => setPopup(false)}
            />
          </Box>
        </Box>
      ) : (
        ""
      )}
      {Welcome ? (
        <Box sx={LoginStyled.popupwelcome}>
          <Box sx={LoginStyled.popupin}>
            <Box>Welcome! Have a great day</Box>
            <Divider orientation="vertical" sx={LoginStyled.hrtag} />
            <RxCross2
              style={LoginStyled.cross}
              onClick={() => setWelcome(false)}
            />
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
