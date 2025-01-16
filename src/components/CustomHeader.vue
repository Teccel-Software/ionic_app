<template>
  <ion-header class="ion-no-border" :translucent="true">
    <ion-toolbar>
      <div class="flex justify-between">
        <div>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </div>
        <div>
          <ion-title
            class="mt-2 text-base font-bold antialiased tracking-normal">
            {{ currentRouteName }}
          </ion-title>
        </div>
        <div>
          <ion-buttons slot="end">
            <ion-button @click="logout">
              <ion-icon slot="icon-only" color="danger" :icon="logOutOutline">
              </ion-icon>
            </ion-button>
          </ion-buttons>
        </div>
      </div>
    </ion-toolbar>
  </ion-header>
</template>
<script setup>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonMenuButton,
  alertController,
} from "@ionic/vue";
import { logOutOutline } from "ionicons/icons";
import { AuthStore } from "@store/AuthStore";
import { computed } from "vue";
import { useRoute } from "vue-router";
import router from "@router/index";

const authStore = AuthStore();
const route = useRoute();

const currentRouteName = computed(() => {
  return route.name;
});

async function logout() {
  const alert = await alertController.create({
    header: "Want To Logout!",
    buttons: [
      {
        text: "Cancel",
        role: "cancel",
        handler: () => {},
      },
      {
        text: "OK",
        role: "confirm",
        handler: async () => {
          const status = await authStore.logoutUser();
          if (status) {
            router.replace({ path: "/login" });
            window.location.reload();
            return;
          }
        },
      },
    ],
  });
  await alert.present();
}
</script>
