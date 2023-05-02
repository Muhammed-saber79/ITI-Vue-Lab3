<template>
    <div class="row text-center">
        <button @click="counterStore.increase" class="btn btn-primary">+</button>
        <span>Counter: {{ counterStore.counter }}</span>
        <button @click="counterStore.decrease" class="btn btn-danger">-</button>
    </div>
</template>

<script>
    import {useCounterStore} from "@/stores/CounterStore"

    export default{
        data() {
            return {
                counterStore: useCounterStore()
            }
        },
    }
</script>

