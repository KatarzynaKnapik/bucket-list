<template>
    <div class="bucket-list container">
        <h2 class="title center">My Bucket List</h2>
        <div class="card" v-for="thing in things" :key="thing.id" v-bind:class="{'card-panel lime lighten-4': thing.ifDone}" >
            <div class="card-content" >
                
                <i class="material-icons round delete right" v-on:click="deleteTodo(thing.id)">delete</i>
                <span>
                    <router-link :to="{name: 'Edit', params: {todo_id: thing.id}}">
                        <i class="material-icons round edit right">edit</i>
                    </router-link>
                </span>
                <i class="material-icons round done right" v-on:click="checkDone(thing.id)">check</i>
                <h2 class="card-title title ">{{thing.title}}</h2>
                <p v-if="thing.content">{{thing.content}}</p>
                
            </div>
        </div>

    </div>
</template>

<script>
import db from '../firebase/init'

export default {
    name: 'List',
    data(){
        return{
            things: []
        }
    },
    methods: {
        deleteTodo(id){
            db.collection('bucket').doc(id).delete()
            .then(()=>{
                this.things = this.things.filter(thing => {
                    return thing.id != id
                })
            })
        },
        checkDone(id){
            let lineTrough = document.querySelector('.bucket-list .card-title');
            let cardColor = document.querySelectorAll('.bucket-list .card')          

            db.collection('bucket').doc(id).update({
                ifDone: true
            }).then(()=>{
                this.things.forEach(thing => {
                    if(thing.id == id){
                        thing.ifDone = true
                    }
                })                  
            })
        }

    },
    created(){
        db.collection('bucket').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let todo = doc.data();
                todo.id = doc.id
                this.things.push(todo)
            });
        })
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
.bucket-list .title{
    font-family: 'Shadows Into Light', cursive;
}
.bucket-list .card{
    margin-bottom: 40px;
}
.bucket-list .round{
    padding: 10px;
    margin: 13px 4px 6px 4px;;
    border-radius: 50%;
}

.bucket-list .delete{
    background-color: #f50057;
    color: #fff;
    cursor: pointer;
}

.bucket-list .edit{
    background-color: #ff6f00;
    color: #fff;
    cursor: pointer;
}
.bucket-list .done{
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
}
.bucket-list .card .ok {
    text-decoration: line-through;
}

</style>