<script lang="ts" setup>
    import { storeToRefs } from "pinia";
    import { useStore } from "@/stores/index";

    const store = useStore();
    const { stepNum, currentStep, isMinimized } = storeToRefs(store);
    const { maxSteps, nextStep, prevStep, finishSetup } = store;
</script>
<template>
    <div class="step-window" v-show="!isMinimized">
        <div class="step-window__body">
            <div class="step-window__body-step">
                <div class="step-window__body-step-number">
                    <span
                        >Step <span class="step-window__body-step-number-current">{{ stepNum }}</span> /
                        {{ maxSteps }}</span
                    >
                </div>
            </div>
            <div class="step-window__body-step-content">
                <!-- Image Loader-->
                <!-- <img :src="currentStep.img" alt="banner" class="step-window__body-step-content-banner" /> -->
                <div class="step-window__body-step-content-text">
                    <div class="step-window__body-step-content-text-title">
                        <p>{{ currentStep.title }}</p>
                    </div>
                    <div class="step-window__body-step-content-text-description">
                        <ul>
                            <li v-if="typeof currentStep.description === 'string'">
                                {{ currentStep.description }}
                            </li>
                            <li v-else v-for="(line, index) in currentStep.description" :key="index">
                                {{ line }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="step-window__buttons">
                <button @click="prevStep" :disabled="stepNum === 1">&lt; Back</button>
                <button @click="nextStep" v-if="stepNum !== maxSteps">Next &gt;</button>
                <button @click="finishSetup" v-if="stepNum === maxSteps">Let's do it</button>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .step-window {
        background: #333333;
        position: relative;
        font-size: 32px;
        &__body {
            padding: 10px;
            &-step {
                &-number {
                    &-current {
                        color: #8c52ff;
                    }
                }
                &-content {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-bottom: 80px;
                    &-banner {
                        height: 100%;
                    }
                    &-text {
                        padding: 0 20px;
                        width: 100%;
                        &-title {
                            font-weight: 700;
                        }
                        &-description {
                            font-size: 18px;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
        &__buttons {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 10px 5px;
            text-align: right;
            border-top: 1px solid rgba(30, 30, 30, 1);
            button {
                padding: 7px;
                margin: 0 5px;
                border-radius: 5px;
                border: none;
                outline: none;
                color: #000;
                background-color: #fff;
                font-size: 20px;
                line-height: 20px;
                cursor: pointer;
                transition: all 0.6s;
                &:disabled {
                    background-color: #555;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .step-window {
            &.fullscreen {
                height: calc(100% - 60px);
            }
            &__body-step-content-banner {
                width: 100px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .step-window {
            font-size: 24px;
        }
    }
</style>
