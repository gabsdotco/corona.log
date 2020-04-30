<template>
  <div
    class="select__container"
    :value="selected"
    @blur="open = false"
  >
    <div
      class="select__container--selected"
      :class="{ 'select--open': open }"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div class="select__container--items" :class="{ 'items--hide': !open }">
      <div
        class="select__container--item"
        v-for="(option, index) of options"
        :key="index"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',

  props: {
    value: String,
    options: Array,
  },

  data: () => ({
    open: false,
    selected: null,
  }),

  mounted() {
    this.selected = this.options.length ? this.options[0] : null;
    this.$emit('input', this.selected);
  },

  methods: {
    selectOption(option) {
      this.selected = option;
      this.open = !this.open;
      this.$emit('input', this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.select__container {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.select__container--selected {
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  color: #808080;
  padding-left: 18px;
  cursor: pointer;
  height: 37px;
  width: 170px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;

  &.select--open {
    border: 1px solid #cacaca;
  }
}

.select__container--items {
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  font-size: 14px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100%;
  bottom: 55px;

  &.items--hide {
    display: none;
  }
}

.select__container--item {
  color: #808080;
  padding-left: 18px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: rgb(105, 105, 105);
    background-color: rgb(233, 233, 233);
  }
}
</style>
