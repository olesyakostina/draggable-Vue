<template>
    <div class="row">
        <div class="col-3">
            <h3>Players: team 1</h3>
            <draggable
                v-model="myArray"
                ghost-class="ghost"
                @start="drag = true"
                @end="onEnd"
            >
                <transition-group type="transition" name="flip-list">
                    <div
                        class="sortable"
                        :id="element.id"
                        v-for="element in myArray"
                        :key="element.id"
                    >
                        <strong>{{ element.name }}</strong>
                        <span>{{ element.id }}</span>
                    </div>
                </transition-group>
            </draggable>

            <p><strong class="index"> Previos Index:</strong>{{ oldIndex }}</p>
            <p><strong class="index p"> New Index:</strong>{{ newIndex }}</p>
        </div>
    </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
    components: {
        draggable,
    },
    data() {
        return {
            myArray: [
                { name: "Ilon", id: 1 },
                { name: "Ivan", id: 2 },
                { name: "Vova", id: 3 },
                { name: "Martin", id: 4 },
                { name: "Vitaly", id: 5 },
            ],
            oldIndex: "",
            newIndex: "",
        };
    },
    methods: {
        onEnd(evt) {
            console.log(evt);
            this.oldIndex = evt.oldIndex;
            this.newIndex = evt.newIndex;
        },
    },
};
</script>
<style>
h3 {
    margin: 40px 0 0;
    margin-bottom: 20px;
}
strong {
    display: inline-block;
}
.sortable {
    width: 100%;
    background: white;
    padding: 1em;
    cursor: move;
    margin-bottom: 3px;
}
span {
    float: right;
}
.index {
    margin-top: 20px;
}
.p {
    margin-top: 5px;
}
</style>
