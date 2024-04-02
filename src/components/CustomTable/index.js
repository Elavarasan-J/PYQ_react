import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import config from "../../config";

// Material UI
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TablePagination,
  styled,
  Box,
  Tooltip,
  CircularProgress,
  Card,
  Fade,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

// Imports
import { validateArrayData, convertToLabel } from "../../utils";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// Assets
import { IconSearch, IconCloudDownload } from "@tabler/icons";
import CustomTableHead from "./CustomTableHead";
import { themeColors } from "../../theme/themeColors";
import DataNotFound from "../DataNotFound";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: 210,
    "& .MuiInputBase-input": {
      paddingTop: "9px !important",
      paddingBottom: "9px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: 150,
    },
  },
  // customPagination: {
  //   marginBottom: "-15px",
  //   "& .MuiTablePagination-toolbar": {
  //     paddingTop: "10px",
  //     paddingBottom: "0",
  //   },
  // },
  tableRowHover: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&": {
    backgroundColor: "#ffffff",
  },
  "&:nth-of-type(odd)": {
    //backgroundColor: '#fff8e1',
    //backgroundColor: "#FFF7EB",#fbf7f1
  },
  "&:hover": {
    backgroundColor: `#fff8e1 !important`,
  },
}));

const handleFilterData = (data, searchKey, isSearch) => {
  if (isSearch && validateArrayData(data)) {
    const columnList = Object.keys(data[0]);

    return data.filter((each) => {
      return columnList.some((propertyName) =>
        (each[propertyName]
          ? each[propertyName].toString().toLowerCase()
          : ""
        ).includes(searchKey.toLowerCase())
      );
    });
  } else {
    return data;
  }
};

