<template>
  <div>
  <h1>{{ task.title }}</h1>

  <hr>

  <form @submit.prevent="submitHandler">



      <div ref="chips" class="chips"></div>

      <div class="input-field">
        <textarea style="min-height:100px;" v-model="description" id="description" class="materialize-textarea"></textarea>
        <label for="description">Description</label>
        <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/2048</span>
      </div>

      <input type="text" ref="datepicker">

      <button class="btn text-center" type="submit">Обновить задачу</button>
      <button style="margin-left:20px;" @click="completeTask" class="btn red text-center" type="button">Завершить задачу</button>

  </form>
  </div>
</template>

<script>

export default {

  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  data: () => ({
    description: '',
    chips: null,
    date: null
  }),
  mounted() {
    this.description = this.task.description,
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Тэги',
      data: this.task.tags
    }),
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    }),
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  methods: {
    submitHandler() {

      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      }),
      this.$router.push('/list')
    },

    completeTask(){
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list')
    }
  }

}
</script>
