<script setup>

</script>

<template>
    <div
        class="sticky top-0 left-0 z-50 w-full bg-teal-500 h-20 flex justify-between items-center px-24 shadow shadow-teal-700">
        <div class="flex justify-start items-center">
            <div class="text-white font-semibold text-2xl">
                <NuxtLink to="/">DomainName</NuxtLink>
            </div>
            <ul class="ml-5 text-white">
                <li class="px-3 py-2 hover:(bg-teal-600) rounded duration-300">
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </div>
        <div>
            <button
                class="bg-teal-600 text-white rounded px-5 py-2 mr-2 hover:(bg-teal-500 shadow shadow-teal-700) duration-300">登入</button>
            <button class="bg-teal-500 text-white rounded px-5 py-2 hover:(bg-teal-600) duration-300">註冊</button>
        </div>
    </div>
</template>

<style>

</style>