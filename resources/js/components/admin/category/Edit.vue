<template>
<div>
  <section class="content">
    <div class="row justify-content-around">
        <div class="col-md-8">
            <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Edit Category</h3>
                  </div>
                    <form role="form" @click.prevent="addCategory()">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="categoryId">Edit Category</label>
                          <input type="email" class="form-control" id="categoryId" placeholder="Enter category Name"
                          v-model="form.cat_name"
                          name="cat_name" :class="{ 'is-invalid': form.errors.has('cat_name') }">
                          <has-error :form="form" field="cat_name"></has-error>
                        </div>
                      </div>
                      <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
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
       name: "Edit",
       data(){
          return {
            form: new Form({
              cat_name:'',
            })
          }
       },
       mounted(){
           axios.get(`/editcategory/${this.$route.params.categoryid}`)
            .then((response)=>{
                this.form.fill(response.data.category)
            })
       },
       methods:{
         addCategory(){
           this.form.post('/add-category')
           .then((response)=>{
              this.$router.push('/category-list')

             Toast.fire({
                        type: 'success',
                        title: 'Category Added successfully'
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