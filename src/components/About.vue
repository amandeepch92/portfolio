<template>
<div class="main-wrapper">
   <div class="section" id="about">	
	   <div>
	      <div class="card text-left">
	         <div class="row">
	            <div class="col-lg-6 col-md-12">
	               <div class="card-body">
	                  <div class="h4 mt-0 title">About</div>
	                  <p class="text-justify">{{about}}</p>
	               </div>
	            </div>
	            <div class="col-lg-6 col-md-12">
	               <div class="card-body">
	                  <div class="h4 mt-0 title">Basic Information</div>
	                  <div class="row">
	                     <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
	                     <div class="col-sm-8">{{basic.age}}</div>
	                  </div>
	                  <div class="row mt-3">
	                     <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
	                     <div class="col-sm-8">{{basic.email}}</div>
	                  </div>
	                  <div class="row mt-3">
	                     <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
	                     <div class="col-sm-8">{{basic.phone}}</div>
	                  </div>
	                  <div class="row mt-3">
	                     <div class="col-sm-4"><strong class="text-uppercase">Address:</strong></div>
	                     <div class="col-sm-8">{{basic.address}}</div>
	                  </div>
	                  <div class="row mt-3">
	                     <div class="col-sm-4"><strong class="text-uppercase">Language:</strong></div>
	                     <div class="col-sm-8">{{basic.langsISpeak}}</div>
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
	      <div class="card text-left" v-for="(item, index) in education">
	         <div class="row">
	            <div class="col-md-3 bg-info">
	               <div class="card-body">
	                  <p>{{item.time}}</p>
	                  <div class="h5">{{item.title}}</div>
	               </div>
	            </div>
	            <div class="col-md-9">
	               <div class="card-body">
	                  <div class="h5">{{item.name}}</div>
	                  <p class="category">{{item.university}}</p>
	                  <p v-html="item.text"></p>
	               </div>
	            </div>
	         </div>
	      </div>
	   </div>
	</div>   
</div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'About me',
      about: 'A dynamic and result driven software developer with a proven track record of 4+ years in the areas of software design & development, project management and product management. A technical specialist, having expertise in managing the complete Software Development Life Cycle (SDLC), formulating product road maps, defining user requirements and prioritization, providing architectural solutions and driving the development teams for adhering architecture principles. Experienced in front/back-end programming including Javascript , Angular Js , D3 js , Python , Mongo Db , SQL , Html , Css , Sass , R and Jquery. Impressive track record of scoring excellent Project Performance ratings and driving business across complex and challenging environments and implementing tools, processes and methodologies. Expertise in managing software product lines by developing and adding new product functionalities and delivering customized product solutions in accordance with the client’s requirements. Consistently delivered projects within tight deadlines and resource limitations by implementing innovations in technology and specialized analytics tools for improving product performance. Passionate about working with large data sets, providing accurate predictions by way of statistical analysis and recommending strategic plans of action. Exceptional analytical skills along with deep inclination for honing skills and learning about the latest technological developments',
     basic:{
     	age:26,
     	email:'ama***@gmail.com',
     	phone:'96****273',
     	address:'123-A , Uttam Nagar Delhi , India',
     	langsISpeak: 'English , Hindi , French' 
     },
     education:[
        {
            title:'Bachelor\'s Degree',
            university:'DTU',
            time:'Aug 2010 - April 2014',
            name:'Bachelor of Computer Science',
            text:'Bachelor\'s degree in Computer Science.<br/>' +
                'Software Development/Engineering (Html , Js, C++, Java, SQL), Automation, Telecommunications,'
        },
        {
            title:'High School',
            university:'CBSE',
            time:'Mar 2009 - Jul 2010',
            name:'Senior Secondary School',
            text:'Senior Secondary School.<br/>' +
                'Major in Physics , Mathematics , Chemistry.'
        }
      ]     
    }
  },
  
}
</script>
<style scoped>
.section{
	padding-top: 40px;
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

