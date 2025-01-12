<script lang="ts" setup>
    import { storeToRefs } from "pinia";
    import { useStore, images } from "@/stores/index";

    const store = useStore();
    const { isFullscreen, folderPrograms } = storeToRefs(store);
    const { openProgram } = store;
</script>

<template>
    <div class="folder-window" :class="{ fullscreen: isFullscreen }">
        <div class="folder-window__apps">
            <div
                class="folder-window__apps-item"
                v-for="app in folderPrograms as any"
                :key="app.id"
                @click="openProgram(app)"
            >
                <div class="folder-window__apps-item-icon">
                    <img :src="images[app.icon]" />
                </div>
                <div class="folder-window__apps-item-name">
                    <p>{{ app.name }}{{ app.extention ? "." + app.extention : "" }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .folder-window {
        width: 100%;
        height: auto;
        max-height: 750px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        background: #333;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        &.fullscreen {
            height: calc(100% - 50px);
            max-height: calc(100% - 50px);
        }

        &__apps {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            transition: all 0.3s ease;

            &-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100px;
                height: 120px;
                background: #444;
                border-radius: 12px;
                cursor: pointer;
                padding: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                transition:
                    transform 0.2s ease,
                    box-shadow 0.3s ease;
                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                }

                &-icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 70px;
                    height: 70px;
                    margin: 0 auto;
                    border-radius: 8px;
                    background-color: #fff;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                &-name {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    width: 100%;
                    p {
                        margin-top: 5px;
                        font-size: 14px;
                        color: #f1f1f1;
                        font-weight: 500;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .folder-window {
            &.fullscreen {
                height: calc(100% - 60px);
            }
        }

        .folder-window__apps-item {
            width: 80px;
            height: 100px;
        }
    }
</style>
