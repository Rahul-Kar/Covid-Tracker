import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  makeStyles,
} from "@material-ui/core";
import "./StateWise.css";
import numeral from "numeral";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderBottom: "none",
    margin: "auto",
    maxWidth: "1100px",
    padding: theme.spacing(5),
    marginBottom: "25px",
  },
  Table: {
    "& thead th": {
      fontWeight: 600,
      color: "#fff",
      backgroundColor: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: 300,
    },
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: "auto",
    borderBottom: "none",
  },
  tblHead: {
    borderBottom: "none",
    padding: theme.spacing(0),
    top: 0,
    position: "sticky",
  },
}));

const StateWise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const api = await fetch("https://api.covid19india.org/data.json");
    const actualData = await api.json();
    console.log(actualData.statewise[0]);
    setData(actualData.statewise);
  };
  console.log(data);
  useEffect(() => {
    getCovidData();
  }, []);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <h4>State Covid Data</h4>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table" className={classes.Table}>
          <TableHead className={classes.tblHead}>
            <TableRow>
              <TableCell>State</TableCell>
              <TableCell>Confirmed</TableCell>
              <TableCell>Recovered</TableCell>
              <TableCell>Death</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tblBody}>
            {data.map((elem, index) => (
              <TableRow className={classes.tblRow} key={index}>
                <TableCell className="state">
                  {/* <strong>{elem.state}</strong> */}
                  {elem.state}
                </TableCell>
                <TableCell>{numeral(elem.confirmed).format("0,0")}</TableCell>
                <TableCell>{numeral(elem.recovered).format("0,0")}</TableCell>
                <TableCell>{numeral(elem.deaths).format("0,0")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

export default StateWise;
