<template>
    <div class="login-wrapper container d-flex align-items-center">
        <form class="login-form border p-5 rounded">
            <h2 class="display-4">Admin Panel</h2>
            <div class="form-floating">
                <label class="form-label" for="email">Email</label>
                <input id="email" class="form-control" type="text">
            </div>

            <div class="form-floating">
                <label class="form-label" for="password">Password</label>
                <input id="password" class="form-control" type="password">
            </div>

            <div class="row mt-3">
                <div class="col-3">
                    <button class="btn btn-primary">Log In</button>
                </div>
                <div class="col-3">
                    <router-link to="/" class="btn btn-light">Back</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>



export default {
    setup() {}
}
</script>

<style>
    .login-wrapper {
        height: 100vh;
    }
    .login-form {
        width: 500px;
        margin: auto;
    }
</style>
