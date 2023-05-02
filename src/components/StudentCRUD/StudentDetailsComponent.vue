<template>
    <div class="row">
        <template>{{ loadData($route.params.id) }}</template>

        <h2>Student Details Component...</h2>
        <div class="card w-50 m-auto shadow bg-body-tertiary rounded">
            <img class="card-img-top" src="https://picsum.photos/200" alt="Title">
            <div class="card-body">
                <h4 class="card-title">Student Details</h4>
                <p class="card-text text-start">
                    <ul class="list-unstyled">
                        <li>ID: {{ studentDetails.id }}</li>
                        <li>Name: {{ studentDetails.name }}</li>
                        <li>City: {{ studentDetails.city }}</li>
                    </ul>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default{
        data() {
            return {
                studentDetails: {}
            }
        },
        methods:{
            async loadData(id){
                let response = await fetch(`http://localhost:4000/students/${id}`)
                let data = await response.json();
                this.studentDetails = data;
            }
        }
    }
</script>