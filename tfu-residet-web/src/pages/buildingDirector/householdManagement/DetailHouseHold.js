import React, { useState } from "react";
import { 
  Box, 
  Button, 
  Card, 
  TextField, 
  TablePagination, 
  Typography 
} from "@mui/material";
import TableCustom from "../../../components/Table";
import CustomModal from "../../../common/CustomModal";
import { useParams } from "react-router-dom";

const DetailHouseHold = () => {
  const { id } = useParams();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchCriteria, setSearchCriteria] = useState({
    tenThanhVien: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState({
    mode: 'add',
    title: `Thêm thành viên căn hộ: ${id}`,
  });
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria(prevCriteria => ({
      ...prevCriteria,
      [name]: value
    }));
  };

  const handleSearch = () => {
    console.log("Searching for:", searchCriteria);
    // Implement your search logic here
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddMember = () => {
    setModalMode({
        mode: 'add',
        title: `Thêm thành viên căn hộ: ${id}`
    });
    setSelectedMember(null);
    setModalOpen(true);
  };

  const handleEditMember = (member) => {
    setModalMode({
        mode: 'edit',
        title: `Cập nhật thông tin thành viên căn hộ: ${id}`
    });
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleDeleteMember = (member) => {
    console.log('Deleting member:', member);
    // Implement delete logic here
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveMember = (memberData) => {
    if (modalMode.mode === 'add') {
      console.log('Adding new member:', memberData);
    } else {
      console.log('Updating member:', memberData);
    }
    // Implement your save logic here
    handleCloseModal();
  };

  const modalFields = [
    <TextField fullWidth label="Tên thành viên" name="tenThanhVien" />,
    <TextField fullWidth label="Điện thoại" name="phone" />,
    <TextField fullWidth label="Email" name="email" />,
  ];

  const columnData = [
    { name: "Tên thành viên", align: "left", esName: "tenThanhVien" },
    { name: "Điện thoại", align: "left", esName: "phone" },
    { name: "Email", align: "left", esName: "email" },
    { name: "Tùy chọn", align: "left", esName: "action" }
  ];

  const fakeRows = [
    { 
      id: 1, 
      tenThanhVien: "Nguyễn Văn A", 
      phone: "0123456789", 
      email: "nguyenvana@example.com",
      action: (
        <Box>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={() => handleEditMember({ id: 1, tenThanhVien: "Nguyễn Văn A", phone: "0123456789", email: "nguyenvana@example.com" })} 
            sx={{ mr: 1 }}
          >
            Sửa
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            onClick={() => handleDeleteMember({ id: 1, tenThanhVien: "Nguyễn Văn A", phone: "0123456789", email: "nguyenvana@example.com" })}
          >
            Xóa
          </Button>
        </Box>
      )
    },
    { 
      id: 2, 
      tenThanhVien: "Trần Thị B", 
      phone: "0987654321", 
      email: "tranthib@example.com",
      action: (
        <Box>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={() => handleEditMember({ id: 2, tenThanhVien: "Trần Thị B", phone: "0987654321", email: "tranthib@example.com" })} 
            sx={{ mr: 1 }}
          >
            Sửa
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            onClick={() => handleDeleteMember({ id: 2, tenThanhVien: "Trần Thị B", phone: "0987654321", email: "tranthib@example.com" })}
          >
            Xóa
          </Button>
        </Box>
      )
    },
    { 
      id: 3, 
      tenThanhVien: "Lê Văn C", 
      phone: "0369852147", 
      email: "levanc@example.com",
      action: (
        <Box>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={() => handleEditMember({ id: 3, tenThanhVien: "Lê Văn C", phone: "0369852147", email: "levanc@example.com" })} 
            sx={{ mr: 1 }}
          >
            Sửa
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            onClick={() => handleDeleteMember({ id: 3, tenThanhVien: "Lê Văn C", phone: "0369852147", email: "levanc@example.com" })}
          >
            Xóa
          </Button>
        </Box>
      )
    },
  ];

  return (
    <section className="content">
      <Typography variant="h5" gutterBottom>
        Danh sách thành viên trong căn hộ: {id}
      </Typography>
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
          label="Tên thành viên"
          name="tenThanhVien"
          variant="outlined"
          value={searchCriteria.tenThanhVien}
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
          onClick={handleAddMember}
          sx={{ height: "40px" }}
        >
          Thêm thành viên
        </Button>
      </Box>
      <Card sx={{ maxHeight: "700px" }}>
        <TableCustom 
          columns={columnData} 
          rows={fakeRows} 
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
        data={selectedMember}
        handleSave={handleSaveMember}
        mode={modalMode.mode}
        title={modalMode.title}
        fields={modalFields}
      />
    </section>
  );
};

export default DetailHouseHold;