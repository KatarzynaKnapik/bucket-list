<template>
    <div class="login container">
        <form v-on:submit.prevent="logIn">
            <h2>Log In</h2>
            <div class="email">
                <input type="email" placeholder="Enter Email" v-model="email">
            </div>
            <div class="password">
                <input type="password" placeholder="Enter Password" v-model="password">
            </div>
            <div class="center-align">
                <button class="btn waves-effect waves-light btn-large z-depth-3">Log In</button>
            </div>
        </form>
    </div>
</template>
<script>
import db from '../firebase/init'
import store from '../store/state'

export default {
    name: 'Login',
    data(){
        return{
            email: null,
            password: null,
            sharedState: store.state

        }
    },
    methods: {
        logIn(){
            db.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(cred => {
                this.sharedState.user_id = cred.user.uid
                this.sharedState.email = cred.user.email
                this.$router.push({name: 'List'})
            })
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
.login form{
    width: 600px;
    margin: 30px auto;
    padding: 5px 21px 33px 21px;
    border: 1px solid #1a237e;
    border-radius: 8px;
}
.login form h2{
    font-family: 'Shadows Into Light', cursive;
    text-align:center    
}
.login .email {
    margin: 20px auto;
}
.login .password{
    margin: 10px auto;
}
.login .btn{
    margin: 10px auto;
    padding: 0px 70px;
    background-color: #1a237e;
    border-radius: 5px; 
    font-family: 'Shadows Into Light', cursive;
}

</style>