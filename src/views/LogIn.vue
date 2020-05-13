<template>
    <div class="login container">
        <form>
            <div class="email">
                <input type="email" placeholder="Enter Email">
            </div>
            <div class="password">
                <input type="password" placeholder="Enter Password">
            </div>
            <div class="center-align">
                <button class="btn waves-effect waves-light btn-large z-depth-3">Log In</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return{

        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
.login form{
    width: 600px;
    margin: 30px auto;
    padding: 33px 21px;
    border: 1px solid #1a237e;
    border-radius: 8px;
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