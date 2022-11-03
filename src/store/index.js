import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
    task: [],
    editTask: '',
    editTaskOn: true,
    editKey: 0,
  },
  getters: {
    editTaskOnForSingleIndex(state) {
      return state.editTaskOnForSingleIndex;
    },
    editTaskOn(state) {
      return state.editTaskOn;
    },

    task(state) {
      return state.task;
    },
    getLenght(state) {
      return state.task.length;
    },
    getIndexToDelete(state, getters) {
      return state.task[getters];
    },
    showValueInInputwhenEdit(state) {
      return state.task;
    },
  },
  mutations: {
    task(state) {
      return state.task;
    },
    num(state, payload) {
      return (state.num = state.num + payload);
    },
    nums(state, payload) {
      state.num = payload.val;
    },
    pushToArray(state, payload) {
      state.task = [...state.task, payload.val];
    },
    reset(state, payload) {
      state.task = payload;
    },
    setNumsLength(state, payload) {
      state.num = payload.val;
    },
    splicingTheTask(state, payload) {
      state.task.splice(payload.val, 1);
    },
    editKey(state, payload) {
      state.editKey = payload.val;
    },
    getIndex(state, payload) {
      state.num = payload.val;
    },
    showSaveBtn(state, payload) {
      state.editTaskOn = payload.val;
    },
    showAddBtn(state, payload) {
      state.editTaskOn = payload.val;
    },
    editTask(state, payload) {
      state.editTask = payload.val;
    },
    editTasks(state, payload) {
      state.task[state.editKey] = payload.val;
    },
    // showValueInInputwhenEdit(state, payload) {},
  },
  actions: {},
  modules: {},
});
