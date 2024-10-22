

export default defineEventHandler(async (event) => {
    console.log('OOMAD')
setCookie(event, 'token', '', {
    httpOnly: true,
    secure: true,
    maxAge: new Date(0),
    path: '/'
})

})