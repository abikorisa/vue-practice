<template>
  <section>
    <h2>ログイン</h2>
    <div><router-link to="/slot">スロット確認</router-link></div>
    <!-- 子コンポーネントにpropsを渡す -->
    <div>
      <p>ユーザー名：</p>
      <base-input
        name="ユーザーネーム"
        type="input"
        placeholder="あいうえお"
        @input="inputName"
      ></base-input>
      <p>ユーザー名：{{ userName }}</p>
    </div>
    <div>
      <p>パスワード：</p>
      <base-input
        name="パスワード"
        type="password"
        @input="inputPass"
      ></base-input>
      <p>パスワード：{{ userPass }}</p>
    </div>
    <!-- チェックボックスの挙動確認 -->
    <div>
      <input type="checkbox" id="isChecked" v-model="isChecked" />
      <label for="isChecked">非公開{{ isChecked }}</label>
    </div>
    <base-button @click="checkInput">ログインする</base-button>
    <user v-slot:default="slotProps">
      <p>{{ slotProps }}</p>
    </user>
    <!-- 別の技術方法もある -->
    <user v-slot:default="{ user, message }">
      <p>{{ user.firstName }}さん、{{ message }}</p>
    </user>
    <!--  methods(関数)も渡せる -->
    <Menu>
      <ul>
        <li>List1</li>
        <li>List2</li>
        <li>List3</li>
      </ul>
    </Menu>
    <!-- セレクトボックスの挙動確認 -->
    <select>
      <!-- <option value="">東京</option>
      <option value="">大阪</option>
      <option value="">名古屋</option> -->
      <option v-for="location in locations" :key="location.index">
        {{ location }}
      </option>
    </select>
  </section>
</template>

<script>
import BaseInput from '../atoms/BaseInput.vue'
import BaseButton from '../atoms/BaseButton.vue'
import User from '../atoms/User.vue'
import Menu from '../atoms/Menu.vue'

export default {
  name: 'TheLoginPage',
  components: {
    BaseInput,
    BaseButton,
    User,
    Menu,
  },
  data() {
    return {
      userName: '',
      userPass: '',
      isChecked: true,
      locations: ['東京', '大阪', '名古屋'],
    }
  },
  methods: {
    //template内では指定して稲生が子コの第２引数が参照できる
    inputName(newVal) {
      this.userName = newVal
    },
    inputPass(newVal) {
      this.userPass = newVal
    },
    checkInput() {
      console.log(`ユーザー名：${this.userName},パスワード：${this.userPass}`)
    },
  },
}
</script>
