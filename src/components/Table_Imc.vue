<template>
  <table>
    <thead>
      <tr>
        <th scope="col">Taille(cm)</th>
        <th scope="col">Poids(kg)</th>
        <th scope="col">IMC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- Données du store en "store. ... ""-->
        <td>{{ store.taille }}</td>
        <td>{{ store.poids }}</td>
        <td>{{ store.imc }}</td>
      </tr>
      <tr></tr>
    </tbody>
  </table><br>
</template>

<script setup lang="ts">

  //pour pouvoir utiliser les données du store il faut déjà un import
  import { useImcStore } from "@/stores/imc";

  //et ne pas oublierle const
  const store = useImcStore();

</script>


<style>

table {
  margin: 10px;
}

table, th, td {
  border: 1px solid;
}

td {
  width: 600px;
  padding: 20px;
}

</style>

