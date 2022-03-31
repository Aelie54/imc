<script setup lang="ts">
    //formulaire pourles données du client
    import FormImc from "../components/Form_Imc.vue";
    //tableau recapitulatif
    import Table1 from "../components/Table_Imc.vue";
</script>

<!--contenu de cette vue, présentation et illustration de l'IMC -->
<template>
    <main>
        <h1>Définition de l'IMC</h1>
        <br />
        <p>L’indice de masse corporelle (IMC) vous permet d’évaluer
            rapidement votre corpulence d'après votre poids et votre taille. Votre sexe
            n'est pas à préciser. Mais quelque soit votre poids, vous êtes beau/belle,
            ne l'oubliez pas!</p>
        <br />
        <img
        src="https://www.premiere-reponse.com/wp-content/uploads/2021/10/imc.jpg"/>
        <br />
        <!-- mon formulaire-->
        <FormImc />
        <!-- mon table de recap-->
        <Table1 />
    </main>
</template>

<style>
img {
    width: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
