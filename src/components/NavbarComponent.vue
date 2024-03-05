<template>
    <div>
        <nav id="navbar" class="navbar navbar-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Hello {{ loggedIn }} </span>
          </div>
        </nav>
    </div>
</template>

<script>

    export default {
        name: "NavbarComponent",
        props: {
            loggedIn:String
        },
        created() {
            console.log('ww',this.loggedIn);
        },
        watch: {
            loggedIn(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>
    #navbar {
        background-color: rgb(194, 250, 232);
    }
</style>