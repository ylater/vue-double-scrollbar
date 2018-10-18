<template>
  <div class="double-scrollbar">
    <div ref="topScroll" class="top-scroll">
      <div ref="scrollBar" :style="scrollBarStyle">&nbsp;</div>
    </div>
    <div class="scroll-area" ref="scrollArea">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:'vueDoubleScrollbar',
  data(){
    return {
      sWidth:'',
    }
  },
  computed:{
    scrollBarStyle(){
      return { paddingTop: "1px", width: this.sWidth }
    }
  },
  methods:{
    initScrollbar() {
      let topScroll = this.$refs.topScroll;
      let childWrapper = this.$refs.scrollArea;
      this.setWidth();
      topScroll.onscroll = function() {
        childWrapper.scrollLeft = topScroll.scrollLeft;
      };
      childWrapper.onscroll= function() {
        topScroll.scrollLeft = childWrapper.scrollLeft;
      };
      window.addEventListener("resize", this.setWidth);
    },
    getWidth() {
      let width = null;
      if (this.$refs.scrollArea && this.$refs.scrollArea.scrollWidth) {
        width = this.$refs.scrollArea.scrollWidth + "px"
      }
      return width;
    },
    setWidth() {
      let width = this.getWidth();
      if (width == null) {
        width = "auto";
      }
      if (width !== this.sWidth) {
        this.sWidth = width
      }
    }
  },
  mounted(){
    this.initScrollbar()    
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
}
</script>

<style lang="less" scoped>
.top-scroll{
  overflow-x: auto;
  overflow-y: hidden;
}
.scroll-area{
   overflow: auto;
   overflow-y: hidden
}
</style>

