import { defineStore } from "pinia";
import { ref } from "vue";

export const AuthStore = defineStore(
  "authStore",
  () => {
    let token = ref(null);
    let user = ref({});

    async function setAuth(data) {
      try {
        token.value = data.token;
        user.value = data.user;

        return true;
      } catch (error) {
        token.value = null;
        user.value = {};
        return false;
      }
    }

    function checkAuth() {
      try {
        if (token.value) {
          return true;
        }

        return false;
      } catch (error) {
        deleteAuth();
        return false;
      }
    }

    async function deleteAuth() {
      try {
        token.value = null;
        user.value = {};

        return true;
      } catch (error) {
        return false;
      }
    }

    async function logoutUser() {
      try {
        await deleteAuth();

        return true;
      } catch (error) {
        return false;
      }
    }

    return {
      token,
      user,
      setAuth,
      checkAuth,
      deleteAuth,
      logoutUser,
    };
  },
  {
    persist: {
      path: ["token", "user"],
    },
  }
);
