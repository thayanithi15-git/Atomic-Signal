import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Profile1 from "../../assets/PROFILE 1.png";
import Profile2 from "../../assets/PROFILE 2.png";
import Profile3 from "../../assets/PROFILE 3.png";
import Profile4 from "../../assets/PROFILE 4.png";
import Profile5 from "../../assets/PROFILE 5.png";
import Profile6 from "../../assets/PROFILE 6.png";
import Profile7 from "../../assets/PROFILE 7.png";
import Profile8 from "../../assets/PROFILE 8.jpg";
import Profile9 from "../../assets/PROFILE 9.png";
import Profile10 from "../../assets/PROFILE 10.png";
import { TableStyled } from "./tablesstyled";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Avatar, Button, Dialog, TextField, Tooltip } from "@mui/material";
import ReactSpeedometer from "react-d3-speedometer";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TeamContext } from "../usecontext/usecontext";
import { useContext, useEffect, useState } from "react";
import { HeaderStyled } from "../header/headerstyled";
import { RxCross2 } from "react-icons/rx";

const columns = [
  { id: "name", label: "Name", minWidth: 200 },
  { id: "designation", label: "Designation", minWidth: 160 },
  { id: "department", label: "Department", minWidth: 140 },
  { id: "signals", label: "Signals", minWidth: 70 },
  {
    id: "performance",
    label: "Overall performance",
    minWidth: 188,
    align: "center",
  },
  { id: "reporting", label: "Reporting to", minWidth: 230 },
  { id: "role", label: "Role", minWidth: 120 },
  { id: "email", label: "Email", minWidth: 280 },
  { id: "experience", label: "Experience", minWidth: 120 },
  { id: "status", label: "Status", minWidth: 120 },
  {
    id: "actions",
    label: "Actions",
    minWidth: 190,
    sticky: true,
    align: "center",
  },
];

const profileImages = {
  "Oliver Hansen": Profile1,
  "Van Henry": Profile2,
  "April Tucker": Profile3,
  "Ralph Hubbard": Profile4,
  "Omar Alexander": Profile5,
  "Carlos Abbott": Profile6,
  "Miriam Wagner": Profile7,
  "Bradley Wilkerson": Profile8,
  "Virginia Andrews": Profile9,
  "Kelly Snyder": Profile10,
};

const signalColors = {
  C: "#007C32",
  E: "#4C9E29",
  T: "#F2B824",
  D: "#F2EB24",
  U: "#DE1010",
};

const SignalIcons = ({ signals }) => {
  return (
    <Box sx={TableStyled.signaliconscon}>
      {signals.split(" ").map((signal) => (
        <Box
          key={signal}
          sx={{
            ...TableStyled.signalmain,
            backgroundColor: signalColors[signal] || "#ccc",
          }}>
          {signal}
        </Box>
      ))}
    </Box>
  );
};

