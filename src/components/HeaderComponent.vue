<template>
    <div class="row align-items-md-stretch">
        <div class="col-md-12">
            <div class="h-100 p-5 bg-light border rounded-3">
                <h2>Here is header component</h2> <hr class="my-3">
                <p :class="['text-start', branch.name == 'Mansoura'? 'mans' : 'alex']">Branch: {{ branch.name }}</p>
                <p class="text-start">Intake: {{ branch.intake }}</p>
                <p class="text-start">Track: {{ branch.track }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {}
        },
        props:['branch']
    }
</script>

<style scoped>
    .mans{
        color: orange
    }
    .alex{
        color: green
    }
    .cairo{
        color: pink
    }
</style>