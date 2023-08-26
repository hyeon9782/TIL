import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  background: "rgb(233, 236, 239)",
  height: "100vh",
});

export const todoListBlock = style({
  height: 600,
  width: 500,
  background: "white",
  borderRadius: 10,
  padding: 10,
});

export const todayText = style({
  fontWeight: "bold",
  fontSize: "2rem",
});

export const dayText = style({
  color: "gray",
  fontSize: "1.2rem",
});

export const todoText = style({
  color: "rgb(32, 201, 151)",
  fontWeight: "bold",
});

export const todoInput = style({
  width: "100%",
  borderRadius: 3,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "lightgray",
  padding: "10px",
  fontSize: "1rem",
});

export const todoCheckBox = style({
  width: 30,
  height: 30,
});

export const listBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const itemBlock = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ":hover": {
    background: "lightblue",
  },
});

export const checkedItem = style({
  color: "lightgray",
});

export const iconBox = style({
  fontSize: "1.3rem",
  display: "flex",
});

export const flexCenter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle("body", {
  margin: 0,
  boxSizing: "border-box",
});
