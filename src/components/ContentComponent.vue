<template>
    <div class="col-md-9 col-sm-12 text-end">
        <AddComponent @newStudent="newStudentHandler"></AddComponent>

        <font-awesome-icon :icon="['fasr', 'circle-plus']" />
        <div class="table-responsive">
            <table class="table table-striped col-12 mt-1 text-center">
                <thead class="bg-info">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="align-middle" v-for="student in students" :key="student.id">
                        <td class="align-items-center" scope="row">{{ student.id }}</td>
                        <td>
                            <router-link :to="'/studentDetails/'+ student.id">{{ student.name }}</router-link>
                        </td>
                        <td>{{ student.city }}</td>
                        <td> 
                            <div class="d-flex justify-content-center align-items-center">
                                <EditComponent :studentData="Object.assign({}, {id: student.id, name: student.name, city: student.city})"></EditComponent>
                                &nbsp; <span>|</span> &nbsp;
                                <a href="#" @click="deleteStd(student.id)" class="btn btn-icon btn-light text-danger rounded-pill m-2 shadow bg-body-tertiary rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" class="bi bi-trash3"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import AddComponent from './StudentCRUD/AddComponent.vue';
    import EditComponent from './StudentCRUD/EditComponent.vue';

    export default{
    data() {
        return {
            students: [],
        };
    },
    methods:{
        async newStudentHandler(newStudent){
            // ***************** Apply a Logic on The New Object Before Sending It *****************
            let newStd = {id:this.students[this.students.length-1].id+1, name: newStudent.name, city: newStudent.city};
            
            // ***************** Make Post Request On The API *****************
            await fetch("http://localhost:4000/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newStd)
            })

            // ***************** Update the Page After Sending The Request *****************
            this.students.push(newStd);
        },
        async deleteStd(id){
            if(confirm("Are u sure to delete this student?")){
                await fetch(`http://localhost:4000/students/${id}`,{
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                this.students.splice(this.students.findIndex((std)=> std.id === id), 1)
            }
        }
    },
    components: {
        AddComponent,
        EditComponent
    },
    async created(){
        let response = await fetch("http://localhost:4000/students");
        let data = await response.json();
        this.students = data;
    }

}
</script>