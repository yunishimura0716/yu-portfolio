<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="work-img">
          <img :src="work.img">
        </div>
        <h2 class="work-title">{{ work.title }} @ {{ work.company }}</h2>
        <div class="work-body">
          <div class="work-description">
            {{ work.description }}
          </div>
          <div class="work-footer">
            <a class="work-url" :href="work.url" target="_blank">URL</a>
            <button @click="$emit('close')">Close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "WorkModal",
  props: {
    work: {
      type: Object,
    }
  }
}
</script>

<style lang="stylus" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    width: 700px;
    position: absolute;
    max-height: 550px;
    overflow: scroll;
    top: 60px;
  }
}

.work-img {
  text-align: center;
  margin-top: 60px;
}

img {
}

.work-title {
  text-align: center;
  margin: 0 0 0 0;
}

.work-description {
  margin: 10px 25px 0 25px;
  white-space: pre-line;
}

.work-url {
  font-size: 20px;
  margin: 20px 30px 20px 30px;
}

.work-footer {
  display: flex;
  justify-content: flex-end;
}

button {
  color: white;
  background-color: black;
  font-size: 20px;
  margin: 10px 30px 10px 30px;
  padding-left: 5px;
  padding-right: 5px;
}

// overlay transition
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>