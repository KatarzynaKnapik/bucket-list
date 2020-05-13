<template>
    <div class="sign-in container">
        <form>
            <div class="email">
                <input type="email" placeholder="Enter Email" v-model="email">
            </div>
            <div class="password">
                <input type="password" placeholder="Enter Password" v-model="password">
                <input type="password" placeholder="Confirm Password" v-model="password_1" v-on:input="checkPassword">
            </div>
            <div class="center-align">
                <p v-if="error">{{error}}</p>
                <button class="btn waves-effect waves-light btn-large z-depth-3">Sign In</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data(){
        return{
            error: null,
            email: null,
            password: null,
            password_1: null
        }
    },
    methods: {
        checkPassword(){
            if(this.password != this.password_1){
                this.error = "Password is not correct"
            }else{
                this.error = undefined
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
    padding: 33px 21px;
    border: 1px solid #1a237e;
    border-radius: 8px;
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