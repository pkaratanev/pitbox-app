<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import {
  IonButton,
  IonButtons,
  IonSearchbar,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/vue";

import { search, personCircle } from "ionicons/icons";

const showSearch: Ref<boolean> = ref(false);

const handleRefresh = (event: any) => {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 1000);
};
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="secondary">
        <ion-button>
          <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="primary">
        <ion-button>
          <ion-icon slot="icon-only" :icon="search"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Avalable Mechanic Shops</ion-title>
    </ion-toolbar>
    <ion-toolbar v-if="showSearch">
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <ion-card>
      <img
        alt="Silhouette of mountains"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
      />
      <ion-card-header>
        <ion-card-title>Card Title</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Here's a small text description for the card content. Nothing more,
        nothing less.
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>
