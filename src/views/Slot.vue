<template>
  <div id="slot">
    親コンポーネントの中身は、この領域です。
    <SlotComponent>
      <!-- ここでpiyoという名前で子のpropを受け取っている(あんま使わない) -->
      <!-- v-slot(名前付きスロット)を使うときは必ずtemplateを使うこと -->
      <template v-slot:default="piyo">
        <div>名前無しスロットは、この領域です。</div>
        <div>プロパティも受け渡せます。{{ piyo.prop }}</div>
      </template>
      <template v-slot:one>
        <div>スロット「one」は、この領域です。</div>
        <div>（v-slotでスロット名を指定します）</div>
      </template>
      <!-- ここでpiyoという名前で子のpropを受け取っている -->
      <template #two="piyo">
        <div>
          スロット「two」は、この領域です。プロパティは{{ piyo.prop.hoge }}です
        </div>
        <div>（省略記法は「#」です）</div>
      </template>
      <template v-slot:three></template>
      <template v-slot:four></template>
    </SlotComponent>
  </div>
</template>

<script>
import SlotComponent from '../components/SlotComponent.vue'

export default {
  name: 'Slot',
  components: {
    SlotComponent,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
