document.addEventListener('alpine:init',()=>{
    // first argument name, second func that returns data
    Alpine.data('signupForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true
      }))
})