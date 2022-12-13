<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore();
onMounted(() => {
    name.value = 'Ryan';
})
const name = useCookie('name');
const { ans } = useAdd(5, 2);
const { data } = await useAsyncData('count', () => $fetch('https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card'));

function checkcookie() {

}
</script>

<template>
    <div class="flex justify-center items-center h-auto">
        <div class="w-full h-[800px]">
            <SliderNormal :data="data"></SliderNormal>
        </div>
    </div>
    <div class="w-full flex justify-center items-center mb-8">
        <button
            class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            @click="counterStore.increment">
            增加
        </button>
        <h2 class="text-7xl text-red-700 w-20 text-center">{{ counterStore.count }}</h2>
        <button
            class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            @click="counterStore.decrement">
            減少
        </button>
    </div>
    <button class="w-20 bg-blue-500" @click="checkcookie()">check cookies</button>
    <!-- <div class="px-5 break-words">
        <ul class="grid grid-cols-6 gap-5">
            <li class="col-span-1" v-for="item in data" :key="item.id"><img :src="item.photo" alt=""></li>
        </ul>
    </div> -->
</template>

<style>

</style>