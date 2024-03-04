<template>
    <div>
        <NavbarComponent></NavbarComponent>
        <div class="container position-absolute top-50 start-50 translate-middle">
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
    .container {
        background-color: aqua;
    }
</style>