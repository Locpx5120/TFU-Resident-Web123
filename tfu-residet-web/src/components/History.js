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
  
  const History = () => {
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
          LỊCH SỬ <Avatar variant="square" sx={{ background: '#2ca8a2', borderRadius: 1 }}>0</Avatar>
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
    { name: "Ngày", align: "left", esName: "ngay", sortable: true },
    { name: "Mô tả", align: "left", esName: "moTa", sortable: true },
    { name: "Hành động", align: "left", esName: "hanhDong" },
    { name: "Màn hình", align: "left", esName: "manHinh" },
    { name: "Người thực hiện", align: "left", esName: "nguoiThucHien", sortable: true },
  ];
  
  const fakeRows = [
    {
      ngay: "2023-06-01",
      moTa: "Thêm mới dự án",
      hanhDong: "Thêm",
      manHinh: "Quản lý dự án",
      nguoiThucHien: "Nguyễn Văn A",
    },
    {
      ngay: "2023-06-02",
      moTa: "Cập nhật thông tin tòa nhà",
      hanhDong: "Sửa",
      manHinh: "Quản lý tòa nhà",
      nguoiThucHien: "Trần Thị B",
    },
    {
      ngay: "2023-06-03",
      moTa: "Xóa thành viên",
      hanhDong: "Xóa",
      manHinh: "Quản lý thành viên",
      nguoiThucHien: "Lê Văn C",
    },
    {
      ngay: "2023-06-04",
      moTa: "Thay đổi quyền truy cập",
      hanhDong: "Sửa",
      manHinh: "Phân quyền",
      nguoiThucHien: "Phạm Thị D",
    },
    {
      ngay: "2023-06-05",
      moTa: "Tải lên tài liệu mới",
      hanhDong: "Thêm",
      manHinh: "Quản lý tài liệu",
      nguoiThucHien: "Hoàng Văn E",
    },
    {
      ngay: "2023-06-06",
      moTa: "Cập nhật thông tin cư dân",
      hanhDong: "Sửa",
      manHinh: "Quản lý cư dân",
      nguoiThucHien: "Ngô Thị F",
    },
    {
      ngay: "2023-06-07",
      moTa: "Thêm phòng ban mới",
      hanhDong: "Thêm",
      manHinh: "Quản lý phòng ban",
      nguoiThucHien: "Đỗ Văn G",
    },
    {
      ngay: "2023-06-08",
      moTa: "Xóa tài liệu cũ",
      hanhDong: "Xóa",
      manHinh: "Quản lý tài liệu",
      nguoiThucHien: "Bùi Thị H",
    },
    {
      ngay: "2023-06-09",
      moTa: "Cập nhật cài đặt hệ thống",
      hanhDong: "Sửa",
      manHinh: "Cài đặt",
      nguoiThucHien: "Vũ Văn I",
    },
    {
      ngay: "2023-06-10",
      moTa: "Thêm nhóm quyền mới",
      hanhDong: "Thêm",
      manHinh: "Quản lý nhóm quyền",
      nguoiThucHien: "Lý Thị K",
    },
  ];
  
  export default History;
  