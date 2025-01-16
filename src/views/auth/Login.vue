<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-input
            label="User Name"
            v-model="credentials.username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            type="password"
            label="password"
            v-model="credentials.password"></ion-input>
        </ion-item>
      </ion-list>
      <ion-button @click="login()">Login</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonInput, IonItem, IonList, IonButton } from "@ionic/vue";
import { reactive, ref } from "vue";
import { auth } from "@router/apis";
import { useIonRouter } from "@ionic/vue";
const ionRouter = useIonRouter();

//Auth Store
import { AuthStore } from "../../store/AuthStore";
const authStore = AuthStore();

const credentials = reactive({
  username: "admin",
  password: "password",
});

async function login() {
      const status = await authStore.setAuth({"token":"test","user":{}});
      if (status) {
        ionRouter.replace("/test");
      }
}
</script>
