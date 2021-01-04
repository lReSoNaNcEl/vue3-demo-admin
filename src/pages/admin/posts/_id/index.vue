<template>
    <div class="container">
        <h2 class="display-4">Post #{{params.id}} Detail Resource</h2>
        <form @click.prevent="update" class="shadow rounded p-5" action="">
            <div class="mb-3">
                <label class="h4 form-label" for="title">Title</label>
                <input class="form-control" id="title" type="text" v-model="post.title">
            </div>
            <div class="mb-3">
                <label class="h4 form-label" for="body">Body</label>
                <textarea class="form-control textarea" id="body" v-model="post.body"/>
            </div>

            <div class="row w-50">
                <div class="col">
                    <button type="submit" @click="update" class="btn btn-primary">Edit</button>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
                <div class="col">
                    <router-link to="/admin/posts" class="btn btn-light">Back</router-link>
                </div>
            </div>
        </form>
    </div>
    <router-view></router-view>
</template>

<script lang="ts">

import {useRoute} from "vue-router"
import {useStore} from "vuex"
import {computed, onBeforeUnmount} from 'vue'

export default {
    name: 'UserList',
    setup() {
        const {dispatch, commit, getters} = useStore()
        const {params} = useRoute()
        const post = computed(() => getters['admin/getPost'])
        const id = params.id

        dispatch('admin/savePost', id)
        onBeforeUnmount(() => commit('admin/setPost', {}))

        function update() {
            dispatch('admin/updatePost', {id, post})
        }

        return {update, post, params}
    }
}
</script>

<style>
.textarea {
    height: 200px !important;
}
</style>
