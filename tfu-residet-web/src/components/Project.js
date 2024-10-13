import { Box, Button, Card, TablePagination, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import TableCustom from "./Table";

const Project = () => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

  const sortedRows = useMemo(() => {
    if (!sortColumn) return fakeRows;

    return [...fakeRows].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
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
  { name: "Mã dự án", align: "left", esName: "maDuAn", sortable: true },
  { name: "Tên dự án", align: "left", esName: "tenDuAn", sortable: true },
  { name: "Tòa nhà", align: "left", esName: "toaNha" },
  { name: "Căn hộ", align: "left", esName: "canHo" },
  { name: "Ngày tạo", align: "left", esName: "ngayTao", sortable: true },
  { name: "Hành động", align: "left", esName: "hanhDong" },
];

const fakeRows = [
    {
      maDuAn: "DA001",
      tenDuAn: "Khu đô thị Xanh",
      toaNha: "Tòa A",
      canHo: "A101",
      ngayTao: "2023-01-15",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA002",
      tenDuAn: "Chung cư Hoa Hồng",
      toaNha: "Tòa B",
      canHo: "B205",
      ngayTao: "2023-02-20",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA003",
      tenDuAn: "Biệt thự Vườn Đào",
      toaNha: "Khu C",
      canHo: "C10",
      ngayTao: "2023-03-10",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA004",
      tenDuAn: "Khu nghỉ dưỡng Biển Xanh",
      toaNha: "Khu D",
      canHo: "D15",
      ngayTao: "2023-04-05",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA005",
      tenDuAn: "Căn hộ Thành phố",
      toaNha: "Tòa E",
      canHo: "E303",
      ngayTao: "2023-05-12",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA006",
      tenDuAn: "Khu công nghiệp Sông Hồng",
      toaNha: "Nhà máy F",
      canHo: "F001",
      ngayTao: "2023-06-18",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA007",
      tenDuAn: "Trung tâm thương mại Đông Đô",
      toaNha: "Tòa G",
      canHo: "G101",
      ngayTao: "2023-07-22",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA008",
      tenDuAn: "Khu dân cư Tây Hồ",
      toaNha: "Tòa H",
      canHo: "H205",
      ngayTao: "2023-08-30",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA009",
      tenDuAn: "Khu đô thị mới Nam Từ Liêm",
      toaNha: "Tòa I",
      canHo: "I404",
      ngayTao: "2023-09-14",
      hanhDong: "Xem"
    },
    {
      maDuAn: "DA010",
      tenDuAn: "Khu resort Bãi Dài",
      toaNha: "Khu J",
      canHo: "J007",
      ngayTao: "2023-10-25",
      hanhDong: "Xem"
    }
  ];

export default Project;
