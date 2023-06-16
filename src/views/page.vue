<template>
  <div>
    <ul>
      <li v-for="item in paginatedData" :key="item.id">{{ item.name }}</li>
    </ul>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [], // 原始数据
      currentPage: 1, // 当前页码
      itemsPerPage: 10, // 每页显示的项目数量
    };
  },
  mounted() {
    // 模拟从后端获取数据
    this.fetchData();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.data.length / this.itemsPerPage);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.data.slice(startIndex, endIndex);
    },
  },
  methods: {
    fetchData() {
      // 模拟从后端获取数据的异步操作
      setTimeout(() => {
        // 假设获取到的数据为一个包含多个对象的数组
        this.data = [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          { id: 3, name: 'Item 3' },
          // ...
          { id: 100, name: 'Item 100' },
        ];
      }, 500);
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style>
.pagination {
  margin-top: 10px;
}
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
