<template>
<div>
  <section class="content">
    <div class="row justify-content-around">
        <div class="col-md-8">
            <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Add Category</h3>
                  </div>
                    <form role="form" @click.prevent="addCategory()">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="categoryId">Category Name</label>
                          <input type="email" class="form-control" id="categoryId" placeholder="Enter category Name"
                          v-model="form.cat_name"
                          name="cat_name"
                          >
                        </div>
                      </div>
                      <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </form>
                </div>
          </div>
      </div>
        </section>
    </div>
</template>

<script>

    export default {
       name: "New",
       data(){
          return {
            form: new Form({
              cat_name:'',
            })
          }
       },
       methods:{
         addCategory(){
           this.form.post('/add-category')
           .then((response)=>{
              console.log(response.data);
           })
           .catch(()=>{
             
           })
         }
       }

      
    }
</script>

<style scoped>
</style>