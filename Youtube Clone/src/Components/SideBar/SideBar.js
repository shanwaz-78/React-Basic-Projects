import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";
import SideBarItems from "./SideBarItems";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ icon, name }, index) => {
        return (
          <SideBarItems
            icon={icon}
            name={name}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            key={index}
          />
        );
      })}
    </Stack>
  );
};

export default SideBar;
