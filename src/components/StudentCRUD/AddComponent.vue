<template>
    
    <div>
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-icon btn-light text-primary rounded-pill m-2  shadow bg-body-tertiary rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        </a>
    
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-info">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add New Student</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form class="row g-3" @submit.prevent="submitForm">
                        <div class="modal-body">
                        
                            <!-- <div class="input-group mb-3">
                                <label for="validationDefault01" class="input-group-text">ID</label>
                                <input type="number" min="0" class="form-control" id="validationDefault01" required v-model="id">
                            </div> -->
                            <div class="input-group mb-3">
                                <label for="validationDefault02" class="input-group-text">Name</label>
                                <input type="text" class="form-control" id="validationDefault02" required v-model="name">
                            </div>
                            
                            <div class="input-group mb-3">
                                <label for="validationDefault04" class="input-group-text">City</label>
                                <select class="form-control form-select" id="validationDefault04" required v-model="city">
                                    <option selected disabled value="">Choose...</option>
                                    <option v-for="city in cities" :key="city.name">{{ city.name }}</option>
                                </select>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
    import cities from '../../cities';

    export default{
        data() {
            return {
                cities: cities,
                id: '',name: '',city: '',
                formData:{
                    name: this.name,
                    city: this.city
                }
            }
        },
        methods:{
            hideModal(){
                this.name = '';
                this.city = '';
            },
            submitForm(){
                this.$emit('newStudent', {name: this.name, city: this.city});
                this.hideModal();
            }
        }
    }
</script>