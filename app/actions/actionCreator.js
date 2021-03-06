//Increment likes
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
//add comment
export function addComments(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}
//remove comments
export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index
    }
}