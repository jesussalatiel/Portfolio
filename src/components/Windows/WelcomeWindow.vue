<script lang="ts" setup>
    import { useStore } from "@/stores/index";
    import { onMounted, ref } from "vue";

    const store = useStore();
    const { downloadCV } = store;

    const progressArray = ref([0, 0, 0, 0, 0]);
    const isAllProgressCompleted = ref(false);
    onMounted(() => {
        timeOut();
    });
    let row = 0;
    function timeOut() {
        if (row === progressArray.value.length) {
            isAllProgressCompleted.value = true;
            return;
        }
        progressArray.value[row] += 1;
        setTimeout(function () {
            if (progressArray.value[row] < 100) {
                timeOut();
            } else if (progressArray.value[row] === 100) {
                row++;
                timeOut();
            }
        }, 1);
    }
</script>
<template>
    <div class="welcome-window">
        <div class="progress" v-if="!isAllProgressCompleted">
            <div class="progress-row" v-for="(progress, index) of progressArray" :key="index">
                <div class="progress-before" v-if="progress !== 0">>></div>
                <div class="progress-bar" :style="{ width: progress + '%' }" v-if="progress !== 0"></div>
                <span class="progress-text" v-show="progress === 100">Completed!</span>
            </div>
        </div>
        <div class="welcome-text" v-if="isAllProgressCompleted">
            <h2>→ Welcome to my digital portfolio!</h2>
            <h4>→ Feel free to download my resume with just a click,</h4>
            <h4>→ Or close this window and dive into exploring my projects!</h4>
            <div class="download">
                <button class="download-button" @click="downloadCV">Download CV</button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .welcome-window {
        background: #000;
        // color hacker green
        color: #0f0;
        position: relative;
        font-size: 32px;
        padding: 10px 45px;
        .progress {
            &-row {
                display: flex;
                align-items: center;
                justify-content: start;
                .progress-bar {
                    width: 100%;
                    height: 10px;
                    background: #0f0;
                    margin: auto 8px;
                }
                .progress-text {
                    margin-left: 4px;
                    font-size: 16px;
                }
            }
        }
        .welcome-text {
            margin-top: 20px;
            font-size: 18px;
            .download {
                width: 100%;
                display: flex;
                justify-content: end;
                &-button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    border: 1px solid #0f0;
                    border-radius: 10px;
                    background: transparent;
                    color: #0f0;
                    cursor: pointer;
                    transition: all 0.5s;
                    &:hover {
                        background: #0f0;
                        color: #000;
                    }
                }
            }
        }
    }
</style>
