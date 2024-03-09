<template>

        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-row bd-highlight mb-3">

                <div class="me-auto p-2 bd-highlight">
                    <h5>{{ job.position }}</h5>
                    <h6>{{ job.company }}</h6>
                    <p>{{ monthNames[new Date(job.startDate).getMonth()] }} {{  new Date(job.startDate).getFullYear()}} - {{ monthNames[new Date(job.endDate).getMonth()] }}  {{ new Date(job.endDate).getFullYear() }}</p>
                </div>
                <div class="p-2 bd-highlight">
                    <button v-on:click="deleteExperience" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>

            <div class="d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight" v-for="i in localhostUrlImage" :key="i">
                    <img :src="i" alt="">
                </div>
            </div>

          </div>
        </div>

</template>
<script>
    import { deleteExperiences } from '@/services/deleteExperience'
    export default {
        name: 'experienceCard',
        props : {
            job: Object
        },
        computed : {
            monthNames() { return ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"
                ]},
            imgSrc(){ return this.job.workExperienceMedia ?? undefined}
            
        },
        data() {
            return {
                localhostUrlImage: null
            }
        },
        methods: {
            parseUrl() {
                const urls = []
                for (let i = 0; i < this.imgSrc.length; i++) {
                    // console.log('imgsrc:',this.imgSrc[0].split);
                    urls.push("http://localhost:3000/"+this.imgSrc[i].path.split('public\\')[1])
                }
                console.log('url',urls);
                this.localhostUrlImage = urls
            },
            async deleteExperience() {
                try {
                    const res = await deleteExperiences(this.job.id)
                    console.log('success delete',res);
                } catch (err) {
                    console.log('err :',err);                    
                }

            }
        },
        created() {
            console.log('job: ',this.job);
            console.log('mth :',this.monthNames);
            console.log('src:',this.imgSrc);
            console.log('parsed:');
            this.parseUrl()
            console.log(this.localhostUrlImage);
        }
        
    }
</script>
<style scoped>
    .card {
         
        /* border: 1px solid transparent; Set the border to be transparent */
    }

    .card-body img {
        max-width: 100px;
    }
</style>