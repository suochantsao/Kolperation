// * Framework and other tools
import Vue from "vue";
import VueRouter from "vue-router";

// * Router
Vue.use(VueRouter);
const routes = [
  { path: "*", redirect: "/" },

  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/loader",
    name: "SignUp_loader",
    component: () => import("../views/SignUp_loader.vue"),
  },
  {
    path: "/trial",
    name: "Trial",
    component: () => import("../views/Trial.vue"),
    redirect: "/trial/first",
    children: [
      {
        path: "first",
        name: "First",
        component: () => import("../views/Trial_first.vue"),
      },
      {
        path: "second",
        name: "Second",
        component: () => import("../views/Trial_second.vue"),
      },
      {
        path: "loader",
        name: "Loader",
        component: () => import("../views/Trial_loader.vue"),
      },
      {
        path: "result",
        name: "Result",
        component: () => import("../views/Trial_result.vue"),
      },
    ],
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
    children: [
      {
        path: "kol",
        name: "SignUp_kol",
        component: () => import("../views/SignUp_kol.vue"),
      },
      {
        path: "firm",
        name: "SignUp_firm",
        component: () => import("../views/SignUp_firm.vue"),
      },
    ],
  },
  {
    path: "/kolplat",
    name: "KolPlat",
    component: () => import("../views/Kol.vue"),
    children: [
      {
        path: "msg",
        name: "Kol_msg",
        component: () => import("../views/Kol_msg.vue"),
      },
      {
        path: "msgDialog",
        name: "Kol_msgDialog",
        component: () => import("../views/Kol_msgDialog.vue"),
      },
      {
        path: "consult",
        name: "Kol_consult",
        component: () => import("../views/Kol_consult.vue"),
      },
      {
        path: "consultDetail",
        name: "Kol_consultDetail",
        component: () => import("../views/Kol_consultDetail.vue"),
      },
      {
        path: "sucess",
        name: "Kol_sucess",
        component: () => import("../views/Kol_sucess.vue"),
      },
      {
        path: "sucessDetail",
        name: "Kol_sucessDetail",
        component: () => import("../views/Kol_sucessDetail.vue"),
      },
      {
        path: "savefirm",
        name: "Kol_saveFirm",
        component: () => import("../views/Kol_saveFirm.vue"),
      },
      {
        path: "savecase",
        name: "Kol_saveCase",
        component: () => import("../views/Kol_saveCase.vue"),
      },
      {
        path: "passcase",
        name: "Kol_passCase",
        component: () => import("../views/Kol_passCase.vue"),
      },
      {
        path: "setting",
        name: "Kol_setting",
        component: () => import("../views/Kol_setting.vue"),
      },
      {
        path: "firmdetail",
        name: "Kol_firmDetail",
        component: () => import("../views/Kol_firmDetail.vue"),
      },
      {
        path: "searchplat",
        name: "Kol_searchPlat",
        component: () => import("../views/Kol_searchPlat.vue"),
      },
      {
        path: "searchsector",
        name: "Kol_searchSector",
        component: () => import("../views/Kol_searchSector.vue"),
      },
      {
        path: "searchloader",
        name: "Kol_searchLoader",
        component: () => import("../views/Kol_searchLoad.vue"),
      },
      {
        path: "searchresult",
        name: "Kol_searchResult",
        component: () => import("../views/Kol_searchResult.vue"),
      },
    ],
  },
  {
    path: "/firmplat",
    name: "FirmPlat",
    component: () => import("../views/Firm.vue"),
    children: [
      {
        path: "msg",
        name: "Firm_msg",
        component: () => import("../views/Firm_msg.vue"),
      },
      {
        path: "msgdialog",
        name: "Firm_msgDialog",
        component: () => import("../views/Firm_msgDialog.vue"),
      },
      {
        path: "consult",
        name: "Firm_consult",
        component: () => import("../views/Firm_consult.vue"),
      },
      {
        path: "consultdetail",
        name: "firmConsultDetail",
        component: () => import("../views/Firm_consultDetail.vue"),
      },
      {
        path: "success",
        name: "Firm_success",
        component: () => import("../views/Firm_success.vue"),
      },
      {
        path: "successdetail",
        name: "Firm_successDetail",
        component: () => import("../views/Firm_successDetail.vue"),
      },
      {
        path: "searchplat",
        name: "Firm_searchPlat",
        component: () => import("../views/Firm_searchPlat.vue"),
      },
      {
        path: "searchsector",
        name: "Firm_searchSector",
        component: () => import("../views/Firm_searchSector.vue"),
      },
      {
        path: "searchfans",
        name: "Firm_searchFans",
        component: () => import("../views/Firm_searchFans.vue"),
      },
      {
        path: "searchloader",
        name: "Firm_searchLoad",
        component: () => import("../views/Firm_searchLoad.vue"),
      },
      {
        path: "searchresult",
        name: "Firm_searchResult",
        component: () => import("../views/Firm_searchResult.vue"),
      },
      {
        path: "savekol",
        name: "Firm_saveKol",
        component: () => import("../views/Firm_saveKol.vue"),
      },
      {
        path: "koldetail",
        name: "Firm_kolDetail",
        component: () => import("../views/Firm_kolDetail.vue"),
      },
      {
        path: "passcase",
        name: "Firm_passCase",
        component: () => import("../views/Firm_passCase.vue"),
      },
      {
        path: "setting",
        name: "Firm_setting",
        component: () => import("../views/Firm_setting.vue"),
      },
      {
        path: "addcase",
        name: "Firm_addCase",
        component: () => import("../views/Firm_addCase.vue"),
      },
      {
        path: "editcase",
        name: "Firm_editCase",
        component: () => import("../views/Firm_editCase.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  hash: false,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
