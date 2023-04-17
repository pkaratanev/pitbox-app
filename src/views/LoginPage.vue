<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-input
            label="Email"
            label-placement="stacked"
            :clear-input="true"
            type="email"
            placeholder="email@domain.com"
            v-model="email"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            label="Password"
            label-placement="stacked"
            :clear-input="true"
            type="password"
          ></ion-input>
        </ion-item>

        <ion-button expand="block" color="primary" @click="login">
          Login
        </ion-button>
        <ion-button expand="block" color="secondary" router-link="/register">
          Register
        </ion-button>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import axios from "axios";
import { Device } from "@capacitor/device";
import { General } from "../constants/General";
import { useGeneralStore } from "../store/GeneralStore";

import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonItem,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from "@ionic/vue";

let email: string | null = null;
let password: string | null = null;

async function login() {
  const deviceID = await Device.getId();

  axios
    .post(General.API_URL + "/login", { email, password, deviceID })
    .then((response) => {
      let key = response.split("|")[1];
    });

  const generalStore = useGeneralStore();

  generalStore.setApiKey("test");

  console.log(generalStore.getApiKey);
}
</script>
