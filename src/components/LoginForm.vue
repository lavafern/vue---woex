
<template>
    <!-- <div class="position-absolute top-100 start-50 translate-middle"> -->

        <div class="card">
            <div class="card-body">

                <div v-if="error" class="alert alert-danger" role="alert">
                    <div class="d-flex flex-row bd-highlight gap-3 justify-content-center align-items-center">
                        <div>
                            <p>{{ errorMessage }}</p>
                        </div>

                        <div> 
                            <button v-on:click="closeAlert" type="button" class="btn-close btn-close-white" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
        
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
                  </div>
                  <button v-on:click="submitLogin" type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>

    <!-- </div> -->
</template>

<script>
    import {login} from "../services/login.services.js"

    export default {
        name: "loginForm",
        data() {
          return {
            password: null,
            email: 'ww',
            error: false,
            errorMessage: null
          }
        },
        watch: {
            email: function(val) {
                console.log(val);
            }
        },
        methods: {
            closeAlert() {
                    this.error = false
            },
            async submitLogin(){

                try {
                    
                    const loginResponse = await login({
                        email: this.email,
                        password: this.password
                    })

                    console.log('waok',loginResponse);

                    const router = this.$router 
                    router.push('/profile')
                } catch (err) {
                    this.error = true
                    this.errorMessage = err.response.data.message
                    console.log('err',err.response.data.message);
   
                }

            }
        }
    }
</script>

<style scoped>
    .card{
        width: 25%;
        height:30%;
        border: 1px solid transparent; /* Set the border to be transparent */

    }

    .d-flex flex-row bd-highlight mb-3 {
        gap: 10px;
    }
</style>