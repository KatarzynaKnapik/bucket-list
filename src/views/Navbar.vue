<template>
    <div class="main-navbar">
        <nav class="nav-extended purple darken-4">
            <div class="nav-wrapper">
                <div class="nav-content logo">
                    <router-link :to="{name: 'List'}" class="brand-logo">Things I Do Before I Die</router-link>
                    <ul class="right hide-on-med-and-down">
                        <li><a class="btn-large deep-purple darken-4 button">
                                <router-link :to="{name: 'Inspire'}">Inspire</router-link>
                            </a>
                        </li>
                        <li><a class="btn-large indigo darken-4 button">
                                <router-link :to="{name: 'AddToList'}">Add More...</router-link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            
        </nav>
    </div>
    
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
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

</style>