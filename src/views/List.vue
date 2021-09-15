<template>
  <div>
    <h1>List</h1>

    <hr>

    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Название задачи</th>
          <th>Дата</th>
          <th>Описание</th>
          <th>Статус</th>
          <th>Открыть</th>
        </tr>
      </thead>
        <tbody>
          <tr v-for="(task, idx) of tasks" :key="task.id">
            <td>{{ idx + 1 }}</td>
            <td>{{ task.title }}</td>
            <td>{{ new Date(task.date).toLocaleDateString() }}</td>
            <td class="description">{{ task.description }}</td>
            <td>{{ task.status }}</td>
            <td>
              <router-link class="btn btn-small" tag="button" :to="'/task/' + task.id">
                Открыть
              </router-link>
            </td>
          </tr>
        </tbody>
    </table>
    <p v-else>Задач нету</p>
  </div>
</template>

<script>

export default {
  name: 'list',
  computed: {
    tasks() {
      return this.$store.getters.tasks
    }
  }

}
</script>


<style>
.description {
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  max-width:400px;
}
</style>