export default function ColumnGroupingTable({ filterText }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const { teamMembers } = useContext(TeamContext);
  const [Add, setAdd] = useState(false);

  const handleEdit = (id) => {
    const selectedMember = rows.find((member) => member.id === id);
    if (selectedMember) {
      setNewMember(selectedMember);
      setAdd(true);
    }
  };

  const handleSave = () => {
    setRows((prevRows) =>
      prevRows.map((member) =>
        member.id === newMember.id ? newMember : member
      )
    );
    setAdd(false);
  };

  const handleInputChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const [newMember, setNewMember] = useState({
    name: "",
    designation: "",
    department: "",
    signals: "",
    performance: "",
    reporting: "",
    role: "",
    email: "",
    experience: "",
    status: "Active",
    actions: "Add feedback",
  });

  useEffect(() => {
    if (teamMembers) {
      setRows(teamMembers);
    }
  }, [teamMembers]);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(filterText.toLowerCase()) ||
      row.email.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    if (teamMembers) {
      const initializedRows = teamMembers.map((member) => ({
        ...member,
        isChecked: true,
      }));
      setRows(initializedRows);
    }
  }, [teamMembers]);

  const handleChange = (id) => {
    console.log(id);
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, isChecked: !row.isChecked } : row
      )
    );
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 38,
    height: 23,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 18,
      height: 18,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <Paper sx={TableStyled.tablePaper}>
      <TableContainer sx={TableStyled.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    ...TableStyled.tableCell,
                    minWidth: column.minWidth,
                    position: column.sticky ? "sticky" : "static",
                    right: column.sticky ? 0 : "auto",
                    backgroundColor: column.sticky ? "#fff" : "inherit",
                    zIndex: column.sticky ? 1 : "auto",
                    borderLeft:
                      column.id === "actions" ? "2px solid #EDEDED" : "none",
                  }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{
                          ...TableStyled.cellContent,
                          position: column.sticky ? "sticky" : "static",
                          right: column.sticky ? 0 : "auto",
                          backgroundColor: column.sticky ? "#fff" : "inherit",
                          zIndex: column.sticky ? 1 : "auto",
                        }}>
                        {column.id === "status" ? (
                          <Box>
                            <FormControlLabel
                              control={
                                <IOSSwitch
                                  sx={{ m: 1 }}
                                  checked={row.isChecked}
                                  onChange={() => handleChange(row.id)}
                                />
                              }
                              label={row.isChecked ? "Active" : "Deactive"}
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  ...HeaderStyled.inputsvaluefonts,
                                },
                              }}
                            />
                          </Box>
                        ) : column.id === "signals" ? (
                          <SignalIcons signals={value} />
                        ) : column.id === "name" ? (
                          <Box sx={TableStyled.profilename}>
                            <Avatar
                              src={profileImages[row.name] || ""}
                              alt={row.name}
                            />
                            {value}
                          </Box>
                        ) : column.id === "reporting" ? (
                          <Box sx={TableStyled.profilename}>
                            <Avatar
                              src={profileImages[row.reporting] || ""}
                              alt={row.reporting}
                            />
                            {value}
                          </Box>
                        ) : column.id === "performance" ? (
                          <Tooltip
                            title={
                              <span style={TableStyled.inputsvaluefonts}>
                                Overall Need to improve
                              </span>
                            }
                            arrow>
                            <Box sx={TableStyled.speedometercon}>
                              <ReactSpeedometer
                                style={TableStyled.speedometer}
                                width={100}
                                height={50}
                                maxValue={150}
                                value={70.7}
                                needleColor="#000000"
                                needleHeightRatio={0.4}
                                needleWidthRatio={0.1}
                                segmentColors={[
                                  "#d73027",
                                  "#fc8d59",
                                  "#fee08b",
                                  "#91cf60",
                                  "#1a9850",
                                ]}
                                customSegmentStops={[0, 30, 60, 90, 120, 150]}
                                ringWidth={5}
                                needleTransitionDuration={2000}
                                needleTransition="easeElastic"
                                currentValueText=" "
                                textColor="transparent"
                                forceRender={true}
                                arcWidth={1}
                                cornerRadius={6}
                              />
                            </Box>
                          </Tooltip>
                        ) : column.id === "actions" ? (
                          <Box sx={TableStyled.actions}>
                            <Button sx={TableStyled.feedback}>
                              Add feedback
                            </Button>
                            <MdOutlineModeEditOutline
                              style={TableStyled.edit}
                              onClick={() => handleEdit(row.id)}
                            />
                          </Box>
                        ) : column.id === "experience" ? (
                          <Box>{value}</Box>
                        ) : (
                          <Box>{value}</Box>
                        )}
                        {column.id === "actions" && (
                          <Box style={TableStyled.actionsBorder} />
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={TableStyled.tablePagination}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {Add ? (
        <RxCross2
          style={HeaderStyled.dialoground}
          onClick={() => setAdd(false)}
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
            <Box sx={HeaderStyled.addmembertitle}>Edit member</Box>
          </Box>
          <Box sx={HeaderStyled.allinput}>
            {renderDialogFields(newMember, handleInputChange)}
            <Box sx={HeaderStyled.bottomdialogbuttons}>
              <Button onClick={handleSave} sx={HeaderStyled.addmemberconfirm}>
                Save
              </Button>
              <Button
                onClick={() => setAddDialogOpen(false)}
                sx={HeaderStyled.cancelconfirm}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Paper>
  );
}

function renderDialogFields(member, onChange) {
  const fields = [
    { label: "Name", name: "name", required: true },
    { label: "Email", name: "email", required: true },
    { label: "Date of joining", name: "date" },
    { label: "Department", name: "department" },
    { label: "Designation", name: "designation", required: true },
    { label: "Role", name: "role", required: true },
    { label: "Reporting to", name: "reporting" },
  ];
  return fields.map(({ label, name, required }) => (
    <Box sx={HeaderStyled.nameinputs} key={name}>
      <Box sx={HeaderStyled.nameasterisk}>
        <Box>{label}</Box>
        {required && <Box sx={HeaderStyled.asterisk}>*</Box>}
      </Box>
      <TextField
        name={name}
        value={member[name] || ""}
        onChange={onChange}
        placeholder={`Type ${label.toLowerCase()}`}
        sx={HeaderStyled.inputs}
        inputProps={{ style: HeaderStyled.inputsvaluefonts }}
      />
    </Box>
  ));
}
