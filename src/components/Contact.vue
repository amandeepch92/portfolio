<template>
<div>
<div class="col-lg-auto mx-auto mt-1 mb-1">
  <div class="card">
    <img class="img-fluid contactme" :src="contactMe" alt="Card image cap">
  </div>
</div>
<div class="container">
<div class="row">
<div class="col-lg-8 mx-auto mt-5">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="email" class="form-control" placeholder="Email" v-model="user.email">
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control" placeholder="Subject" v-model="user.subject">
    </div>
  </div>
  <div class="form-group">
    <input type="textarea" class="form-control" placeholder="Message" v-model="user.message">
  </div>
  <button class="btn btn-primary" v-on:click="checkInput">Submit</button>
  </form> 
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
          subject:'',
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
        if(this.user.subject=== ''){
            this.alertMsg = 'Please enter a subject!';
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