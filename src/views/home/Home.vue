<template>
  <div>
    <el-row class="home" :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user-info flex-d-c">
            <img
              class="user-harder"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <div class="user-text flex-c-c">
              <div class="power-name">admin</div>
              <div class="power-info">超级管理员</div>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="lgin-bewrite">
            <div class="lgin-bewrite-text flex-d-c">
              <span class="lgin-bewrite-time">上次登录时间</span>
              <span class="lgin-bewrite-data"> 2022-7-19 </span>
            </div>
            <div class="lgin-bewrite-text flex-d-c">
              <span class="lgin-bewrite-time">上次登录地址</span>
              <span class="lgin-bewrite-data"> 河北保定 </span>
            </div>
          </div>
        </el-card>
        <el-card style="margin-top: 20px">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column
              v-for="(val, key) in tableColumn"
              :key="key"
              :prop="key"
              :label="val"
              width="100"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div>
          <el-col :span="8">
            <el-card
              shadow="always"
              :body-style="{ padding: 0 }"
              v-for="item in countData"
              :key="item"
            >
              <div class="order-count-wrap">
                <div
                  class="order-count-icon flex-c-c"
                  :style="{ 'background': item.color }"
                >
                  <i :class="'' + item.icon"></i>
                </div>
                <div class="order-count-info flex-c-d">
                  <div class="order-count-info-total-price">
                    ¥ {{ item.value }}
                  </div>
                  <div class="order-count-info-text">{{ item.name }}</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 购买表头信息
      tableData: [
        {
          name: "比亚迪",
          totalBuy: "123",
          monthBuy: "1518",
          todayBuy: 1,
        },
        {
          name: "比亚迪",
          totalBuy: "123",
          monthBuy: "1517",
          todayBuy: 1,
        },
        {
          name: "比亚迪",
          totalBuy: "345",
          monthBuy: "1519",
          todayBuy: 1,
        },
        {
          name: "比亚迪",
          totalBuy: "123",
          monthBuy: "1516",
          todayBuy: 1,
        },
      ],
      // 购买图表数据
      tableColumn: {
        name: "品牌",
        totalBuy: "总购买",
        monthBuy: "本月购买",
        todayBuy: "今日购买",
      },
      // 数量计算
      countData: [
        {
          name: "今日订单",
          value: "123",
          icon: "el-icon-edit",
          color: "#ccc",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  width: 200px;
  justify-content: space-between;
  .user-harder {
    height: 100px;
    border-radius: 50%;
  }
  .user-text {
    margin-left: 30px;
    margin-top: center;
    height: 100px;
    flex-wrap: wrap;
    line-height: 15px;
    align-content: center;
    .power-info {
      font-size: 14px;
    }
    .power-name {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
}
.lgin-bewrite {
  width: 200px;

  .lgin-bewrite-text {
    padding: 5px 0;
    justify-content: space-between;
    .lgin-bewrite-data {
      font-weight: 600;
      font-size: 12px;
      line-height: 10px;
    }
    .lgin-bewrite-time {
      font-size: 12px;
      line-height: 10px;
    }
  }
}
.number {
  display: flex;
  justify-content: space-between;
}
.order-count-wrap {
  display: flex;
  height: 60px;
  .order-count-icon {
    width: 30%;
    background: red;
    font-size: 26px;
    height: 100%;
  }
  .order-count-info {
    margin-left: 10px;
    flex-wrap: wrap;
    align-content: center;

    .order-count-info-total-price {
      text-align: left;
      width: 100%;
      font-size: 22px;
      font-weight: 600;
    }
    .order-count-info-text {
      font-size: 14px;
      color: #7c7c77;
    }
  }
}
</style>