<script setup>
const route = useRoute();
</script>

<template>
    <h1 class="text-red-500 text-7xl">{{ route.params.id }}</h1>
</template>

<style>

</style>