import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"

export const useGeneralStore = defineStore("GeneralStore", {
  state: () => {
    return {
        apiKey: useLocalStorage('apiKey', null) as any,
        user: useLocalStorage('user', {}) as any,
      }
  },
  getters: {
    getApiKey: (state) => state.apiKey,
    getUser: (state) => state.user,
    isLoggedIn: (state) => !!state.apiKey,
  },
  actions: {
    setApiKey(key: string) {
      this.apiKey = key;
    },
    setUser(data: object) {
      this.user = data;
    },
    logOut() {
      this.apiKey = null;
      this.user = {};
    }
  },
});
