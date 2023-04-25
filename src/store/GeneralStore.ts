import { defineStore } from "pinia";

export const useGeneralStore = defineStore("GeneralStore", {
  state: () => {
    return {
        apiKey: null as string | null,
        user: null as object | null
      }
  },
  getters: {
    getApiKey: (state) => state.apiKey,
    getUser: (state) => state.user,
  },
  actions: {
    setApiKey(key: string) {
      this.apiKey = key;
    },
    setUser(data: object) {
      this.user = data;
    }
  },
});
