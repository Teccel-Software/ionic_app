<template>
  <ion-page>
    <ion-tabs>
      <custom-header />
      <ion-router-outlet id="main-content" class="mt-11"></ion-router-outlet>
      <tabs />
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { IonTabs, IonRouterOutlet } from "@ionic/vue";
import Tabs from "@component/Tabs.vue";
import CustomHeader from "@component/CustomHeader.vue";
</script>
