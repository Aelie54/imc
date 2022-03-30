<template>
  <div>
    <h1>Entrez vos données personnelles </h1><br>
    <form @submit.prevent="calcul_Imc">
      <label for="taille"> Entrer taille (cm) : </label>
      <input type="number" name="taille" id="taille" placeholder="en cm"  min="130" max="250"
        v-model="imc.taille" /><br>
      <label for="poids"> Entrer poids (kg) : </label>
      <input type="number" name="poids" id="poids" placeholder="en kg"  min="30" max="150"
        v-model="imc.poids" /><br><br>
      <input type="submit" value="Calcul de votre IMC" /><br><br>
    </form>
  </div>
</template>


<script setup lang="ts">

    //pour rendre "reactif"imc
    import { reactive } from "vue";

    //pour garder les donées entrées dans le store et les réutiliser dans le tableau
    import { useImcStore } from "@/stores/imc";

    //données réactives qui vont prendre les valeurs des champs inputs
    const imc = reactive({
        taille: 0,
        poids: 0,
    });

    //store
    const store = useImcStore();

    //fonction permettant le calcul de l'imc
    function calcul_Imc() {

        //calcul de l'IMC
        let calculateImc = Math.round((imc.poids / Math.pow(imc.taille, 2)) * 10000);

        //les données qui font references Aux chAmps inputs qui sont envoyées dans le store pour réutilisation dont la donnée d el'imc que l'on retrouvera dans le tableau recap
        store.imc = calculateImc;
        store.taille = imc.taille;
        store.poids = imc.poids;
    }

</script>

<style>
label
{
	display: block;
	width: 150px;
	float: left;
}
</style>