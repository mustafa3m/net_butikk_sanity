<template>

  <footer>

    <p>Copyright © 2022 Shahi</p>
    
  </footer>

</template>

<style scoped>
  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: var(--color-2);
    color: var(--color-white);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 50px;
    height: 50px;
    padding: 2rem;
    
    
  }
  footer p {
    text-align: center;
    
  }
  @media screen and (max-width: 600px) {
 
    footer {
     position: relative;
      width: 100vh;
    }
  }
</style>
