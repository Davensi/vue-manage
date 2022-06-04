<template>
  <div class="app">
    <el-container>
        <Aside :active="active" />
      <el-container>
        <el-header>
          <Harder />
        </el-header>
        <el-main
          > 
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Harder from "@/components/Harder.vue";
export default {
  data() {
    return {
      active: "0",
      asideWidth:'200px',
    };
  },
  components: { Aside, Harder },
  watch: {
    $router: {
      handler(newRorter, oldRouter) {
        // console.log(newRorter, this.active, "11");
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #545c64;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 60px;
}

 

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
}

.el-container {
  height: 100%;
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
 

