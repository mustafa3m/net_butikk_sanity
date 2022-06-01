<template>

  <header>

    <ul>

      <li ><img class="logo-image" src="images/tea-logo.webp" alt="image-logo" width="50px"></li>
      <li><router-link :to="{ name: 'home' }">HOME</router-link></li>
     
    </ul>

  </header>

</template>

<style scope>
  header {
    
    background-image: url(../img/bg.jpg);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-color: #96b011;
    padding: 1rem;
    color: white;
    width: 100%;
    
  }
  

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    gap: 3rem;
  }
  li {
    margin-right: 10px;
  }

  .logo-image{ 
     width: 80px;
    margin: 0 auto;
    height: auto;
  }
  @media screen and (max-width: 550px) {
 
    header{
      padding: 0;
      width: 100vh;
      
    
    }

  }
</style>
