document.addEventListener('alpine:init',()=>{
    // first argument name, second func that returns data
    Alpine.data('signupForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,

        submitForm() {
          console.log(this.username, this.password, this.passwordConfirm, this.belt, this.bio, this.newsletter)
        }
      }))
})