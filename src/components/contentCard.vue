<template>
    <div>
        <div class="card">
          <div class="card-body">
                <experienceModal></experienceModal>
                
            <div  class="d-flex justify-content-between">
                <h1>{{ title }}</h1>
                <button v-show="isExperience" v-on:click="showModal"  class="button">
                  <img src="../assets//add.png" class="add-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                </button>
            </div>
            <p v-show="!isExperience">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <slot name="experienceCards"></slot>
          </div>
        </div>
    </div>
</template>

<script>
    import experienceModal from './experienceModal.vue';
    import Modal from 'bootstrap/js/dist/modal';


    export default {
        name:"contentCard",
        components: {
            experienceModal
        },
        props: {
            title: String
        },
        data() {
            return {
                isExperience: this.title==='experience'
            }     
        },
        methods : {
            showModal() {
                console.log('showmodal');
                var myModal = new Modal(document.getElementById('myModal'), {
                      keyboard: false
                    })
                var myInput = document.getElementById('myInput')
                myModal.addEventListener('shown.bs.modal', function () {
                  myInput.focus()
                })

                myModal.show()

            }
        }
    }
</script>

<style scoped>

    .card {
        gap: 10px;
        margin-right: 90px;
        margin-left: 90px; 
    }

    label {
      background-color: indigo;
      color: white;
      padding: 0.5rem;
      font-family: sans-serif;
      border-radius: 0.3rem;
      cursor: pointer;
      margin-top: 1rem;
    }

    

</style>