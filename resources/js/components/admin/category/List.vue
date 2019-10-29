<template>
<div >
<section class="content">
        <div class="row justify-content-around">
        <div class="col-10">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category list</h3>
               <div class="card-tools">
                   <button class="btn btn-primary">
                     <router-link to="/add-category" style="color:#fff">Add Category</router-link>
                   </button>
               </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>SL</th>
                  <th>Category name</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Presto</td>
                  <td>Opera 9.0</td>
                  <td>
                      <a href="">Edit</a>
                      <a href="">Delete</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>

    export default {
       
      
    }
</script>

<style scoped>
</style>