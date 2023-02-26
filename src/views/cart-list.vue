<template>
  <div id="list">
    <h3>商品列表</h3>
    <button>排序</button>
    <button>跳转购物车</button>
    <ul class="listUl">
      <div>
        <img alt="" src="咖啡杯.png" />
      </div>
      <div>
        <p>名称：咖啡杯</p>
        <p>价格：￥</p>
        <button>加入购物车</button>
      </div>
    </ul>
  </div>
</template>

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