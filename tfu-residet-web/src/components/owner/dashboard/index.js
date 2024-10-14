import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../../../assets/styles/owner/Dashboard.css';
import DashboardAccount from './DashboardAccount';
import DashboardCost from './DashboardCost';
import DashboardReport from './DashboardReport';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 72,
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(4),
  color: 'rgba(0, 0, 0, 0.7)',
  fontWeight: 700,
  '&.Mui-selected': {
    color: '#2ca8a2',
  },
  '&:hover': {
    color: '#2ca8a2',
    opacity: 1,
  },
  '&.MuiTab-root': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: theme.shadows[2],
      transform: 'translateY(-3px)',
    },
    '&.Mui-selected': {
      boxShadow: theme.shadows[4],
      transform: 'translateY(-5px)',
    },
  },
}));

function Dashboard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="content">
      <Box sx={{ width: '100%' }}>
        <StyledTabs 
          value={value} 
          onChange={handleChange} 
          aria-label="dashboard tabs"
          variant="fullWidth"
        >
          <StyledTab label="Tài khoản khách hàng" />
          <StyledTab label="Báo cáo thu chi" />
          <StyledTab label="Đơn từ" />
        </StyledTabs>
        <Box sx={{ p: 3 }}>
          {value === 0 && <DashboardAccount />}
          {value === 1 && <DashboardCost />}
          {value === 2 && <DashboardReport />}
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;