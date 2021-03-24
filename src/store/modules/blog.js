const state = {
    posts: [
        {
            id: 3,
            title: "Blog 3",
            body: "This is Blog 3"
        },
        {
            id: 2,
            title: "Blog 2",
            body: "This is Blog 2"
        },
        {
            id: 1,
            title: "Blog 1",
            body: "This is Blog 1"
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