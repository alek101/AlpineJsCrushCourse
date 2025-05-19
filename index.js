document.addEventListener('alpine:init',()=>{
    // first argument name, second func that returns data
    Alpine.data('signupForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,
        showPass: false,
        errors: {},

        validateForm() {
          this.errors = {}

          if(this.username.length < 3) {
            this.errors.username = 'Username must be at leat 3 characters'
          }

          if(this.password.length < 5) {
            this.errors.password = 'Pass must be at leat 5 characters'
          }

          if(this.password != this.passwordConfirm) {
            this.errors.passwordConfirm = 'Password dont match'
          }

          if(!this.belt) {
            this.errors.belt = 'Please select belt color'
          }

          if(this.bio.length < 10) {
            this.errors.bio = 'Bio must be at leat 10 characters'
          }



        },

        submitForm($event) {
            this.validateForm()

            if(Object.keys(this.errors).length === 0) {

              console.log(this.username, this.password, this.passwordConfirm, this.belt, this.bio, this.newsletter)

              $event.target.reset()
            }
          }
      }))
})