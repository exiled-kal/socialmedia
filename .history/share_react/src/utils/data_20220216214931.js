export const userQuery = (userId)=> {
    const query = `*[_type == "user" && googleId == "${userId}"]{
}