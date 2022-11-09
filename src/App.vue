<script setup>
import { ref } from 'vue';
import Pdf from './components/Pdf.vue';

const imgRef = ref(null);

const handleImg = (dataURL) => {
    const link = document.createElement('a');
    link.download = 'test.png';
    link.href = dataURL;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
};
</script>

<template>
    <div class="box">
        <Pdf url="./test.pdf" @getImg="handleImg"></Pdf>
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
