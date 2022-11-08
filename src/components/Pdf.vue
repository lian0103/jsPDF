<script setup>
import { onMounted, defineComponent, ref, nextTick, reactive } from 'vue';
import jsPDF from 'jsPDF';

const props = defineProps({
    url: {
        type: String,
        default: null,
    },
});

const canvas = ref(null);
const imgUrl = ref(null);
const pdfState = ref({
    tempPage: 1,
    page: 1,
    numPages: 0,
    scale: 1,
});
let currentPDF = null;
let isLoaded = {};

const emit = defineEmits(['getImg']);

const scaleChange = (type) => {
    switch (type) {
        case 'minus': {
            pdfState.value.scale = (pdfState.value.scale * 10 - 1) / 10;
            isLoaded[''+pdfState.value.page] = false;//todo
            renderPage(pdfState.value.page);
            break;
        }
        case 'plus': {
            pdfState.value.scale = (pdfState.value.scale * 10 + 1) / 10;
            isLoaded[''+pdfState.value.page] = false; //todo
            renderPage(pdfState.value.page);
            break;
        }
    }
};

// 开始签名
const onMouseDown = (e) => {
    const el = e.target || e.srcElement;
    const ctx = el.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    el.onmousemove = function (e) {
        if (e.which === 0) {
            el.onmousemove = null;
            el.onmouseup = null;
            return;
        }
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    };
    el.onmouseup = function () {
        el.onmousemove = null;
        el.onmouseup = null;
    };
    el.focus();
};

const genImg = () => {
    try {
        const target = document.getElementById(`the-canvas-${pdfState.value.page}`);
        imgUrl.value = target.toDataURL('image/png', 1.0);
        emit('getImg', imgUrl.value);
    } catch (e) {
        console.warn(e);
    }
};

const clearImg = () => {
    try {
        imgUrl.value = null;
        emit('getImg', imgUrl.value);
    } catch (e) {
        console.warn(e);
    }
};

// 清空签名
const clearPanel = (e) => {
    nextTick(() => {
        const canvas = document.getElementById(`the-canvas-${pdfState.value.page}`);
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isLoaded[pdfState.value.page] = false;
        initPdf();
    });
};

const prePage = () => {
    pdfState.value.page = pdfState.value.page - 1;
    renderPage(pdfState.value.page);
};

const nextPage = () => {
    pdfState.value.page = pdfState.value.page + 1;
    renderPage(pdfState.value.page);
};

const isSaving = ref(false);

const save = async () => {
    const target = document.getElementById(`the-canvas-${pdfState.value.page}`);
    const direction = target.width > target.height ? 'l' : '';
    const doc = new jsPDF(direction, 'px', [target.width, target.height]);
    const imgData = target.toDataURL('image/png', 1);

    doc.addImage(imgData, 'JPEG', 0, 0, target.width, target.height);
    doc.save(`${pdfState.value.page}.pdf`);
};

const saveAll = async () => {
    isSaving.value = true;
    let width = 0;
    let height = 0;
    let direction;
    let arr = [];

    for (let page = 1; page <= pdfState.value.numPages; page++) {
        if (isLoaded[page]) {
            const target = document.getElementById(`the-canvas-${page}`);
            direction = target.width > target.height ? 'l' : '';
            width = target.width;
            height = target.height;
            const imgData = target.toDataURL('image/png', 1);
            arr.push(imgData);
            console.log(page);
        } else {
            let content = await currentPDF.getPage(page);
            var scale = 1;
            var viewport = content.getViewport({ scale: scale });
            // Prepare canvas using PDF page dimensions
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await content.render({
                canvasContext: context,
                viewport: viewport,
            }).promise;
            const imgData = canvas.toDataURL('image/png', 1);
            width = canvas.width;
            height = canvas.height;
            arr.push(imgData);
            console.log(page);
        }
    }
    console.log('save', arr);
    const doc = new jsPDF(direction, 'px', [width, height]);
    arr.forEach((item, idx) => {
        doc.addImage(item, 'JPEG', 0, 0, width, height);
        if (idx + 1 !== arr.length) {
            doc.addPage();
        }
    });
    doc.save('all.pdf');
    isSaving.value = false;
};

const renderPage = (page) => {
    console.log('isLoaded', isLoaded);
    if (!isLoaded['' + page]) {
        currentPDF.getPage(page).then(
            function (page) {
                // console.log('Page loaded', page);
                var viewport = page.getViewport({ scale: pdfState.value.scale });
                console.log(viewport);
                // Prepare canvas using PDF page dimensions
                var canvas = document.getElementById(`the-canvas-${pdfState.value.page}`);
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                var renderTask = page.render(renderContext);
                renderTask.promise.then(function () {
                    // console.log('Page rendered');
                    isLoaded['' + pdfState.value.page] = true;
                    pdfState.value.tempPage = pdfState.value.page;
                });
            },
            (err) => {
                pdfState.value.page = pdfState.value.tempPage;
                throw Error('the page is not exist');
            }
        );
    } else {
        pdfState.value.tempPage = pdfState.value.page;
    }
};

const initPdf = async () => {
    if (!props.url) return false;

    const pdfjsLib = await import('pdfjs-dist/build/pdf');
    const workerSrc = await import('pdfjs-dist/build/pdf.worker.entry');

    pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

    // Asynchronous download of PDF
    var loadingTask = pdfjsLib.getDocument(props.url);
    loadingTask.promise.then(
        function (pdf) {
            // console.log('PDF loaded', pdf);
            currentPDF = pdf;
            pdfState.value.numPages = pdf.numPages;
            renderPage(pdfState.value.page);
        },
        (err) => {
            console.log(err);
        }
    );
};

onMounted(() => {
    initPdf();
});
</script>

<template>
    <div>
        <h1>PDF.js 'Hello, world!' example</h1>
        <div v-for="page in pdfState.numPages" :key="page">
            <canvas v-show="page === pdfState.page" :id="`the-canvas-${page}`" @mousedown="onMouseDown"></canvas>
        </div>

        <!-- <canvas ref="canvas" id="the-canvas" @mousedown="onMouseDown"></canvas> -->
        <p>頁碼:{{ `${pdfState.page} /${pdfState.numPages}` }}</p>

        <p v-if="isSaving">saving...</p>
        <div>
            <button type="danger" @click.native.prevent="clearPanel">清空筆跡</button>
            <button type="primary" @click="genImg">生成圖片</button>
            <button type="primary" @click="clearImg">清空圖片</button>
            <button
                @click="
                    () => {
                        scaleChange('minus');
                    }
                "
            >
                scale --
            </button>
            <button
                @click="
                    () => {
                        scaleChange('plus');
                    }
                "
            >
                scale ++
            </button>
            <button @click="save">單頁PDF儲存</button>
            <button @click="nextPage">下一頁</button>
            <button @click="prePage">上一頁</button>
            <button @click="saveAll">儲存全部</button>
        </div>
    </div>
</template>

<style>
canvas {
    border: 1px solid black;
    direction: ltr;
}
button {
    margin-left: 10px;
    margin-top: 10px;
}
</style>
