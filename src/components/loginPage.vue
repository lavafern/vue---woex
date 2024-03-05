<template>
    <div id="bod">
        <NavbarComponent></NavbarComponent>
        <div id="ww" class="d-flex bd-highlight mb-3 justify-content-center  align-items-center">
                <loginForm></loginForm>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>

    import loginForm from './LoginForm.vue'
    import FooterComponent from './FooterComponent.vue'
    import NavbarComponent from './NavbarComponent.vue';

    export default {
        name: "loginPage",
        components: {
            loginForm,
            FooterComponent,
            NavbarComponent
        }
    }
</script>

<style>

    #ww {
        margin-top: 20px;
        flex:1;
    }

    .d-flex {
        height: 100%;
    }

    #bod {
        min-height: 100vh; margin:0;
        display:flex; 
        flex-direction:column; 
    }

</style>