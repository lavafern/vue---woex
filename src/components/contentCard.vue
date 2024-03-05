<template>
    <div>
        <div class="card">
          <div class="card-body">

            <h1>{{ title }}</h1>

            <div >
                <!--default html file upload button-->
                <input type="file" id="actual-btn" hidden/>

                <!--our custom file upload button-->
                <label for="actual-btn">Choose File</label>
            </div>

            <p v-show="!isExperience">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"contentCard",
        props: {
            title: String
        },
        data() {
            return {
                isExperience: this.title==='experience'
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