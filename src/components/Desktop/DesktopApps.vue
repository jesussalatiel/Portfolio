<script lang="ts" setup>
    import { storeToRefs } from "pinia";
    import { useStore, images } from "@/stores/index";

    const store = useStore();
    const { getApps, isSetupFinished } = storeToRefs(store);
    const { openProgram, downloadCV } = store;
</script>
<template>
    <div class="desktop-apps">
        <div class="desktop-apps__apps">
            <div class="desktop-apps__apps-item" v-for="app in getApps" :key="app.id" @click="openProgram(app)">
                <div class="desktop-apps__apps-item-icon">
                    <img :src="images[app.icon]" />
                </div>
                <div class="desktop-apps__apps-item-name">
                    <p>{{ app.name }}{{ app.extention ? "." + app.extention : "" }}</p>
                </div>
            </div>
            <div class="desktop-apps__apps-item" v-if="isSetupFinished" @click="downloadCV">
                <div class="desktop-apps__apps-item-icon">
                    <img src="@/assets/images/pdf.png" />
                </div>
                <div class="desktop-apps__apps-item-name">
                    <p>Jesus_Salatiel_SDET.pdf</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .desktop-apps {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        &__apps {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            max-height: calc(100vh - 50px);
            width: 250px;
            &-item {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 10px;
                width: 100px;
                height: 100px;
                cursor: pointer;
                &-icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 70px;
                    height: 70px;
                    margin: 0 auto;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                &-name {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                    p {
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        word-break: break-word;
                    }
                }
            }
        }
    }
</style>
