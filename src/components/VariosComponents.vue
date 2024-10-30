<template>
    <TransitionGroup name="list" tag="ul">
        <li v-for="(element,index) in notes" v-bind:key="index"> 
            <v-icon name="bi-file-code" scale="5" hover="true" animation="pulse" title="My icon description"/> 
            {{ element }}</li>

    </TransitionGroup>
    <input type="text" v-model="note" placeholder="Ingresar texto">
    <button @click="handleNotes">Agregar nota</button>
</template>
  
<script lang="ts" setup>
    import { ref, Ref } from 'vue';

    const notes: Ref<Array<string>> = ref([]);
    const note: Ref<string> = ref('');

    const handleNotes = () => {
        notes.value.push(note.value);
        note.value = '';
    }
</script>
  
<style scoped>
    .list-enter-active, .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from, .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>
  