import { defineStore } from "pinia";

export const useImcStore = defineStore({
  id: "imc",
  state: () => ({
    poids: 0,
    taille: 0,
    imc: 0,
  }),
  getters: {
    getImc: (state) => state.imc,
  },
  actions: {},
});