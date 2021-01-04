<template>
    <div class="container">
        <h2 class="display-4">Posts Resource</h2>
        <table class="table table-sm table-dark table-striped table-hover">
            <thead>
            <tr class="row m-0">
                <th class="col-1">id</th>
                <th class="col-1">userId</th>
                <th class="col-5">title</th>
                <th class="col-5">body</th>
            </tr>
            </thead>
            <tbody>
                <router-link v-for="post of state.posts" :key="post.id" :to="`/admin/posts/${post.id}`">
                    <tr class="row m-0">
                        <td class="col-1">{{post.id}}</td>
                        <td class="col-1">{{post.userId}}</td>
                        <td class="col-5">{{post.title}}</td>
                        <td class="col-5">{{post.body}}</td>
                    </tr>
                </router-link>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">

import {useStore} from "vuex"
import {reactive, computed} from 'vue'

export default {
    name: 'UserList',
    setup() {
        const {dispatch, getters} = useStore()

        const state = reactive({
            posts: computed(() => getters['admin/getPosts']),
        })

        dispatch('admin/savePosts')

        return {state}
    }
}
</script>
