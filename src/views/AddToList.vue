<template>
    <div class="add-new container">
        <h2>Add New Adventures To Your BuckeT List!</h2>
        <form v-on:submit.prevent="addToDB">
            <div class="input-field">
                <input id="title" type="text" class="active" placeholder="My New Thing To Do" v-model="title">
            </div>
            <div class="input-field">
                <textarea id="textarea" class="materialize-textarea" data-length="110" placeholder="Add Your Notes Here" v-model="content"></textarea>
            </div>
            <div class="center-align">
                <h2 v-if="this.feedback" class="feedback">{{feedback}}</h2>
                <button  class="btn waves-effect waves-light btn-large z-depth-3">Add To Bucket List</button>
            </div>
        </form>
    </div>
</template>
<script>
import db from '../firebase/init'

export default {
    name: 'AddToList',
    data(){
        return{
            title: null,
            content: null,
            ifDone: false,
            feedback: null
        }
    },
    methods:{
        addToDB(){
            if(this.title){
                this.feedback = null;
                db.collection('bucket').add({
                    title: this.title,
                    content: this.content,
                    ifDone: this.ifDone 
                }).then( () => {
                    this.$router.push({name: 'List'})
                }).catch(err => console.log(err))
            } else {
                this.feedback = "Add Todo before Submit"
            }
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
.add-new .btn{
    margin: 10px auto;
    background-color: #1a237e;
    border-radius: 5px;
    font-family: 'Shadows Into Light', cursive;
}
.add-new .feedback{
    color: red;
    font-size: 20px;
}

.add-new h2{
      font-family: 'Shadows Into Light', cursive;
      text-align: center;
      margin: 38px auto;
}
</style>