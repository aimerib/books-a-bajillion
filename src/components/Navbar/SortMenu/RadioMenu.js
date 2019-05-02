import React from "react";
import { useGlobal } from "reactn";
import { makeStyles } from "@material-ui/styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Typography from "@material-ui/core/Typography";
import { primaryColor } from "../../../constants";

const useStyles = makeStyles({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor
    }
  },
  checked: {},
  typography: {
    fontSize: 18,
    fontWeight: "bold",
    color: primaryColor
  }
});

export default function RadioMenu() {
  const classes = useStyles();
  const [sortOrder, setSortOrder] = useGlobal("sortOrder");

  function handleChange({ target: { value } }) {
    setSortOrder(value);
  }

  return (
    <div style={{ marginLeft: 10, marginRight: 10 }}>
      <RadioGroup
        aria-label="Sort Order"
        name="sort-order"
        value={sortOrder}
        onChange={handleChange}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <FormControlLabel
          value="ascending"
          control={
            <Radio
              classes={{
                root: classes.root,
                checked: classes.checked
              }}
            />
          }
          label={
            <Typography classes={{ root: classes.typography }}>
              Ascending
            </Typography>
          }
        />
        <FormControlLabel
          value="descending"
          control={
            <Radio
              classes={{
                root: classes.root,
                checked: classes.checked
              }}
            />
          }
          label={
            <Typography classes={{ root: classes.typography }}>
              Descending
            </Typography>
          }
        />
      </RadioGroup>
    </div>
  );
}
