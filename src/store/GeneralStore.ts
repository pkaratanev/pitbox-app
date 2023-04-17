import { defineStore } from "pinia";

export const useGeneralStore = defineStore("GeneralStore", {
  state: () => {
    return {
        apiKey: null as string | null,
      }
  },
  getters: {
    getApiKey: (state) => state.apiKey,
  },
  actions: {
    setApiKey(key: string) {
      this.apiKey = key;
    },
  },
});
