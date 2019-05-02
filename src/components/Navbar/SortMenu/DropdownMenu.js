import React from "react";
import { useGlobal } from "reactn";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import SvgIcon from "@material-ui/core/SvgIcon";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { primaryColor } from "../../../constants";

const useStyles = makeStyles({
  formControl: {
    margin: 10,
    minWidth: 275,
    color: primaryColor
  },
  icon: {
    fill: primaryColor,
    position: "absolute",
    top: "-2px",
    right: "-2px",
    display: "inline-block",
    color: "#c0c0c0",
    width: "32px",
    height: "35px",
    pointerEvents: "none"
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid #ced4da",
    fontSize: 15,
    width: "auto",
    "&:focus": {
      border: "none",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    },
    "&:before": {
      border: "none"
    },
    "&:after": {
      border: "none"
    },
    "&&&&:hover:before": {
      borderBottom: "none"
    }
  }
});

const DropDownIcon = props => (
  <SvgIcon {...props}>
    <svg
      width="24"
      height="25"
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 2.5H27C28.3807 2.5 29.5 3.61929 29.5 5V29.1818C29.5 30.5625 28.3807 31.6818 27 31.6818H2.5V2.5Z"
        stroke="#662567"
        strokeOpacity="0.75"
        strokeWidth="5"
      />
      <path
        d="M16.0001 24.7273L24.8178 13.2727H7.18234L16.0001 24.7273Z"
        fill="#662567"
        fillOpacity="0.75"
      />
    </svg>
  </SvgIcon>
);

export default function DropdownMenu() {
  const [sort, setSort] = useGlobal("sort");

  const classes = useStyles();

  function handleChange({ target: { value } }) {
    setSort(value);
  }

  return (
    <form style={{ justifyItems: "flex-start" }} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel style={{ zIndex: 10 }} htmlFor="age-simple">
          <Typography style={{ color: primaryColor }}>Sort by:</Typography>
        </InputLabel>
        <Select
          value={sort}
          onChange={handleChange}
          className={classes.input}
          IconComponent={DropDownIcon}
          inputProps={{
            classes: {
              icon: classes.icon
            }
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"title"}>Title</MenuItem>
          <MenuItem value={"author"}>Author</MenuItem>
          <MenuItem value={"year"}>Year</MenuItem>
          <MenuItem value={"isbn"}>ISBN</MenuItem>
          <MenuItem value={"rating"}>Rating</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
