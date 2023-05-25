import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Monocle", 18908424, "2 March 2023", "Approved"),
  createData("Apple", 18908424, "1 January 2023", "Pending"),
  createData("Greyhound", 18908424, "8 April 2022", "Approved"),
  createData("Virgin", 18908421, "10 May 2022", "Delivered"),
  createData("Amazon", 18908421, "12 July 2022", "Approved"),
  createData("Patagonia", 18908421, "2 March 2022", "Delivered"),
  createData("Nike", 18908421, "2 March 2022", "Pending"),
  createData("CoCaCola", 18948521, "5 March 2022", "Pending"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [filteredRows, setFilteredRows] = useState(rows);
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const handleFilterData = () => {
    const filteredData = rows.filter((row) => row.date.includes("2 March 2022"));
    setFilteredRows(filteredData);
  };

  const handleFilterTrackingID = () => {
    const filteredData = rows.filter((row) => row.trackingId === 18908424);
    setFilteredRows(filteredData);
  };

  const handleResetFilters = () => {
    setFilteredRows(rows);
    setSorting({ field: "", order: "" });
  };

  const handleApprovalStatus = ()=>{
    const filteredData = rows.filter((row)=>row.status === "Approved")
    setFilteredRows(filteredData);
  }

  const handleSort = (field) => {
    let order = "asc";
    if (sorting.field === field && sorting.order === "asc") {
      order = "desc";
    }
    setSorting({ field, order });

    const sortedData = [...filteredRows].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredRows(sortedData);
  };

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <div>
        <button onClick={handleFilterData} type="button">
          Filter by Date
        </button>
        <button onClick={handleFilterTrackingID} type="button">
          Filter by Tracking ID
        </button>
        <button onClick={handleApprovalStatus} type="button">
          Approved 
        </button>
        <button onClick={handleResetFilters} type="button">
          Reset Filters
        </button>
      </div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            
            <TableBody style={{ color: "white" }}>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="left" className="Details">
                    Details
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  
