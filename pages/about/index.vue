<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
const test = ref('test');
const bool = ref(false);
</script>

<template>
    <h1 class="text-red-500 text-7xl">關於我們</h1>
    <h3 class="text-teal-500 text-7xl">{{ counterStore.count }}</h3>
    <!-- <img src="@/assets/img/pa.jpg" class="w-full"> -->
    <div class="w-full flex justify-center items-center">
        <button
            class="bg-teal-500 py-2 w-32 rounded text-white hover:(bg-teal-600 scale-110) transform duration-300">按鈕</button>
    </div>
</template>
