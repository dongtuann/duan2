import React from "react";
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/home';
// import Product from './pages/product';
// import Contact from './pages/contact';
// import News from './pages/news';
import Avatar from '@mui/material/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


import ThongKe from "./duan/ThongKe/ThongKe";

import TrangchuAdmin from "./duan/TrangchuAdmin/Homeadmin";

import UpdateSP from "./duan/QLSanPham/UpdateSP";
import Addsp from "./duan/QLSanPham/Addsp";
import SanPham from "./duan/QLSanPham/SanPham";
import UuDai from "./duan/QLUuDai/UuDai";
import AddSale from "./duan/QLUuDai/AddSale";
import UpdateSale from "./duan/QLUuDai/UpdateSale";

import KhachHang from "./duan/QLTaiKhoan/KhachHang";

import XacNhan from "./duan/QLDonHang/XacNhan";
import Dangcho from "./duan/QLDonHang/Dangcho";
import DaHuy from "./duan/QLDonHang/DaHuy";
import All from "./duan/QLDonHang/All";


import UpdateCategory from "./duan/QLDanhMuc/UpdateCategory";
import DanhMuc from "./duan/QLDanhMuc/DanhMuc";
import AddCategory from "./duan/QLDanhMuc/AddCategory";

import DangKy from "./duan/a/DangKy";
import Doimk from "./duan/a/Doimk";
import Login from "./duan/a/Login";
import Quenmk from "./duan/a/Quenmk";


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import XemChiTiet from "./duan/QLDonHang/XemChiTiet";
import Homeadmin from "./duan/TrangchuAdmin/Homeadmin";
function App() {

  return (
<div>

  <Homeadmin/>
</div>
  );
}
export default App;