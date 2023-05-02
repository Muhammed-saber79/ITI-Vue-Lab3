import {createRouter, createWebHistory} from "vue-router";
import App from "../App.vue";
import AboutComponent from "../components/Layouts/AboutComponent";
import ContactComponent from "../components/Layouts/ContactComponent";
import UnderConstructionComponent from "../components/Layouts/UnderConstructionComponent";
import StudentDetailsComponent from "../components/StudentCRUD/StudentDetailsComponent";

// 2-create app routes...
const routes = [
    {
        path: "/",
        component: App,
    },
    {
        path: "/about",
        component: AboutComponent,
    },
    {
        path: "/contact",
        component: ContactComponent,
    },
    {
        path: "/studentDetails/:id",
        component: StudentDetailsComponent,
    },
    {
        path: "/:catchAll(.*)",
        component: UnderConstructionComponent,
    }
]

// 3-create router object...
const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

// 4-export router object...
export default router;