<template>
<div>
  <section class="content">
    <div class="row justify-content-around">
        <div class="col-md-8">
            <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Add New Post</h3>
                  </div>
                    <form role="form" enctype="multipart/form-data">
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
                          <textarea type="text" class="form-control" id="postId" placeholder="Enter Description"
                          v-model="form.description"
                          name="description" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>
                          <has-error :form="form" field="description"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Select Category</label>
                            <select class="form-control">
                                <option disabled selected>select one</option>
                                <option>option 2</option>
                                
                            </select>
                          <has-error :form="form" field="cat_id"></has-error>
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

        },
        computed:{

        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>

</style>