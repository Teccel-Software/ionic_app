import { defineStore } from "pinia";
import { ref } from "vue";

export const AppStore = defineStore(
  "appStore",
  () => {
    let nav_tab_link = ref(null);

    async function clearAppStore() {
      nav_tab_link.value = null;
    }

    return {
      nav_tab_link,
      clearAppStore,
    };
  },
  {
    persist: {
      path: ["nav_tab_link"],
    },
  }
);
