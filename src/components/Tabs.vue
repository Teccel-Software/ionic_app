<template>
  <ion-tab-bar slot="bottom">
    <ion-tab-button
      v-for="(tab, index) in tabRoutes.filter((tab) => tab.visible)"
      :key="`tab-${index}`"
      @click="changeTab(tab)">
      <ion-icon :icon="tab.icon" />
      <ion-label :class="appStore.nav_tab_link === tab.link ? 'font-bold' : ''">
        {{ tab.name }}
      </ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>
<script setup>
import { addOutline } from "ionicons/icons";
import { customPopAnimation } from "@helper/utils.js";
import { IonTabBar, IonTabButton, IonLabel, useIonRouter } from "@ionic/vue";
const ionRouter = useIonRouter();

import { AppStore } from "../store/AppStore";
const appStore = AppStore();

const tabRoutes = [
  {
    name: "Test",
    icon: addOutline,
    link: "/test",
    visible: true,
  },
  {
    name: "Test",
    icon: addOutline,
    link: "/test",
    visible: true,
  },
];

const changeTab = (tab) => {
  appStore.nav_tab_link = tab.link;
  ionRouter.push(tab.link, customPopAnimation);
};
</script>
