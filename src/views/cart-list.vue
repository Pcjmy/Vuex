<template>
  <div id="list">
    <h3>商品列表</h3>
    <button>排序</button>
    <button @click="$router.push('/cart')">跳转购物车</button>
    <ul class="listUl">
      <li v-for="item in list" :key="item.id">
        <div>
          <img alt="" :src="item.img" />
        </div>
        <div>
          <p>名称：{{ item.title }}</p>
          <p>价格：￥ {{ item.price }}</p>
          <button>加入购物车</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    // 保存商品列表的数据
    return {
      list: []
    }
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    // 获取商品列表数据
    async getGoodsList() {
      const { data } = await this.axios.get('/data.json');
      this.list=data;
      console.log(this.list);
    }
  }
}
</script>

<style scoped>
.listUl {
  padding: 0;
  margin: 0;
}

.listUl>li {
  border: 1px solid #ddd;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.listUl>li>div:first-child {
  width: 100px;
}

.listUl>li>div:first-child img {
  width: 100%;
}

img {
  margin: 10px;
}

button {
  margin: 10px;
}
</style>