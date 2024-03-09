<template>
    <div>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add new experience</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form id="uploadForm" enctype="multipart/form-data">

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Position</label>
                      <input v-model="selectedPosition" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Company</label>
                      <input v-model="selectedCompany" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Start date</label>
                      <input v-model="selectedStartDate" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">end date</label>
                      <input v-model="selectedEndDate" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div>
                      <input v-on:change="logfiel($event)" type="file" name="files[]" id="filesInput" multiple>
                    </div>
                  </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button v-on:click="uploadData" type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
    import Modal from 'bootstrap/js/dist/modal';
    import { uploadExperienceAndMedia } from '@/services/uploadExperienceAndMedia';
    export default {
        name: "experienceModal",
        data() {
          return {
            selectedFiles:null,
            selectedPosition:null,
            selectedCompany:null,
            selectedStartDate:null,
            selectedEndDate:null
          }
        },
        watch: {
          selectedFiles: function(val){
            console.log('file',val);
          }
        },
        methods : {
          logfiel(event) {
            this.selectedFiles = event.target.files
          },
          async uploadData() {
            try {
              
              const uploadService = await uploadExperienceAndMedia({
                position : this.selectedPosition,
                company: this.selectedCompany,
                startDate: this.selectedStartDate,
                endDate: this.selectedEndDate,
                file: this.selectedFiles
              })

              console.log('upload success: ',uploadService);

            } catch (err) {
              console.log('failed to upload, err: ',err);
            }

          },
          showModal() {
                var myModal = new Modal(document.getElementById('exampleModal'), {
                      keyboard: false
                    })
                myModal.show()
            }
        }
    }
</script>

<style>
      .button {
        border: none; /* Remove default button border */
        background: none; /* Remove default button background */
        padding: 0; /* Remove default button padding */
    }

    .add-button {
        width: 50px; /* Adjust width of the image */
        height: auto; /* Maintain aspect ratio */
    }

</style>