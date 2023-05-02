<template>
    <div class="container">
        <div class="row">
            <h3>Here is State Counter...</h3>
            <p>Counter: {{ counter.counter }}</p>
        </div>
        <CounterOperations></CounterOperations>
    </div>
</template>

<script>
    import { useCounterStore } from "@/stores/CounterStore";
    import CounterOperations from "./CounterOperations.vue";

    export default{
        data() {
            return {
                counter: useCounterStore()
            }
        },
        components:{
            CounterOperations
        }
    }
</script>