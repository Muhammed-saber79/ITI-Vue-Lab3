<template>
    
    <div>
        <a href="#" @click="test" data-bs-toggle="modal" data-bs-target="#editModal" class="btn btn-icon btn-light text-success rounded-pill m-2  shadow bg-body-tertiary rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
            </svg>
        </a>
    
        <!-- Modal -->
        <div class="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header bg-info">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Student Data</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form class="row g-3" @submit.prevent="submitForm">
                        <div class="modal-body">
                        
                            <div class="input-group mb-3">
                                <label for="validationDefault01" class="input-group-text">ID</label>
                                <input type="number" min="0" class="form-control" id="validationDefault01" disabled v-model="oldStudent.id">
                            </div>
                            <div class="input-group mb-3">
                                <label for="validationDefault02" class="input-group-text">Name</label>
                                <input type="text" class="form-control" id="validationDefault02" required v-model="oldStudent.name">
                            </div>
                            
                            <div class="input-group mb-3">
                                <label for="validationDefault04" class="input-group-text">City</label>
                                <select class="form-control form-select" id="validationDefault04" required v-model="oldStudent.city">
                                    <option selected disabled value="">Choose...</option>
                                    <option v-for="city in cities" :key="city.name" :value="city.name">{{ city.name }}</option>
                                </select>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Update</button>
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
                selectedCity: null,
                oldStudent: {}
            }
        },
        props: {
            studentData: {
                type: Object,
                required: true
            }
        },
        methods:{
            test(){
                console.log(this.studentData);
                // console.log(this.selectedCity);
                console.log(this.oldStudent);
            },
            hideModal(){
                this.name = '';
                this.city = '';
            },
            submitForm(){
                this.$emit('newStudent', {name: this.name, city: this.city});
                this.hideModal();
            },
        },
        mounted(){
            this.selectedCity = this.cities.find((city)=> city.name === this.studentData.city)
        },
        created(){
            this.oldStudent = Object.assign({}, this.studentData);
        }
    }
</script>