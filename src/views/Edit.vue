<template>
    <div class="edit container">
        <h2>Edit Todo</h2>
        <form v-if="thing" v-on:submit.prevent="editTodo">
            <div class="input-field">
                <input id="title" type="text" class="active"  v-model="thing.title">
            </div>
            <div class="input-field">
                <textarea id="textarea" class="materialize-textarea" data-length="110" v-model="thing.content"></textarea>
            </div>
            <div class="center-align">
                <button  class="btn waves-effect waves-light btn-large z-depth-3">Edit Your Bucket List</button>
            </div>
        </form>
    </div>
</template>
<script>

import db from '../firebase/init'

export default {
    name: 'Edit',
    data(){
        return{
            thing: null
        }
    },
    methods: {
        editTodo(){
            db.collection('bucket').doc(this.thing.id).update({
                title: this.thing.title,
                content: this.thing.content 
            }).then( () =>{
                this.$router.push({name: 'List'})
            }).catch(err => {
                console.log(err)
            })   
        }
    },
    created(){
        let ref = db.collection('bucket').doc(this.$route.params.todo_id)
        ref.get().then(doc=>{
                this.thing = doc.data(),
                this.thing.id = doc.id
            })
      
    }
}
</script>
<style>
.edit .btn{
    margin: 10px auto;
    background-color: #1a237e;
    border-radius: 5px;
}

</style>