import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
function AddCategory() {
 

  return (
    <div>   
         <body>
          <main class="container">
            <section class="row">
              <div class="offset-3 col-7 row-8 mt- mt-5 ">
                <form >
                  <div class="card">
                    <div class="card-header" style={{ margin: "auto", color: "red", fontSize:"25px" }}>
                      <b>Thêm Danh Mục</b>
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
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-muted" style={{ margin: "auto", color: "red" }}>
                      <button class="btn btn-danger" style={{ marginRight: "100px" }}>Thêm mới</button>
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
export default AddCategory;