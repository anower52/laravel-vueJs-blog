<template>
<div>
  <section class="content">
    <div class="row justify-content-around">
        <div class="col-md-8">
            <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Add New Post</h3>
                  </div>
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addnewPost()">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="postId">Post Name</label>
                          <input type="text" class="form-control" id="postId" placeholder="Enter Post Name"
                          v-model="form.title"
                          name="title" :class="{ 'is-invalid': form.errors.has('title') }">
                          <has-error :form="form" field="title"></has-error>
                        </div>
                        <div class="form-group">
                          <label for="DescriptionId">Description</label>
                    
                          <markdown-editor v-model="form.description"></markdown-editor>

                          <has-error :form="form" field="description"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Select Category</label>
                            <select class="form-control" 
                            :class="{ 'is-invalid': form.errors.has('cat_id') }" v-model="form.cat_id">
                                <option disabled selected>Select One</option>
                                <option :value="category.id" v-for="category in getallCategory" 
                                :key="category.id">{{category.cat_name}}</option>
                                
                            </select>
                          <has-error :form="form" field="cat_id"></has-error>
                        </div>

                        <div class="form-group">
                            <label>Select Photo</label>
                            <input @change="changePhoto($event)" name="photo" type="file" 
                            :class="{ 'is-invalid': form.errors.has('photo') }">
                              <img :src="form.photo" alt="" width="120" height="120">
                          <has-error :form="form" field="photo"></has-error>
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
                    title: '',
                    description:'',
                    category_id:'',
                    photo: ''
                })
            }
        },
        mounted(){
          this.$store.dispatch("allCategory")
          // this.getallCategory();
        },
        computed:{
          getallCategory(){
             return this.$store.getters.getCategory
           }
        },
        methods:{
          changePhoto(event){
            let file = event.target.files[0];
            let reader = new FileReader();

             reader.onload = event=> {
                this.form.photo = event.target.result

                console.log(event.target.result)
            };

            reader.readAsDataURL(file);
          },
          addnewPost(){
            this.form.post('/savepost')
              .then((response)=>{
                   this.$router.push('/post-list')

             Toast.fire({
                        type: 'success',
                        title: 'Post Added successfully'
                      })
              })
              .catch(()=>{

              })
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>