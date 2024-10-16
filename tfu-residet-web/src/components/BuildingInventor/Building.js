import React, { useState, useEffect, useMemo } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import TableCustom from '../Table';
import AddBuildingModal from './CreateModal';

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

  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [projects, setProjects] = useState([]);

  const header = {
    headers: {
      Authorization: `Bearer ${Cookies.get("accessToken")}`,
      'content-type': 'application/json',
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5045/api/projects", header);
      const data = await response.json();
      setProjects(data.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleCreateBuilding = async (newBuilding) => {
    try {
      const response = await fetch("http://localhost:5045/api/building", {
        method: 'POST',
        header,
        body: JSON.stringify(newBuilding),
      });

      const result = await response.json();

      if (result.code === 200) {
        Swal.fire('Thành công', 'Đã thêm tòa nhà mới', 'success');
        setIsOpenCreate(false);
        // Refresh building list here
      } else {
        Swal.fire('Lỗi', result.message || 'Không thể tạo tòa nhà', 'error');
      }
    } catch (error) {
      console.error('Error creating building:', error);
      Swal.fire('Lỗi', 'Không thể kết nối đến server', 'error');
    }
  };
  return (
    <section className="content project">
        <AddBuildingModal
          open={isOpenCreate}
          onClose={() => setIsOpenCreate(false)}
          onSubmit={handleCreateBuilding}
          projects={projects}
        />
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
  
  const fakeRows = [];

export default Building;
