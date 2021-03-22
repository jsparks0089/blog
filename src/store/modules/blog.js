const state = {
    posts: [
        {
            id: 1,
            title: "Blog 1",
            content: "This is blog post #1"
        },
        {
            id: 2,
            title: "Blog 2",
            content: "This is blog post #2"
        },
        {
            id: 3,
            title: "Blog 3",
            content: "This is blog post #3"
        }
    ]
}

const getters = {
    allPosts: (state) => state.posts
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}