<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import axios from "../helpers/axios";

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
  IonCardContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";

import { search, personCircle } from "ionicons/icons";

const showSearch: Ref<boolean> = ref(false);
const currentPage: Ref<number> = ref(1);
const garages: Ref<any> = ref([]);

const fetchGarages = () => {
  return axios
    .get(`/garages?page=${currentPage.value}`)
    .then((response: any) => {
      garages.value = [...garages.value, ...response.data];

      currentPage.value++;
    })
    .catch((e: any) => {
      console.error(e);
    });
};

const handleRefresh = (event: any) => {
  currentPage.value = 1;
  garages.value = [];

  fetchGarages().then(() => {
    event.target.complete();
  });
};

const handleInfiniteScroll = (event: any) => {
  fetchGarages().then(() => {
    event.target.complete();
  });
};

onMounted(() => {
  fetchGarages();
});
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
        <ion-button @click="showSearch = !showSearch">
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

    <ion-card v-for="garage in garages" :key="garage.id">
      <img
        alt="Silhouette of mountains"
        src="https://ionicframework.com/docs/img/demos/card-media.png"
      />
      <ion-card-header>
        <ion-card-title>{{ garage.name }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Here's a small text description for the card content. Nothing more,
        nothing less.
      </ion-card-content>
    </ion-card>

    <ion-infinite-scroll @ionInfinite="handleInfiniteScroll">
      <ion-infinite-scroll-content></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</template>
