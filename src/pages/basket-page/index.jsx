/** @format */

import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CardContext } from "../../context/card-context";
import Button from "@mui/material/Button";
import RemoveItemModal from "../../components/basket-modal/remove-item-modal";
import { Link } from "react-router-dom";
function createData(id, name, image, count, price, total) {
  return {
    id,
    name,
    image,
    count,
    price,
    total,
  };
}

const rows = [
  createData(
    1,
    "Cupcake",
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    3,
    67,
    191
  ),
  createData(
    2,
    "Donut",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    25.0,
    51,
    4.9
  ),
  createData(
    3,
    "Eclair",
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    16.0,
    24,
    6.0
  ),
  createData(
    4,
    "Frozen yoghurt",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    6.0,
    24,
    4.0
  ),
  createData(
    5,
    "Gingerbread",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    16.0,
    49,
    3.9
  ),
  createData(
    6,
    "Honeycomb",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    3.2,
    87,
    6.5
  ),
];

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

const headCells = [
  {
    id: "chekbox",
    numeric: true,
    disablePadding: false,
    label: "",
  },
  {
    id: "image",
    numeric: true,
    disablePadding: false,
    label: " ",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "PRODUCT NAME",
  },
  {
    id: "count",
    numeric: true,
    disablePadding: false,
    label: "COUNT",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "PRICE",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "TOTAL",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            className="dark:text-white">
            {headCell.id !== "image" ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                className="dark:text-white">
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <div className="w-full flex items-center">
          <div className="h-1.5 flex-grow bg-slate-100 dark:bg-gray-600"></div>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 700,
              fontSize: "32px",
              mx: 3,
            }}
            variant="h6"
            id="tableTitle"
            component="div">
            Basket
          </Typography>
          <div className="h-1.5 flex-grow bg-slate-100 dark:bg-gray-600"></div>
        </div>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("image");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(55);

  const { basket, deleteItem, addToCard, removeFromCard } =
    useContext(CardContext);
  const [productToDelete, setProductToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onlyOneItemDelete, setOnlyOneItemDelete] = useState(false);

  // Delete selected rows from the basket
  const handleDeleteSelected = () => {
    if (selected.length > 0) {
      setIsModalOpen(true);
    }
  };
  const showDeleteModal = (product) => {
    setOnlyOneItemDelete(true);
    setProductToDelete(product);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (!onlyOneItemDelete) {
      //selected item delete
      selected.forEach((id) => {
        const productToDelete = basket.products.find((item) => item.id == id);
        deleteItem(productToDelete);
      });
      setSelected([]);
      setIsModalOpen(false);
    } else {
      // one buy one item delete
      deleteItem(productToDelete);

      setOnlyOneItemDelete(false);
      setIsModalOpen(false);
    }
  };

  const hundelCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - basket.products.length)
      : 0;

  const visibleRows = basket.products.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box
      sx={{
        width: "70%",
        mx: "auto",
      }}>
      <Paper sx={{ width: "100%", mb: 6, pb: 6 }}>
        {/* Conditional Rendering: If basket is empty, display "Basket is empty" */}
        {basket.products.length === 0 ? (
          <Typography
            variant="h6"
            align="center"
            sx={{ padding: 2, fontSize: "24px", fontWeight: "bold" }}
            className="dark:text-white font-bold">
            <div className="flex items-center gap-x-6 justify-center">
              <div className="w-64 h-1.5 bg-slate-300"></div>
              <div className="text-slate-400">Basket is empty</div>
              <div className="w-64 h-1.5 bg-slate-300"></div>
            </div>
          </Typography>
        ) : (
          <>
            {/* Table Headers (Hidden when basket is empty) */}
            <Typography
              variant="h4"
              align="center"
              sx={{ padding: 2, fontSize: "28px", fontWeight: "bold" }}
              className="dark:text-white">
              <div className="flex items-center gap-x-6 justify-center">
                <div className="w-64 h-1 bg-slate-300"></div>
                <div>
                  <p>Your orders</p>
                </div>
                <div className="w-64 h-1 bg-slate-300"></div>
              </div>
            </Typography>
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}>
                <TableHead>
                  <TableRow sx={{ flex: "flex", alignItems: "items-center" }}>
                    {" "}
                    {headCells.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                        className="dark:text-white"
                        sx={{ verticalAlign: "midle" }}>
                        {" "}
                        {/* Added styling */}
                        <TableSortLabel className="dark:text-white">
                          {headCell.label}{" "}
                          {/* Display the label for each header */}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                    {/* All delete button visibilite */}
                    {selected.length > 0 && (
                      <div className="mt-2">
                        <Tooltip title="Delete">
                          <IconButton>
                            <DeleteIcon onClick={handleDeleteSelected} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{
                          cursor: "pointer",
                        }}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            onClick={(event) => handleClick(event, row.id)}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>

                        <TableCell
                          sx={({ paddingRight: "0px" }, { width: "80px" })}
                          align="right">
                          <img
                            className="w-11 h-11 bg-contain"
                            src={row.image}
                            alt={row.title}
                          />
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none">
                          {row.title}
                        </TableCell>
                        <TableCell sx={{ width: "4%" }}>
                          <div className="flex items-center pl-6 w-full justify-between gap-x-1">
                            <AiOutlineMinusCircle
                              className="text-base text-gray-600"
                              onClick={() => removeFromCard(row)}
                            />

                            <div align="center" className="text-gray-600">
                              {row.count}
                            </div>
                            {/* continue dark mode class */}
                            <AiOutlinePlusCircle
                              className="text-base text-gray-600 dark:text-gray-400"
                              onClick={() => addToCard(row)}
                            />
                          </div>
                        </TableCell>
                        <TableCell align="right" className="dark:text-white">
                          {row.price} AZN
                        </TableCell>
                        <TableCell align="right" className="dark:text-white">
                          {row.totalRow.toFixed(2)} AZN
                        </TableCell>
                        <TableCell
                          align="right"
                          className="flex items-center justify-center">
                          <RiDeleteBin2Line
                            className="active:text-slate-950 text-gray-600 dark:text-gray-400"
                            onClick={() => showDeleteModal(row)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="w-full flex flex-col items-end mt-7  gap-y-3">
              <div className="w-36 flex justify-end text-xl font-bold ">{`${basket.total.toFixed(
                2
              )} AZN`}</div>

              <Button
                to="/new-order"
                LinkComponent={Link}
                variant="outlined"
                className="flex items-center"
                sx={{
                  width: "240px",
                  borderRadius: "16px",
                  padding: "2px 25px",
                }}>
                Submit Order
              </Button>
            </div>
            <RemoveItemModal
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={hundelCancel}
            />
          </>
        )}
      </Paper>
    </Box>
  );
}
