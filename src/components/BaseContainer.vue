<template>
  <div>
    <section>
      <div class="btn">
        <button class="glow-on-hover" @click="countInc" v-if="editTaskOn">
          Add Task
        </button>
        <button class="glow-on-hover" @click="saveTask" v-if="!editTaskOn">
          save Task
        </button>
        <button class="glow-on-hover reset" @click="resetTask">Reset</button>
      </div>
    </section>
    <!-- ------------------------------------------------------- -->
    <section>
      <h2 v-for="(value, key) in tasks1" :key="key" class="containers">
        <div>
          <button class="taskNumber">{{ key + 1 }}</button>
          <hr />
        </div>
        <div>
          {{ value }}
        </div>
        <hr />
        <div>
          <button class="glow-on-hover" @click="editTask(key)">
            edit task
          </button>
          <button
            class="glow-on-hover reset1"
            @click="deleteTask(key)"
            v-if="editTaskOn"
          >
            delete task
          </button>
        </div>
      </h2>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    // countInc: Function,
    saveTask: Function,
    resetTask: Function,
  },
  computed: {
    editTaskOn() {
      return this.$store.getters.editTaskOn;
    },
    tasks1() {
      return this.$store.getters.task;
    },
  },
  methods: {
    countInc() {
      this.$emit('countInc');
    },
    editTask(key) {
      this.emit('editTask', key);
    },
    deleteTask(key) {
      this.emit('deleteTask', key);
    },
  },
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
.taskInput {
  width: 100%;
  height: 40px;
  font-size: 14pt;
  color: rgb(45, 45, 39);
}
.reset {
  float: right;
}

.taskNumber {
  color: aliceblue;
  background-color: black;
}
.container {
  background-color: aqua;
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
  justify-content: space-between;
}
.btn {
  margin-top: 40px;
}
section {
  max-width: 50rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
.containers {
  max-width: 50rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
/* ////////////////////////////////// */

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000;
}

.glow-on-hover {
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: '';
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.reset1 {
  float: right;
  background-color: #ff0000 !important;
}
</style>
