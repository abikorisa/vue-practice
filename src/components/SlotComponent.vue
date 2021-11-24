<template>
  <div class="component">
    ここはコンポーネントですが、slotではない領域です。
    <div class="slot-default">
      <!-- ここで親に対してpropという名前でdefaultPropを渡している -->
      <slot :prop="defaultProp">
        <div>名前無しスロットのフォールバックコンテンツです。</div>
        <div>何も指定しなかった場合にはこの文字列が描画されます</div>
      </slot>
    </div>
    <div class="slot-one">
      <slot name="one">
        <div>スロット「one」のフォールバックコンテンツです。</div>
      </slot>
    </div>
    <div class="slot-two">
      <!-- ここで親に対してpropという名前でobjectPropを渡している -->
      <slot name="two" :prop="objectProp">
        <div>スロット「two」のフォールバックコンテンツです。</div>
      </slot>
    </div>
    <div class="slot-three">
      <slot name="three">
        <div>スロット「three」のフォールバックコンテンツです。</div>
      </slot>
    </div>
    <div class="slot-four">
      <slot name="four" :user="user">
        <div>
          <p>{{ user.lastName }}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotComponent',
  data: function () {
    return {
      defaultProp: 'defaultのプロパティ',
      objectProp: {
        hoge: 'fuga',
      },
      user: {
        lastName: 'ほりなつ',
        firstName: 'けとりん',
      },
    }
  },
}
</script>

<style>
.component {
  border: 1px solid #ddd;
}
.slot-default {
  background-color: #ccffcc;
}
.slot-one {
  background-color: #ffffcc;
}
.slot-two {
  background-color: #ffe5cc;
}
.slot-three {
  background-color: #ccffe5;
}
</style>
