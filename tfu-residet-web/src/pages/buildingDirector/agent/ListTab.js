import React, { useState } from "react";
import { Box, Button, Card, TextField, TablePagination, MenuItem } from "@mui/material";
import TableCustom from "../../../components/Table";
import CustomModal from "../../../common/CustomModal";

const ListTab = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchCriteria, setSearchCriteria] = useState({
    employeeName: "",
    department: "",
    email: "",
    phone: ""
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState({
    mode: 'add',
    title: 'Thêm nhân viên tòa nhà',
  });
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const departments = [
    { value: '', label: 'Tất cả' },
    { value: 'hr', label: 'Nhân sự' },
    { value: 'it', label: 'Công nghệ thông tin' },
    { value: 'finance', label: 'Tài chính' },
  ];

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria(prevCriteria => ({
      ...prevCriteria,
      [name]: value
    }));
  };

  const handleSearch = () => {
    console.log("Searching for:", searchCriteria);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCreateAgent = () => {
    setModalMode({
        mode: 'add',
        title: 'Thêm nhân viên tòa nhà'
    });
    setSelectedEmployee(null);
    setModalOpen(true);
  };

  const handleEditAgent = (employee) => {
    setModalMode({
        mode: 'edit',
        title: 'Cập nhật nhân viên tòa nhà'
    });
    setSelectedEmployee(employee);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveEmployee = (employeeData) => {
    if (modalMode === 'add') {
      console.log('Adding new employee:', employeeData);
    } else {
      console.log('Updating employee:', employeeData);
    }
  };

  const modalFields = [
    <TextField label="Tên nhân viên" name="name" />,
    <TextField
      select
      label="Bộ phận"
      name="department"
    >
      {departments.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>,
    <TextField label="Email" name="email" />,
    <TextField label="Điện thoại" name="phone" />,
  ];

  return (
    <section>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          alignItems: 'flex-end',
          mb: 2
        }}
      >
        <TextField
          size="small"
          label="Tên nhân viên"
          name="employeeName"
          variant="outlined"
          value={searchCriteria.employeeName}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1, maxWidth: "200px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ height: "40px" }}
        >
          Tìm kiếm
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleCreateAgent}
          sx={{ height: "40px" }}
        >
          Thêm thành viên
        </Button>
      </Box>
      <Card sx={{ maxHeight: "700px" }}>
        <TableCustom 
          columns={columnData} 
          rows={fakeRows} 
          onEdit={handleEditAgent}
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
      <CustomModal
        open={modalOpen}
        handleClose={handleCloseModal}
        employee={selectedEmployee}
        handleSave={handleSaveEmployee}
        mode={modalMode.mode}
        title={modalMode.title}
        fields={modalFields}
      />
    </section>
  );
};

const columnData = [
  { name: "Tên nhân viên", align: "left", esName: "temThanhVien" },
  { name: "Bộ phận", align: "left", esName: "boPhan" },
  { name: "Email", align: "left", esName: "email" },
  { name: "Điện thoại", align: "left", esName: "phone" },
  { name: "Ngày thuê", align: "left", esName: "ngayThue" },
  { name: "Tùy chọn", align: "left", esName: "action" },
];

const fakeRows = [];

export default ListTab;