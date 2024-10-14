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
import TableCustom from "./Table";

const Building = () => {
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
          <Typography sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontWeight: 'bold',
              margin: '10px 0',
              fontSize: '22px',
      }}>
        Danh sách toà nhà <Avatar variant="square" sx={{ background: '#2ca8a2', borderRadius: 1 }}>0</Avatar>
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            id="outlined-multiline-flexible"
            label=""
            color="success"
            placeholder="Tên"
            sx={{
              "#outlined-multiline-flexible": {
                padding: "7px !important",
              },
            }}
          />
          <Button variant="outlined" color="success">
            Tìm kiếm
          </Button>
        </Box>
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
    { name: "Mã tòa nhà", align: "left", esName: "maToaNha", sortable: true },
    { name: "Tên tòa nhà", align: "left", esName: "tenToaNha", sortable: true },
    { name: "Căn hộ", align: "left", esName: "soCanHo" },
    { name: "Cư dân", align: "left", esName: "soCuDan" },
    { name: "Thao tác", align: "left", esName: "thaoTac" },
  ];
  
  const fakeRows = [
    {
      maToaNha: "TN001",
      tenToaNha: "Tòa nhà Sunshine",
      soCanHo: 150,
      soCuDan: 450,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN002",
      tenToaNha: "Chung cư Hoa Hồng",
      soCanHo: 200,
      soCuDan: 600,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN003",
      tenToaNha: "Tòa tháp Đông Đô",
      soCanHo: 300,
      soCuDan: 900,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN004",
      tenToaNha: "Khu căn hộ Biển Xanh",
      soCanHo: 100,
      soCuDan: 280,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN005",
      tenToaNha: "Chung cư Thành phố",
      soCanHo: 250,
      soCuDan: 750,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN006",
      tenToaNha: "Tòa nhà Sông Hồng",
      soCanHo: 180,
      soCuDan: 540,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN007",
      tenToaNha: "Chung cư Đông Đô",
      soCanHo: 220,
      soCuDan: 660,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN008",
      tenToaNha: "Tòa nhà Tây Hồ",
      soCanHo: 160,
      soCuDan: 480,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN009",
      tenToaNha: "Chung cư Nam Từ Liêm",
      soCanHo: 280,
      soCuDan: 840,
      thaoTac: "Xem",
    },
    {
      maToaNha: "TN010",
      tenToaNha: "Tòa nhà Bãi Dài",
      soCanHo: 120,
      soCuDan: 360,
      thaoTac: "Xem",
    },
  ];

export default Building;
