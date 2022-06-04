 <template>
  <div class="content">
    <!-- this.$route.path -->
    <div class="aside-title">{{ isCollapse ? "后台" : "德才兼备" }}</div>
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      @select="select"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#fffa22"
      background-color="#545c64"
    >
      <el-menu-item
        :index="item.name"
        v-for="item in noChildren"
        :key="item.path"
        @click="menuChange(item)"
      >
        <i :class="item.iocn"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu index="item.name" v-for="item in isChildren" :key="item.path">
        <template slot="title">
          <i :class="item.iocn"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="item in item.children" :key="item.path">
          <el-menu-item :index="item.name" @click="menuChange(item)">{{
            item.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      menu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          iocn: "el-icon-s-home",
          url: "home/home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          iocn: "el-icon-s-goods",
          url: "mallManage/mallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          iocn: "el-icon-user-solid",
          url: "userManage/userManage",
        },
        {
          label: "其他",
          path: "/other",
          iocn: "el-icon-s-unfold",
          children: [
            {
              path: "/page1",
              name: "pag1",
              label: "页面1",
              iocn: "",
              url: "other/PageOne",
            },
            {
              path: "/page2",
              name: "pag2",
              label: "页面2",
              iocn: "",
              url: "other/PageTwo",
            },
          ],
        },
      ],
      active: "home",
    };
  },

  methods: {
    select(...arg) {
      console.log(arg);
    },
    menuChange({ path, name }) {
      this.$router.push({
        path,
        name,
      });
      console.log("跳转", name, path);
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    isChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
  watch: {
    $route: {
      handler: function (newRour, oldRouter) {
        // 时时获取 对应的活跃菜单
        this.active = newRour.name;
      },
      immediate: true,
    },
  },
  mounted() {
    let _this = this;
    this.$bus.$on("setCollapse", function () {
      _this.isCollapse = !_this.isCollapse;
    });
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.content {
  background: #545c64;
  .el-menu {
    background-color: rgba(255, 255, 255, 0);
  }
  .el-menu-item {
    color: #fff;
    background: #545c64;
  }
}
.aside-title {
  line-height: 30px;
  text-align: center;
}
</style>