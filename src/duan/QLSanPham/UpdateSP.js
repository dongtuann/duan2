import React from "react";
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

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function UpdateSP() {
 

  return (
    <div>
      <body>
        <main class="container">
          <section class="row">
            <div class="offset-3 col-7 row-8 mt- mt-5 ">
              <form >
                <div class="card">
                  <div class="card-header" style={{fontSize:"25px"}}>
                    <b>Sửa sản phẩm</b>
                  </div>
                  <div class="card-body">

                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Tên sản phẩm"
                            name="name"
                           
                          />
                        </div>
                        <div class="form-group" >
                            <TextField
                              margin="normal"
                              required
                              fullWidth
                              id="weight"
                              label="Cân nặng"
                              name="weight"                       
                            />
                          </div>
                          
                        <select id="inputState" class="form-select">
                          
      <option selected>Danh Mục</option>
      <option>...</option>
    </select>
    <div class="form-group  "style={{marginTop:"20px"}}>
                <label for="creat_date">Ngày sản xuất</label>
                <input type="date" class="form-control"  id="creat_date" name="creat_date" autocomplete="off"/>
               
            </div>
                    
                      </div>
                      <div class="col">
                      <div class="col-md-12 mt-2" >       
    
    <div class="form-group" style={{marginTop:"-9px" }}>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="price"
                            label="Giá sản phẩm"
                            name="price"
                           type="number"
                          />
                        </div>
  </div>  
      <div class="form-group" style={{marginTop:"2px"}}>
                <label for="image">Ảnh</label> 
        <input type="file"
                    class="form-control" id="image" name="image" autocomplete="off"/>
    
            </div>           

             <div class="form-group" style={{marginTop:"5px"}}>
                <label for="status">Trạng thái</label>
                <select name="status" id="status" class="form-control" required>
                    <option selected disabled>Choose</option>
                    <option value="1">Còn hàng</option>
                    <option value="0">Hết hàng</option>
                </select>
                <small id="activated_error" class="form-text text-danger"></small>
            </div>               
                        <div class="form-group" >
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="decription"
                            label="Mô tả sản phẩm"                           
                            id="decription" 
                            style={{width:"400px",height:"10px"}}
                           
                          />
                        </div>
                       
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-muted" >
                    <button class="btn btn-danger" style={{ marginRight: "10px", width:"80px" }}>Sửa</button>
                    <button class="btn btn-success">Quay lại</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </div>
  );
}
export default UpdateSP;