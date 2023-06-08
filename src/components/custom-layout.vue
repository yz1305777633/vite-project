<template>
    <h2>自动导入组件</h2>
    <div>
        <a href="javascript:;">嵌套标签</a>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="postcss">
div {
    & a {
        color: red;
    }
}
</style>
