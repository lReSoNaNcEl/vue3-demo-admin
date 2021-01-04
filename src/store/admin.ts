export default {
    namespaced: true,
    state: {
        users: [],
        posts: [],
        post: {}
    },
    actions: {
        async saveUsers(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/')
            const users = await res.json()
            ctx.commit('setUsers', users)
        },
        async savePosts(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const posts = await res.json()
            ctx.commit('setPosts', posts)
        },
        async savePost(ctx, id) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`)
            const post = await res.json()
            ctx.commit('setPost', post)
        },
        async updatePost(ctx, {id, post}) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                headers: {'Content-type': 'application/json'},
                method: 'PUT',
                body: JSON.stringify(post)
            })
            const newPost = await res.json()
            ctx.commit('setPost', newPost._value)
        }
    },
    mutations: {
        setUsers: (state, payload) => state.users = payload,
        setPosts: (state, payload) => state.posts = payload,
        setPost: (state, payload) => state.post = payload,
    },
    getters: {
        getUsers: state => state.users,
        getPosts: state => state.posts,
        getPost: state => state.post,
    }
}
