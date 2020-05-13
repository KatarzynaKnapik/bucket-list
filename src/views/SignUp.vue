<template>
    <div class="sign-in container">

        <form v-on:submit.prevent="signUp">
            <h2>Sign In</h2>
            <div class="email">
                <input type="email" placeholder="Enter Email" v-model="email">
            </div>
            <div class="password">
                <input type="password" placeholder="Enter Password" v-model="password">
                <input type="password" placeholder="Confirm Password" v-model="password_1" v-on:input="checkPassword">
            </div>
            <div class="center-align">
                <p v-if="error" class="red-text">{{error}}</p>
                <button class="btn waves-effect waves-light btn-large z-depth-3">Sign In</button>
            </div>
        </form>
    </div>
</template>
<script>
import db from '../firebase/init'
import store from '../store/state'

export default {   
    name: 'SignUp',
    data(){
        return{
            error: null,
            email: null,
            password: null,
            password_1: null,
            sharedState: store.state 
        }
    },
    methods: {
        checkPassword(){
            if(this.password != this.password_1){
                this.error = "Password is not correct"
            }else{
                this.error = null
            }
        },
        signUp(){
            if(this.email && this.password && this.password_1){
                db.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    console.log('ok')
                    this.$router.push({name: 'LogIn'})

                }).catch(err => {
                    this.error = err
                })

            }
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
.sign-in form{
    width: 600px;
    margin: 30px auto;
    padding: 7px 21px 33px 21px;
    border: 1px solid #1a237e;
    border-radius: 8px;
}
.sign-in form h2{
    font-family: 'Shadows Into Light', cursive;
    text-align:center    
}
.sign-in .email {
    margin: 20px auto;
}
.sign-in .password{
    margin: 10px auto;
}
.sign-in .btn{
    margin: 10px auto;
    padding: 0px 70px;
    background-color: #1a237e;
    border-radius: 5px; 
    font-family: 'Shadows Into Light', cursive;
}

</style>