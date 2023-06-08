<template>
    <div>自动生成的路由啊 （样式兼容）</div>
    <div>计数：{{ count }}<button class="bg-green-600 text-white px-1 py-0.5 mx-1" @click="increment">+1</button></div>
</template>

<script lang="ts" setup>
const store = useCounterStore1();

const { count } = storeToRefs(store);
const { increment } = store;
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
}
</style>
