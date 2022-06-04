<template>
  <div class="content flex-c-d">
    <div class="line flex-c-d">
      <el-button type="info" icon="el-icon-s-fold" size="mini" @click="collapse"></el-button>
      <h4>首页</h4>
    </div>
    <div class="right-menu flex-c-d">
      <el-dropdown>
        <div>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>

        <el-dropdown-menu slot="dropdown" size="mini" trigger="click" > 
          <el-dropdown-item>我的</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
          
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    collapse(){
      this.$bus.$emit('setCollapse')
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
  justify-content: space-between;
  .line{
    justify-content:space-between;
    width: 85px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.right-menu {
  height: 100%;
  margin-right: 30px;
  
   .el-dropdown-selfdefine{
      height: 40px;
  }
}
</style>