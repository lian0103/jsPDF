<script setup>
import { ref } from 'vue';
import Pdf from './components/Pdf.vue';

const imgRef = ref(null);
</script>

<template>
    <div class="box">
        <Pdf
            url="./test.pdf"
            @getImg="
                (imgURL) => {
                    imgRef = imgURL;
                }
            "
        ></Pdf>
        <img v-if="imgRef" :src="imgRef" alt="生成" />
    </div>
</template>

<style scoped>
.box {
    display: flex;
    position: relative;
    justify-items: flex-start;
    align-items: flex-start;
}
</style>
