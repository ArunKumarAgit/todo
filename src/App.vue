<template>
  <div>
    <div>
      <section>
        <h3>Todo Applications</h3>

        <input class="taskInput" type="text" v-model="task" ref="editRef" />
        <!-- :countInc="countInc" -->
        <base-container
          :saveTask="saveTask"
          :resetTask="resetTask"
          @countInc="countInc"
          @editTask="editTask"
          @deleteTask="deleteTask"
        >
        </base-container>
        <!-- <div class="btn">
          <button class="glow-on-hover" @click="countInc" v-if="editTaskOn">
            Add Task
          </button>
          <button class="glow-on-hover" @click="saveTask" v-if="!editTaskOn">
            save Task
          </button>
          <button class="glow-on-hover reset" @click="resetTask">Reset</button>
        </div> -->
      </section>
    </div>
    <!-- <section>
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
    </section> -->
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Vue from 'vue';
export default {
  data() {
    return {
      task: '',
      property: '',
    };
  },
  components: {
    BaseContainer,
  },
  computed: {
    tasks() {
      return this.$store.commit('task');
    },

    tasks1() {
      return this.$store.getters.task;
    },

    editTaskOn() {
      return this.$store.getters.editTaskOn;
    },
  },

  methods: {
    saveTask(key) {
      console.log(this.task);
      console.log(key);
      this.$store.commit('showSaveBtn', { val: true });
      console.log(this.$refs.editRef.value + 1);
      console.log(this.$store.state.editKey);
      this.$store.commit('editTasks', { val: this.$refs.editRef.value });
      this.$refs.editRef.value = '';
      this.task = '';
    },

    deleteTask(key) {
      console.log(key);
      this.$store.commit('splicingTheTask', { val: key });
      this.$store.commit('getIndex', { val: this.$store.state.task.length });
      Vue.$toast.error(`task is deleted`, {
        position: 'top-right',
        queue: true,
        duration: 500,
      });
    },

    editTask(key) {
      this.property = this.$store.getters.showValueInInputwhenEdit[key];
      this.$refs.editRef.value =
        this.$store.getters.showValueInInputwhenEdit[key];
      this.task = this.$store.getters.showValueInInputwhenEdit[key];
      console.log(key);
      console.log(this.$store.state.task);
      this.$store.commit('editTask', { val: this.property });
      this.$store.commit('editKey', { val: key });
      this.$store.commit('showSaveBtn', { val: false });
    },
    countInc() {
      if (this.task != '') {
        this.$store.commit('num');
        this.$store.commit('pushToArray', { val: this.task });
        this.task = '';
        Vue.$toast.success('TARGET FIXED', {
          position: 'top-left',
          duration: 500,
        });
        this.$refs.editRef.value = '';
      } else {
        Vue.$toast.warning('please enter something ', {
          position: 'top',
          duration: 2000,
        });
      }
    },
    resetTask() {
      if (this.$store.getters.getLenght > 0) {
        Vue.$toast.error('ohh ohh deleted', {
          position: 'top-right',
          queue: true,
          duration: 2000,
        });
        this.$store.commit('reset', []);
        this.$store.commit('num', { val: 0 });

        this.task = '';
      } else {
        Vue.$toast.error('No Task to Delete', {
          position: 'top-right',
          queue: true,
          duration: 2000,
        });
      }
    },
  },
};
</script>

<style scoped>
h3 {
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
