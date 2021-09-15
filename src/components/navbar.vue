<template>

    <nav>
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">TASKS</router-link>
        <ul class="right hide-on-med-and-down">
          <router-link tag="li" to="/" exact active-class="active">
            <a href="#">Создать</a>
          </router-link>
          <router-link tag="li" to="/list" exact active-class="active">
            <a href="#">Список</a>
          </router-link>
          

        </ul>
      </div>
    </nav>

</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>

</style>
