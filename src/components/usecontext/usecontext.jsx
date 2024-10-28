import React, { createContext, useState } from "react";

export const TeamContext = createContext();

const initialData = [
  {
    id: "1",
    name: "Oliver Hansen",
    designation: "Visual Designer",
    department: "Engineering",
    signals: "C E T D U",
    performance: "Good",
    reporting: "Van Henry",
    role: "Manager",
    email: "oliverhansen15@gamail.com",
    experience: "3 Yrs 4 Mon",
    status: "Active",
    actions: "Add feedback"
  },
  {
    id: "2",
    name: "Ralph Hubbard",
    designation: "Visual Designer",
    department: "Engineering",
    signals: "C E T D U",
    performance: "Good",
    reporting: "Omar Alexander",
    role: "Employee",
    email: "miriamwagner23@gmail.com",
    experience: "3 Yrs 4 Mon",
    status: "Active",
    actions: "Add feedback"
  },
];

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState(initialData);
  const initialId = 3;

  const addMember = (newMember) => {
    const memberWithId = {
      ...newMember,
      id: teamMembers.length > 0 ? teamMembers[teamMembers.length - 1].id + 1 : initialId,
    };
    setTeamMembers((prevMembers) => [...prevMembers, memberWithId]);
  };

  return (
    <TeamContext.Provider value={{ teamMembers, addMember }}>
      {children}
    </TeamContext.Provider>
  );
};
