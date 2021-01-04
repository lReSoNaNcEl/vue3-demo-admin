<template>
    <div class="container">
        <h2 class="display-4">Users Resource</h2>
        <table class="table table-sm table-dark table-striped table-hover">
            <thead>
                <tr class="row m-0">
                    <th class="col">id</th>
                    <th class="col">name</th>
                    <th class="col">email</th>
                </tr>
            </thead>
            <tbody>
                <tr class="row m-0" v-for="user of state.users" :key="user.id">
                    <td class="col">{{user.id}}</td>
                    <td class="col">{{user.name}}</td>
                    <td class="col">{{user.email}}</td>
                </tr>
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
            username: '',
            users: computed(() => getters['admin/getUsers'])
        })

        dispatch('admin/saveUsers')

        return {state}
    }
}
</script>
