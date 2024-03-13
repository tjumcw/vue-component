import {createRouter, createWebHistory} from "vue-router";
import Table from "@/views/table";
import Form from "@/views/form";


const routes = [

    {
        path: "/table",
        component: Table
    },
    {
        path: "/form",
        component: Form
    },
    {
        path: "/error",
        name: "Error",
        component: () => import("../views/error"),
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
