import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  background: "lightgray",
  height: "100vh",
});

export const todoListBlock = style({
  height: 600,
  width: 500,
  background: "white",
  borderRadius: 10,
});

export const listBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const itemBlock = style({
  display: "flex",
});

export const flexCenter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle("body", {
  margin: 0,
});
