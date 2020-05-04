<template>
  <div class="empty-state">
    <div class="empty-state--icon">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="empty-state--description">
      {{ $t('components.empty_state.message') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',
};
</script>

<style lang="scss" scoped>
.empty-state {
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .empty-state--icon {
    padding: 5px;
    font-size: 72px;
    color: rgb(207, 207, 207);
  }

  .empty-state--description {
    text-align: center;
    color: rgb(136, 136, 136);
  }
}
</style>
