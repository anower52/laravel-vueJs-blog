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
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category,index) in getallCategory" :key="category.id">
                  <td>{{index+1}}</td>
                  <td>{{category.cat_name}}</td>
                  <td>{{category.created_at | timeformat}}</td>
                  <td>
                      <router-link :to="`/edit-category/${category.id}`">Edit</router-link>
                      <a href="" @click.prevent="deletecategory(category.id)">Delete</a>
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
       name: "List",
       mounted(){
         this.$store.dispatch("allCategory")
       },
         computed:{
           getallCategory(){
             return this.$store.getters.getCategory
           }
         },
         methods:{
           deletecategory(id)
           {
             axios.get('/category/'+id)
             .then(()=>{
               this.$store.dispatch("allCategory")
               Toast.fire({
                        type: 'success',
                        title: 'Category deleted successfully'
                      })
             })

             .catch(()=>{

             })
           }
         }
      
    }
</script>

<style scoped>
</style>