import {defineStore} from "pinia";

export const useCounterStore = defineStore('counterStore',{
    state:()=>{
        return {
            counter: 10
        }
    },
    actions:{
        increase(){
            this.counter++;
        },
        decrease(){
            this.counter--;
        }
    }
})