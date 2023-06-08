import { createPinia, defineStore } from 'pinia'

export default createPinia()

// test
export const useCounterStore1 = defineStore('counter', () => {
    const count = ref(0)
    function increment() {
        count.value++
        console.log(count.value);
        
    }

    return { count, increment }
})

export const useCounterStore2 = defineStore('counter', {
    state: () => ({ count: 0 }),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
            console.log(this.count);
            
        },
    },
})
