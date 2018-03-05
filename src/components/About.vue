<template>
<div class="main-wrapper">
   <div class="section" id="about">	
	   <div>
	      <div class="card text-left">
	         <div class="row">
	            <div class="col-lg-6 col-md-12">
	               <div class="card-body">
	                  <div class="h4 mt-0 title">About</div>
	                  <p>Hello! I am Anthony Barnett. Web Developer, Graphic Designer and Photographer.</p>
	                  <p>Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skills and experience. <a href="https://templateflip.com/templates/creative-cv/" target="_blank">Learn More</a></p>
	               </div>
	            </div>
	            <div class="col-lg-6 col-md-12">
	               <div class="card-body">
	                  <div class="h4 mt-0 title">Basic Information</div>
	                  <div class="row">
	                     <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
	                     <div class="col-sm-8">24</div>
	                  </div>
	                  <div class="row mt-3">
	                     <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
	                     <div class="col-sm-8">anthony@company.com</div>
	                  </div>
	                  <div class="row mt-3">
	                     <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
	                     <div class="col-sm-8">+1718-111-0011</div>
	                  </div>
	                  <div class="row mt-3">
	                     <div class="col-sm-4"><strong class="text-uppercase">Address:</strong></div>
	                     <div class="col-sm-8">140, City Center, New York, U.S.A</div>
	                  </div>
	                  <div class="row mt-3">
	                     <div class="col-sm-4"><strong class="text-uppercase">Language:</strong></div>
	                     <div class="col-sm-8">English, German, French</div>
	                  </div>
	               </div>
	            </div>
	         </div>
	      </div>
	   </div>
	</div>
   <div class="section" id="education">	   
	   <div>
	      <div class="h4 text-center mb-4 title">Education</div>
	      <div class="card text-left">
	         <div class="row">
	            <div class="col-md-3 bg-info">
	               <div class="card-body">
	                  <p>2009 - 2013</p>
	                  <div class="h5">Bachelor's Degree</div>
	               </div>
	            </div>
	            <div class="col-md-9">
	               <div class="card-body">
	                  <div class="h5">Bachelor of Computer Science</div>
	                  <p class="category">University of Computer Science</p>
	                  <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
	               </div>
	            </div>
	         </div>
	      </div>
	      <div class="card text-left">
	         <div class="row">
	            <div class="col-md-3 bg-info">
	               <div class="card-body">
	                  <p>2007 - 2009</p>
	                  <div class="h5">High School</div>
	               </div>
	            </div>
	            <div class="col-md-9">
	               <div class="card-body">
	                  <div class="h5">Science and Mathematics</div>
	                  <p class="category">School of Secondary board</p>
	                  <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.</p>
	               </div>
	            </div>
	         </div>
	      </div>
	   </div>
	</div>   
</div>
</template>

<style scoped>
.section{
	padding-top: 50px;
}
.h4{
	font-weight: 700;
}
.card{
	border: 0;
    border-radius: .1875rem;
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 100%;
    margin-bottom: 20px;
    -webkit-box-shadow: 0 5px 25px 0 rgba(0,0,0,.2);
    box-shadow: 0 5px 25px 0 rgba(0,0,0,.2);
}
.main-wrapper{
	background: #fff;
    padding: 60px;
    text-align: left;
}
.main-wrapper .section{
	margin-bottom:0px;
}
</style>

<script>
export default {
  name: 'about',
}
</script>