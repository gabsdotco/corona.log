<template>
  <div
    class="select__container"
    v-if="options"
    :value="selected"
    @blur="open = false"
  >
    <div
      class="select__container--selected"
      :class="{ 'select--open': open }"
      @click="open = !open"
    >
      <div class="selected__icon">
        <i class="fas fa-globe-asia"></i>
      </div>
      <div class="selected__title">
        {{ selected[label] }}
      </div>
    </div>
    <div class="select__container--items" :class="{ 'items--hide': !open }">
      <div
        class="select__container--item"
        v-for="(option, index) of options"
        :key="index"
        @click="selectOption(option)"
      >
        <div class="item__icon">
        </div>
        <div class="item__title">
          {{ option[label] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',

  props: {
    label: String,
    value: [Object, Array],
    options: Array,
  },

  data: () => ({
    open: false,
    selected: {},
  }),

  created() {
    this.selected = this.options?.length
      ? this.options[0]
      : null;

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
  width: 130px;
  height: 40px;
  position: relative;
  text-align: left;
  line-height: 40px;
  outline: none;

  .select__container--selected {
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 18px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    color: #808080;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.03);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.03);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.03);

    .selected__icon {
      margin-right: 8px;
    }

    &.select--open {
      border: 1px solid #e4e4e4;
    }
  }

  .select__container--items {
    width: 100%;
    overflow: hidden;
    position: absolute;
    bottom: 45px;
    right: 0;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid #e4e4e4;
    background-color: #fdfdfd;

    &.items--hide {
      display: none;
    }

    .select__container--item {
      height: 38px;
      color: #808080;
      padding-left: 18px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .item__icon {
        width: 12px;
        height: 12px;
        border: 1.3px solid #bbbaba;
        border-radius: 50%;
        margin-right: 8px;
      }

      &:hover {
        color: rgb(105, 105, 105);
        background-color: rgb(240, 240, 240);

        .item__icon {
          border: 1.3px solid #9e9e9e;
        }
      }
    }
  }
}


</style>
