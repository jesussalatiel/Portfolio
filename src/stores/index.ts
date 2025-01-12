import { defineStore } from "pinia";
import Apps from "@/datas/apps.json";

/* ************** IMAGES ************** */
import photo from "@/assets/images/photo.png";
import photo1 from "@/assets/images/photo1.jpg";
import photo2 from "@/assets/images/photo2.jpg";
import photo3 from "@/assets/images/photo3.jpg";
import photo4 from "@/assets/images/photo4.jpg";
import photo5 from "@/assets/images/photo5.jpg";
import step1 from "@/assets/images/step1.png";
import step2 from "@/assets/images/step2.png";
import step3 from "@/assets/images/step3.png";
import step4 from "@/assets/images/step4.png";
import solitaire from "@/assets/images/solitaire.png";
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
import infiniteWordle from "@/assets/images/infinite-wordle.png";
import setup from "@/assets/images/setup.png";
import readme from "@/assets/images/readme.png";

export const images = {
    photo: photo,
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4,
    photo5: photo5,
    step1: step1,
    step2: step2,
    step3: step3,
    step4: step4,
    solitaire: solitaire,
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
    "infinite-wordle": infiniteWordle,
    setup: setup,
    readme: readme,
} as any;
/* ************** END of IMAGES ************** */
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
    description: string;
    img: any;
}

export const useStore = defineStore({
    id: "store",
    state: () => ({
        stepNum: 1,
        steps: [
            {
                id: 1,
                title: "Welcome!",
                description: "At the of setup wizard, you will be able to see my CV.",
                img: "step1",
            },
            {
                id: 2,
                title: "Employment History",
                description: "In short, you can see my employment history.",
                img: "step2",
            },
            { id: 3, title: "Technical Skills", description: "My technical skills can be seen here.", img: "step3" },
            { id: 4, title: "Hobbies", description: "My hobbies are listed here.", img: "step4" },
        ],
        searchQuery: "",
        apps: Apps as App[],
        program: {} as App,
        folderPrograms: [] as App[] | undefined,
        currentTime: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        currentDate: new Date().toLocaleDateString("en-GB"),
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
            this.currentTime = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
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
            link.download = "cv.pdf";
            link.click();
        },
    },
});
