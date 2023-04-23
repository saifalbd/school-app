import { createRouter, createWebHistory } from "vue-router";

const routes = [
    /*------------ START AUTHORIZE--------------------*/
    {
        path: "/",
        name: "login",
        component: () => import("../view/auth/signin.vue"),
    },
    {
        path: "/forgetpassword",
        name: "forgetpassword",
        component: () => import("../view/auth/forgetpassword.vue"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("../view/auth/signup.vue"),
    },
  

    /*------------ END AUTHORIZE--------------------*/
    {
        path: "/home",
        name: "layout",
        component: () => import("../components/layout/index.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("../view/dashboard/index.vue"),
            },
            {
                path:'/test',
                name:'test',
                component:()=>import('../view/test.vue')
            },
            /*-------------------START STUDENT RELATED -------*/

            {
                path: "/student",
                name: "student.index",
                component: () => import("../view/Student/index.vue"),
            },
            {
                path: "/student-add",
                name: "student.create",
                component: () => import("../view/Student/create.vue"),
            },
            {
                path: "/student/:id",
                name: "student.edit",
                component: () => import("../view/Student/edit.vue"),
                props:(route)=>({id:route.params.id})
            },
          
            /*------------------ENd STUDENT Related Routes -----*/
            /*-------------------START Bannar RELATED -------*/
            {
                path: "/bannars",
                name: "bannar.index",
                component: () => import("../view/Bannar/index.vue"),
            },
            {
                path: "/bannar-add",
                name: "bannar.create",
                component: () => import("../view/Bannar/create.vue"),
            },
            {
                path: "/bannar/:id",
                name: "bannar.edit",
                component: () => import("../view/Bannar/edit.vue"),
                props:(route)=>({id:route.params.id})
            },
            /*-------------------END Bannar RELATED -------*/
        ],
    },
];

const router = createRouter({
    history: createWebHistory('/admin'),
    routes,
});

export default router;
