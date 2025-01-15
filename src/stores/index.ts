import { defineStore } from "pinia";
import Apps from "@/datas/apps.json";

import step1 from "@/assets/images/step1.png";
import step2 from "@/assets/images/step2.png";
import step3 from "@/assets/images/step3.png";
import step4 from "@/assets/images/step4.png";
import cv from "@/assets/images/cv.png";
import nba from "@/assets/images/nba.png";
import hikotify from "@/assets/images/hikotify.png";
import linkedin from "@/assets/images/linkedin.png";
import github from "@/assets/images/github.png";
import folder from "@/assets/images/folder.png";
import tictactoe from "@/assets/images/tictactoe.png";
import calculator from "@/assets/images/calculator.png";
import earthquakes from "@/assets/images/earthquakes.png";
import hibu from "@/assets/images/hibu.png";
import setup from "@/assets/images/setup.png";
import readme from "@/assets/images/readme.png";

type ImageMap = {
    [key: string]: string;
};

export const images: ImageMap = {
    step1: step1,
    step2: step2,
    step3: step3,
    step4: step4,
    cv: cv,
    nba: nba,
    hikotify: hikotify,
    linkedin: linkedin,
    github: github,
    folder: folder,
    tictactoe: tictactoe,
    calculator: calculator,
    earthquakes: earthquakes,
    hibu: hibu,
    setup: setup,
    readme: readme,
};

interface App {
    id: number;
    name: string;
    extention?: string;
    icon: string;
    type: string;
    url?: string;
    children?: App[];
    isOnStartMenu?: boolean;
    sortApp?: number;
}

interface Step {
    id: number;
    title: string;
    description: string | string[];
    img?: string;
}

export const useStore = defineStore("store", {
    state: () => ({
        stepNum: 1,
        steps: [
            {
                id: 1,
                title: "Welcome!",
                description:
                    "Complete the setup wizard to unlock access to my CV and explore everything I have to offer!",
            },
            {
                id: 2,
                title: "Employment History",
                description: [
                    "Globant/Zoox, Guadalajara, México (Nov 2022 – Present).",
                    "Globant/IHFintech, Guadalajara, México (July 2022 – Nov 2024).",
                    "Globant/Cloud Inventory, Guadalajara, México (July 2021 – July 2022).",
                    "Globant/Global Bank, Guadalajara, México (May 2021 – July 2021).",
                    "Softtek/UPS, Aguascalientes, México (Sep 2019 – Apr 2021).",
                ],
            },
            {
                id: 3,
                title: "Technical Skills",
                description: [
                    "Programming Languages: Java, Python, Typescript, C#, Kotlin.",
                    "CI/CD: AWS, Azure, Jenkins, GitHub Actions, Docker.",
                    "Test Management Tools: Jira, XRay, TestRails.",
                    "Automation Tools: Selenium, Playwright, Cypress, Appium, Espresso, XCUI.",
                    "Performance Testing: k6.",
                    "API Testing: Rest Assured, RestSharp, Postman.",
                    "Databases: MySQL, DynamoDB, Oracle, Microsoft SQL Server.",
                    "Testing Approaches: Cucumber, Test Design, Execution, and Reporting.",
                ],
            },
            {
                id: 4,
                title: "Hobbies",
                description: [
                    "I enjoy staying active and going to the gym regularly.",
                    "I appreciate relaxing moments, and occasionally, I enjoy a good beer.",
                    "I have a deep passion for exploring and embracing technological innovations.",
                    "I strive to contribute positively to the growth and betterment of the world.",
                ],
            },
        ],
        searchQuery: "",
        apps: Apps as App[],
        program: {} as App,
        folderPrograms: [] as App[] | undefined,
        currentTime: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        currentDate: new Date().toLocaleDateString("en-US"),
        recentApps: [] as App[],
        isShown: true,
        isMinimized: false,
        isFullscreen: false,
        isSetupFinished: false,
        isStartMenuOpen: false,
    }),
    getters: {
        getApps(): App[] {
            const query = this.searchQuery.trim();
            return query.length >= 3
                ? this.apps.filter((app) => app.name.toLowerCase().includes(query.toLowerCase()))
                : this.apps.sort((a, b) => (a.sortApp || 0) - (b.sortApp || 0));
        },
        getStartMenuApps(): App[] {
            return this.apps.filter((app) => app.isOnStartMenu);
        },
        currentStep(): Step {
            return this.steps[this.stepNum - 1];
        },
        maxSteps(): number {
            return this.steps.length;
        },
    },
    actions: {
        getCurrentTime() {
            this.currentTime = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
        },
        openProgram(app: App) {
            this.isStartMenuOpen = false;
            if (app.type === "app") {
                window.open(app.url, "_blank");
                this.insertRecentApp(app);
            } else {
                this.isMinimized = false;
                this.program = app;
                if (app.type === "folder") {
                    this.folderPrograms = app.children;
                } else {
                    this.insertRecentApp(app);
                }
            }
        },
        insertRecentApp(app: App) {
            if (app.isOnStartMenu || this.recentApps.includes(app)) return;
            if (this.recentApps.length === 5) this.recentApps.pop();
            this.recentApps.unshift(app);
        },
        closeProgram() {
            this.isFullscreen = false;
            this.isMinimized = false;
            this.stepNum = 1;
            this.program =
                this.program.type === "photo"
                    ? {
                          id: 9,
                          name: "Photographs",
                          icon: "folder",
                          type: "folder",
                          children: Array.from({ length: 5 }, (_, i) => ({
                              id: i + 10,
                              name: `photo${i + 1}`,
                              extention: "jpg",
                              icon: `photo${i + 1}`,
                              type: "photo",
                          })),
                      }
                    : ({} as App);
        },
        toggleMinimized() {
            this.isMinimized = !this.isMinimized;
            if (this.isMinimized) this.isStartMenuOpen = false;
        },
        toggleFullscreen() {
            this.isFullscreen = !this.isFullscreen;
        },
        nextStep() {
            if (this.stepNum < this.maxSteps) this.stepNum++;
        },
        prevStep() {
            if (this.stepNum > 1) this.stepNum--;
        },
        finishSetup() {
            this.stepNum = 1;
            this.isSetupFinished = true;
            this.program = {} as App;
        },
        downloadCV() {
            const link = document.createElement("a");
            link.href = "./cv.pdf";
            link.download = "jesus_salatiel_sdet.pdf";
            link.click();
        },
    },
});
