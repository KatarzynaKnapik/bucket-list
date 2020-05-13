<template>
    <div class="main-navbar">
        <nav class="nav-extended purple darken-4">
            <div class="nav-wrapper">
                <div class="nav-content logo">
                    <router-link :to="{name: 'List'}" class="brand-logo">Things I Do Before I Die</router-link>
                    <ul class="right hide-on-med-and-down">
                        <li class="name" v-if="sharedState.currentUser">
                            {{sharedState.currentUser.email}}
                        </li>
                        <li v-if="sharedState.currentUser"><a class="btn-large indigo darken-4 button">
                                <router-link :to="{name: 'AddToList'}">Add More...</router-link>
                            </a>
                        </li>
                        <li v-if="!sharedState.currentUser"><a class="btn-large indigo darken-4 button">
                                <router-link :to="{name: 'SignUp'}">Sign In</router-link>
                            </a>
                        </li>
                        <li v-if="!sharedState.currentUser"><a class="btn-large indigo darken-4 button">
                                <router-link :to="{name: 'LogIn'}">Log In</router-link>
                            </a>
                        </li>
                        <li v-if="sharedState.currentUser">
                            <i class="material-icons quit" v-on:click="logout">exit_to_app</i>
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </nav>
    </div>
    
</template>
<script>
import store from '../store/state'
import firebase from '../firebase/init'
export default {
    name: 'Navbar',
    data(){
        return{
            loggedIn: false,
            sharedState: store.state
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut()
            .then(() =>{
                this.currentUser = null
                this.$router.push({name: 'LogIn'})    
            })
            .catch(err=>console.log(err))

        }
    },
    mounted() {
        console.log(this.sharedState.currentUser);
        console.log(firebase.auth().currentUser);
        
        
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
*{
    margin :0;
}

.main-navbar nav{
    padding: 10px 20px;
    margin-bottom: 50px;
    height: 80px;    
}

.main-navbar .logo{
    font-family: 'Shadows Into Light', cursive;
    font-size: 36px;
    font-weight: 500;
}

.main-navbar .name{
    font-size: 18px;
    margin-top: 18px;
    margin-right: 10px
}
.main-navbar .quit{
    cursor: pointer;
}

</style>