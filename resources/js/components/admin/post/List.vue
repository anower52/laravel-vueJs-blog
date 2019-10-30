<template>
<div >
<section class="content">
        <div class="row justify-content-around">
        <div class="col-10">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Post list</h3>
               <div class="card-tools">
                   <button class="btn btn-primary">
                     <router-link to="/add-category" style="color:#fff">Add Post</router-link>
                   </button>
               </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>SL</th>
                  <th>User</th>
                  <th>Category</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Photo</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(post,index) in allpost">
                  <td>{{index+1}}</td>
                  <td v-if="post.user">{{post.user.name}}</td>
                  <td v-if="post.category">{{post.category.cat_name}}</td>
                  <td>{{post.title | sortlength(30, "...")}}</td>
                  <td>{{post.description |sortlength(40,"...")}}</td>
                  <td><img :src="post.photo" alt="fdgh" width="70" height="70"></td>
                  <td>
                      <a >Edit</a>
                      <a >Delete</a>
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
            this.$store.dispatch("getAllpost")
        },
        computed:{
            allpost(){
                return this.$store.getters.getAllpost
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>

</style>