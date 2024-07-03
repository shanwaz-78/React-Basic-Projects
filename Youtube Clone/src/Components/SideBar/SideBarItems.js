import React from "react";

function SideBarItems({ icon, name, selectedCategory, setSelectedCategory }) {
  return (
    <button
      className="category-btn"
      style={{
        backgroundColor: name === selectedCategory && "#FC1503",
      }}
      onClick={() => setSelectedCategory(name)}
    >
      <span
        style={{
          color: name === selectedCategory ? "white" : "red",
          paddingRight: "10px",
        }}
      >
        {icon}
      </span>
      <span>{name}</span>
    </button>
  );
}

export default SideBarItems;
