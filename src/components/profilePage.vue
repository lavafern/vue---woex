<template>
    <div id="bod">
        <NavbarComponent ></NavbarComponent>
        <div id="ww" class="d-flex flex-column bd-highlight mb-3 justify-content-center">
            <div v-show="showExperience">
                <contentCard :title="`hello ${profileName}`"  class="flex-grow-1 mr-3"></contentCard>
            </div>

            <div v-show="showExperience">
                <contentCard title="experience"  class="flex-grow-1 mr-3">
                        <h1>show</h1>
                        <experienceCard slot="experienceCards" v-for="i in myExperiences" :key="i"  :job="i"></experienceCard>
                </contentCard>
            </div>

        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>

    import { getMyExperiences } from '@/services/getExperience';
    import FooterComponent from './FooterComponent.vue';
    import NavbarComponent from './NavbarComponent.vue';
    import contentCard from './contentCard.vue'
    import experienceCard from './experienceCard.vue';
    import { getUserById } from '@/services/getUserById';

    export default {
        name: "profilePage",
        data() {
            return {
                profileName: null,
                myExperiences: null,
                showExperience: false
            }
        },
        components: {
            FooterComponent,
            NavbarComponent,
            contentCard,
            experienceCard
            
        },
        created() {
            this.getProfile()
            this.getExperiences()
        },
        methods : {
            async getProfile() {
                try {
                    const authRes = await getUserById()

                    console.log(authRes);
                    this.profileName  = authRes.data.data.profile.name
                    this.showExperience = true
                    console.log(this.profileName);
                } catch (err) {
                    console.log('err',err);
                }
            },
            async getExperiences() {
                try {
                    const myExperiences = await getMyExperiences()

                    this.myExperiences = myExperiences.data.data

                    console.log('exp',this.myExperiences);
                } catch (err) {
                    console.log('err :',err);
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