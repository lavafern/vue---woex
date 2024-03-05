<template>
    <div id="bod">
        <NavbarComponent ></NavbarComponent>
        <div id="ww" class="d-flex flex-column bd-highlight mb-3 justify-content-center">
            <contentCard :title="`hello ${profileName}`"  class="flex-grow-1 mr-3"></contentCard>
            <contentCard title="experience"  class="flex-grow-1 mr-3"></contentCard>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>

    import FooterComponent from './FooterComponent.vue';
    import NavbarComponent from './NavbarComponent.vue';
    import contentCard from './contentCard.vue'
    import { getUserById } from '@/services/getUserById';

    export default {
        name: "profilePage",
        data() {
            return {
                profileName: null,
            }
        },
        components: {
            FooterComponent,
            NavbarComponent,
            contentCard
        },
        created() {
            this.getProfile()
        },
        methods : {
            async getProfile() {
                try {
                    const authRes = await getUserById()

                    console.log(authRes);
                    this.profileName  = authRes.data.data.profile.name

                    console.log(this.profileName);
                } catch (err) {
                    console.log('err',err);
                }
            }
        }
    }
</script>

<style>

#ww {
    gap: 20px;
    margin-top: 20px;
    flex:1;
}


#bod {
    min-height: 100vh; margin:0;
    display:flex; 
    flex-direction:column; 
}

</style>