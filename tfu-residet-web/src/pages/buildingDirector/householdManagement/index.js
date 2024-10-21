import React, { useState } from "react";
import { Box, Button, Card, TextField, TablePagination, MenuItem } from "@mui/material";
import TableCustom from "../../../components/Table";
import CustomModal from "../../../common/CustomModal";
import { useNavigate } from "react-router-dom";

const HouseHold = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchCriteria, setSearchCriteria] = useState({
    tenChuHo: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState({
    mode: 'add',
    title: 'Thêm chủ căn hộ',
  });
  const [selectedHouseHold, setSelectedHouseHold] = useState(null);
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/cu-dan/${id}`);
  };

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

  const handleCreateHouseHold = () => {
    setModalMode({
        mode: 'add',
        title: 'Thêm chủ căn hộ'
    });
    setSelectedHouseHold(null);
    setModalOpen(true);
  };

  const handleEditHouseHold = (houseHold) => {
    setModalMode({
        mode: 'edit',
        title: 'Cập nhật chủ căn hộ'
    });
    setSelectedHouseHold(houseHold);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveHouseHold = (houseHoldData) => {
    if (modalMode.mode === 'add') {
      console.log('Adding new household:', houseHoldData);
    } else {
      console.log('Updating household:', houseHoldData);
    }
  };

  const modalFields = [
    <TextField fullWidth label="Tên chủ hộ" name="tenChuHo" />,
    <TextField fullWidth label="Số tầng" name="soTang" type="number" />,
    <TextField fullWidth label="Số Phòng" name="soPhong" type="string" />,
    <TextField fullWidth label="Điện thoại" name="phone" />,
    <TextField fullWidth label="Email" name="email" />,
  ];

  return (
    <section className="content">
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
          label="Tên chủ hộ"
          name="tenChuHo"
          variant="outlined"
          value={searchCriteria.tenChuHo}
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
          onClick={handleCreateHouseHold}
          sx={{ height: "40px" }}
        >
          Thêm chủ căn hộ
        </Button>
      </Box>
      <Card sx={{ maxHeight: "700px" }}>
        <TableCustom 
          columns={columnData} 
          rows={fakeRows} 
          onEdit={handleEditHouseHold}
          onRowClick={handleRowClick}
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
        data={selectedHouseHold}
        handleSave={handleSaveHouseHold}
        mode={modalMode.mode}
        title={modalMode.title}
        fields={modalFields}
      />
    </section>
  );
};

const columnData = [
  { name: "Tên chủ hộ", align: "left", esName: "tenChuHo" },
  { name: "Số tầng", align: "left", esName: "soTang" },
  { name: "Số Phòng", align: "left", esName: "soPhong" },
  { name: "Điện thoại", align: "left", esName: "phone" },
  { name: "Email", align: "left", esName: "email" },
  { name: "Tùy chọn", align: "left", esName: "action" },
];

const fakeRows = [];

export default HouseHold;