const CustomTable = ({
  title,
  numOfRowsPerPage,
  exportFileName,
  columnOrder,
  data,
  isLoading,
  isSearch,
  isTableExport,
  boxHeight,
  urlColumn,
  isImage,
  imgColumn,
  isAction,
  handleTableRowClick,
  t,
}) => {
  const [searchKey, setSearchKey] = useState("");

  const filteredReportData = handleFilterData(data, searchKey, isSearch);

  const tableHeadCells = validateArrayData(columnOrder)
    ? columnOrder
    : validateArrayData(filteredReportData)
    ? Object.keys(filteredReportData[0]).map((each) => ({
        id: each,
        label: convertToLabel(each),
      }))
    : [];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(numOfRowsPerPage);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";

    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - filteredReportData.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Table Click
  const handleTableClick = (event) => {
    const tableRow = event.target.closest("tr");
    const targetUrl = tableRow.getAttribute("data-url");
    const targetRowID = tableRow.getAttribute("data-row");

    if (event.target.tagName === "IMG" && !!targetUrl)
      window.open(targetUrl, "_blank");
    else if (event.target.tagName === "SPAN" || event.target.tagName === "TH")
      return;
    else handleTableRowClick(targetRowID);
  };

  const BASE_HEIGHT = title ? 135 : 62;
  const classes = useStyles();

  useEffect(() => {
    setPage(0);
  }, [data]);

  return (
    <Fade in>
      <Card elevation={8} sx={{ border: `1px solid ${config.borderColor}` }}>
        <Box style={{ height: `${boxHeight}px` }}>
          <Grid container spacing={1}>
            {title ? (
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ padding: "17px 15px 10px" }}
                >
                  <Grid item>
                    <Typography variant="h4">{title}</Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center">
                      {isSearch ? (
                        <Grid item>
                          <TextField
                            variant="outlined"
                            placeholder={"Search"}
                            className={classes.searchInput}
                            size="small"
                            color="secondary"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <IconSearch />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      ) : null}

                      {isTableExport ? (
                        <Tooltip title="Export CSV" placement="top">
                          <Grid item>
                            <CSVLink
                              data={data}
                              filename={`${exportFileName}.csv`}
                              style={{
                                marginLeft: "12px",
                                textDecoration: "none",
                                color: "black",
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 500,
                              }}
                              target="_blank"
                            >
                              <IconCloudDownload />
                            </CSVLink>
                          </Grid>
                        </Tooltip>
                      ) : null}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ) : null}

            <Grid item xs={12}>
              {isLoading ? (
                <Box
                  display="flex"
                  height={`${boxHeight - BASE_HEIGHT}px`}
                  width="100%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgress color="primary" />
                </Box>
              ) : validateArrayData(data) && !isLoading ? (
                <>
                  <TableContainer>
                    <PerfectScrollbar
                      style={{ maxHeight: `${boxHeight - BASE_HEIGHT}px` }}
                    >
                      <Table
                        stickyHeader
                        onClick={
                          isAction ? () => handleTableClick(event) : null
                        }
                      >
                        <CustomTableHead
                          order={order}
                          orderBy={orderBy}
                          onRequestSort={handleRequestSort}
                          headCells={tableHeadCells}
                          isImage={isImage}
                        />
                        <TableBody>
                          {stableSort(
                            filteredReportData,
                            getComparator(order, orderBy)
                          )
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => {
                              return (
                                <StyledTableRow
                                  tabIndex={-1}
                                  key={index}
                                  // style={{ height: "75px" }}
                                  hover
                                  className={classes.tableRowHover}
                                  // onClick={() => {
                                  //   if (urlColumn && !isImage && !isAction)
                                  //     window.open(row[urlColumn], "_blank");
                                  //   else if (isAction) {
                                  //     onClickAction(row);
                                  //   }
                                  // }}
                                  data-url={isAction ? row[urlColumn] : null}
                                  data-row={index}
                                >
                                  {isImage && (
                                    <TableCell
                                      key={`${index}-img`}
                                      scope="row"
                                      // onClick={() => {
                                      //   if (urlColumn)
                                      //     window.open(row[urlColumn], "_blank");
                                      // }}
                                    >
                                      <img
                                        src={row[imgColumn]}
                                        style={{
                                          width: "75px",
                                          height: "75px",
                                          objectFit: "cover",
                                          borderRadius: "3px",
                                        }}
                                      />
                                    </TableCell>
                                  )}
                                  {tableHeadCells.map((cell, cellIndex) => (
                                    <TableCell
                                      key={`${index}-${
                                        row[cell.id]
                                      } -${cellIndex}`}
                                      scope="row"
                                    >
                                      {row[cell.id]}
                                    </TableCell>
                                  ))}
                                </StyledTableRow>
                              );
                            })}
                          {emptyRows > 0 && (
                            <TableRow
                              style={{
                                height: 54 * emptyRows,
                              }}
                            >
                              <TableCell colSpan={6} />
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </PerfectScrollbar>
                  </TableContainer>

                  <TablePagination
                    rowsPerPageOptions={[numOfRowsPerPage, 15, 20]}
                    component="div"
                    count={filteredReportData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    classes={{ root: classes.customPagination }}
                  />
                </>
              ) : (
                <Box height={`${boxHeight - BASE_HEIGHT}px`}>
                  <DataNotFound />
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Fade>
  );
};

CustomTable.propTypes = {
  title: PropTypes.string,
  numOfRowsPerPage: PropTypes.number,
  exportFileName: PropTypes.string.isRequired,
  columnOrder: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  isSearch: PropTypes.bool,
  isTableExport: PropTypes.bool,
  boxHeight: PropTypes.number.isRequired,
  urlColumn: PropTypes.string,
  isImage: PropTypes.bool,
  imgColumn: PropTypes.string,
  isAction: PropTypes.bool,
  handleTableRowClick: PropTypes.func,
};

CustomTable.defaultProps = {
  exportFileName: "Table_Report",
  isSearch: false,
  isAction: false,
  isTableExport: false,
  isImage: false,
  handleTableRowClick: () => {
    return;
  },
};

export default CustomTable;
