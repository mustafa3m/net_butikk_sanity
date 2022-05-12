<template>
  <header>
    <router-link class="logo" to=""> Shahi /</router-link>

    <ul>
      <li>
        <router-link to="/home"> Tea</router-link>
      </li>

      <li>
        <router-link to="/cart">Cart</router-link>
      </li>
      <li>
        <router-link to="/footer">Our history</router-link>
      </li>
    </ul>
  </header>
</template>

<style scope>
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: url(../img/bg.jpg);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-color: #96b011;
    color: white;
  }
  .logo{
    font-weight: bold;
    font-size: 30px;
  }

  ul {
    
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    justify-content: flex-end;
    /* justify-content: center;
    align-items: center; */
    gap: 3rem;
  }
  li{
    margin-right: 10px;
  }
</style>
