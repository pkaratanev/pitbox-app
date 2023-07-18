<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import axios from "../helpers/axios";
import { useRouter } from "vue-router";
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

const router = useRouter();

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const errors: Ref<any> = ref([]);

function login() {
  const generalStore = useGeneralStore();

  axios
    .post("/login", {
      email: email.value,
      password: password.value,
    })
    .then((response: any) => {
      generalStore.setApiKey(response.apiKey.split("|")[1]);
      generalStore.setUser(response.user);

      router.push("/home");
    })
    .catch((e: any) => {
      errors.value = e.response.data.errors;
    });
}
</script>

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
          >
          </ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            label="Password"
            label-placement="stacked"
            :clear-input="true"
            type="password"
            v-model="password"
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
