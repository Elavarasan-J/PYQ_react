import React from "react";
import PropTypes from "prop-types";

// Material UI
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  styled,
  tableCellClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //color: "#8f8f8f",
    backgroundColor: "#fff",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "14px",
    //color: theme.palette.secondary.main,
    "& .Mui-active": {
      //color: theme.palette.common.black,
    },
  },
}));

const CustomTableHead = ({
  order,
  orderBy,
  headCells,
  onRequestSort,
  isImage,
}) => {
  const createSortHandler = (property) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow key="table-head">
        {isImage && (
          <StyledTableCell sx={{ lineHeight: "20px" }} key={"img"}>
            Image
          </StyledTableCell>
        )}
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={() => createSortHandler(headCell.id)}
              sx={{
                whiteSpace: "nowrap",
                minWidth: headCell.width ? headCell.width : 150,
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={{ display: "none" }}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

CustomTableHead.propTypes = {
  onRequestSort: PropTypes.func,
  order: PropTypes.oneOf(["asc", "desc"]),
  orderBy: PropTypes.string,
  headCells: PropTypes.array,
};

export default CustomTableHead;
