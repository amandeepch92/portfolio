<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-secondary text-uppercase" id="mainNav">
	<div class="container">
	  <a class="navbar-brand" href="#">Portfolio</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav ml-auto">
	      <router-link to="/" tag="li" class="nav-item rounded" active-class="active"><a class="nav-link">Home</a></router-link>
          <router-link to="/about" tag="li" class="nav-item rounded" active-class="active"><a class="nav-link">About</a></router-link>
          <router-link to="/contact" tag="li" class="nav-item rounded" active-class="active"><a class="nav-link">Contact</a></router-link>
	    </ul>
	  </div>
	</div>
	</nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style>
 #mainNav{
 	font-weight: 700;
    font-family: Montserrat;
    padding-top: .5rem;
    padding-bottom: .5rem;
 }
 #mainNav .navbar-brand{
 	color: #fff;	
 }
 .bg-secondary{
 	background-color: #2c3e50!important;
 }
 #mainNav .navbar-nav li.nav-item a.nav-link {
    color: #fff;
 }
 #mainNav .navbar-nav>li.nav-item.active {
    color: #fff;
    background: #18bc9c;
}   
</style>