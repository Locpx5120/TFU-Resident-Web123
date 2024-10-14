import {
    Avatar,
    Box,
    Button,
    Card,
    TablePagination,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useMemo, useState } from "react";
import TableCustom from "../../Table";
import CustomSelect from "../../../common/CustomSelect";
import SearchAgent from "./SearchAgent";
  
  const Agent = () => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const sortedRows = useMemo(() => {
      if (!sortColumn) return fakeRows;
  
      return [...fakeRows].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn])
          return sortDirection === "asc" ? -1 : 1;
        if (a[sortColumn] > b[sortColumn])
          return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }, [fakeRows, sortColumn, sortDirection]);
  
    const paginatedRows = useMemo(() => {
      const startIndex = page * rowsPerPage;
      return sortedRows.slice(startIndex, startIndex + rowsPerPage);
    }, [sortedRows, page, rowsPerPage]);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleSort = (column) => {
      const isAsc = sortColumn === column && sortDirection === "asc";
      setSortDirection(isAsc ? "desc" : "asc");
      setSortColumn(column);
    };
    return (
      <section className="content project">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <SearchAgent />
          <Button variant="contained" sx={{ background: "#2ca8a2" }}>
            Thêm mới
          </Button>
        </Box>
        <Card sx={{ maxHeight: "800px", marginTop: "30px" }}>
          <TableCustom
            columns={columnData}
            rows={paginatedRows}
            sortColumn={sortColumn}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <TablePagination
            component="div"
            count={fakeRows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Card>
      </section>
    );
  };
  
  const columnData = [
      { name: "Mã thành viên", align: "left", esName: "maThanhVien", sortable: true },
      { name: "Họ tên", align: "left", esName: "hoTen", sortable: true },
      { name: "Chức vụ", align: "left", esName: "chucVu" },
      { name: "Số điện thoại", align: "left", esName: "soDienThoai" },
      { name: "Email", align: "left", esName: "email" },
      { name: "Thao tác", align: "left", esName: "thaoTac" },
    ];
    
    const fakeRows = [];
  
  export default Agent;
  