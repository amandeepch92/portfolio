<template>
<div>
<div class="col-lg-auto mx-auto mt-1 mb-1">
  <div class="card">
    <img class="img-fluid contactme" :src="contactMe" alt="Card image cap">
  </div>
</div>
<div class="container">
  <div class="row">
      <div class="col-md-12">
        <div class="well well-sm mt-3">
          <form class="form-horizontal">
          <fieldset>
            <!-- Name input-->
            <div class="form-group row">
              <label class="col-md-3 control-label" for="name">Name</label>
              <div class="col-md-9">
                <input id="name" name="name" type="text" placeholder="Your name" class="form-control" v-model="user.name">
              </div>
            </div>
    
            <!-- Email input-->
            <div class="form-group row">
              <label class="col-md-3 control-label" for="email">Your E-mail</label>
              <div class="col-md-9">
                <input id="email" name="email" type="text" placeholder="Your email" class="form-control" v-model="user.email">
              </div>
            </div>
    
            <!-- Message body -->
            <div class="form-group row">
              <label class="col-md-3 control-label" for="message">Your message</label>
              <div class="col-md-9">
                <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5" v-model="user.message"></textarea>
              </div>
            </div>
    
            <!-- Form actions -->
            <div class="form-group row">
              <div class="col-md-3 offset-md-3 text-left">
                <button v-on:click="checkInput" class="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
          </fieldset>
          </form>
        </div>
      </div>
  </div>
</div>
</div>
</template>
<script>
const contact_img = require('@/assets/contactme.jpg');

export default {
  name: 'contact',
  data () {
    return {
        title: 'Contact me',
        contactMe: contact_img,
        alertMsg:'',
        user:{
          message:'',
          name:'',
          email:''
        }  
    }
  },
  methods: {
    checkInput: function () {
        if((this.user.email=== '') || (!this.validateEmail(this.user.email))){
            this.alertMsg = 'Please enter a valid e-mail address!';
            alert(this.alertMsg);
            return;
        }
        if(this.user.name=== ''){
            this.alertMsg = 'Please enter a name!';
            alert(this.alertMsg);
            return;
        }
        if(this.user.message === ''){
            this.alertMsg = 'Please enter your message!';
            alert(this.alertMsg);
            return;
        }
        this.alertMsg = ''; 
        this.$http.post('https://my-vue-js.firebaseio.com/user.json',this.user)
                  .then(response=>{
                    alert('Form Submitted Successfully');
                  },error=>{alert('Error While Submitting')});
    },
    validateEmail: function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
  }
}
</script>
<style>
.contactme{
  height: 45vh;
}
</style>  