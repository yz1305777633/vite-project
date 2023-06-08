<script lang="ts" setup>

 const store = useCounterStore2()
 const { increment } = store;
 const count = computed(() => store.count)
</script>
<template>
    <div>
        about
    </div>
    <div>
        {{ count }}
        <button class="bg-blue-600 text-white px-1.5 py-0.5 mx-1" @click="increment">+2</button>
    </div>
</template>
<style lang="postcss" scoped>
    
</style>
