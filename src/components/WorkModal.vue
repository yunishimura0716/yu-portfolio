<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <h2 class="work-title">Title</h2>
        <div class="work-img">
          <img>
        </div>
        <div class="work-body">
          <div class="work-description">
            Test Test Test Test
          </div>
          <h3>URL</h3>
          <button @click="$emit('close')">Close</button>
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
  }
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