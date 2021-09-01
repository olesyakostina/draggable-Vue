<template>
    <div id="app">
        <vDrag />
    </div>
</template>
<script>
import vDrag from "./components/v-draggable";
export default {
    name: "App",
    components: {
        vDrag,
    },
};
</script>
<style>
body {
    background: rgb(231, 231, 231);
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;

    padding: 4em;
}
</style>

<!-- <draggable
                v-model="myArray"
                group="people"
                @start="drag = true"
                @end="drag = false"
            >
                <div v-for="element in myArray" :key="element.id">
                    {{ element.name }}
                </div>
            </draggable> -->
