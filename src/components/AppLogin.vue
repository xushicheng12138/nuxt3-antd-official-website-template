<template>
   <div class="flex items-center">
      <!-- notLogin -->
      <div class="hidden xl:flex items-center space-x-1" v-if="!loginState">
         <span class="cursor-pointer" @click="showLoginModal">Login</span>
         <span class="opacity-[50%]">丨</span>
         <span class="cursor-pointer" @click="showRegModal">Create account</span>
      </div>

      <!-- Logged  -->
      <div class="hidden xl:flex items-center space-x-[1.88rem]" v-else>
         <a-dropdown :overlayClassName="supportClassName" trigger="click">
            <div class="flex items-center cursor-pointer">
               <img src="/images/user.png" alt="" class="w-4 h-4" />
               <span class="ml-[0.38rem]">Lee Pace</span>
            </div>
            <template #overlay>
               <ul :class="`rounded-sm ${downRootClass}`">
                  <li v-for="(item, index) in userDownMenu" :key="index">
                     <NuxtLink :to="item.routeName"
                        :class="`w-full flex items-center px-3 py-[0.38rem] ${downSubitemClass}`">{{ item.name }}
                     </NuxtLink>
                  </li>
                  <li @click="Logout('1')"
                     :class="`w-full flex items-center px-3 py-[0.38rem] cursor-pointer ${downSubitemClass}`">
                     Logout
                  </li>
               </ul>
            </template>
         </a-dropdown>
         <NuxtLink to="/cart/shoppingCart" class="inline-flex items-center space-x-[0.38rem]">
            <span class="text-white">Cart</span>
            <span class="circle" :style="{ backgroundColor: cartBg }">0</span>
         </NuxtLink>
      </div>
      <div class="flex xl:hidden">
         <MenuFoldOutlined @click="visible = !visible" class="text-2xl" />
      </div>
   </div>

   <!-- 移动端抽屉面板 -->
   <Drawer v-model:visible="visible" width="65%" placement="right"
      :bodyStyle="{ fontWeight: '500', color: '#FFFFFF', background: 'linear-gradient(270deg, #115582 0%, #023051 81%, #002039 100%)' }"
      :headerStyle="{ background: 'linear-gradient(270deg, #115582 0%, #023051 81%, #002039 100%)' }">
      <template #closeIcon>
         <CloseOutlined :style="{ color: '#FFFFFF' }" />
      </template>
      <template #title>
         <img src="/images/logo.png" class="w-31 h-15" alt="">
      </template>
      <a-collapse :bordered="false" class="bg-transparent">
         <a-collapse-panel key="1" header="Login" v-show="!loginState" :showArrow="false" collapsible="disabled"
            @click="showLoginModal">
         </a-collapse-panel>
         <a-collapse-panel key="2" header="Create account" v-show="!loginState" :showArrow="false" collapsible="disabled"
            @click="showRegModal">
         </a-collapse-panel>
         <a-collapse-panel key="3" header="Lee Pace" v-show="loginState">
            <div class="h-10 leading-10 overflow-x-auto" v-for="(item, index) in userDownMenu" :key="index"
               @click="$navigate({ path: item.routeName })">
               {{ item.name }}
            </div>
            <div class="h-10 leading-10" @click="Logout('1')">Logout</div>
         </a-collapse-panel>
         <a-collapse-panel key="7" header="Cart" collapsible="disabled" v-show="loginState" :showArrow="false"
            @click="$navigate({ path: '/cart/shoppingCart' })">
         </a-collapse-panel>
         <a-collapse-panel key="4" header="Building Blocks" collapsible="disabled" :showArrow="false"
            @click="$navigate({ path: '/horizontalProList', query: { name: 'Building Blocks' } })">
         </a-collapse-panel>
         <a-collapse-panel key="5" header="Research Tools" collapsible="disabled" :showArrow="false"
            @click="$navigate({ path: '/horizontalProList', query: { name: 'Research Tools' } })">
         </a-collapse-panel>
         <a-collapse-panel key="6" header="Support">
            <div class="h-10 leading-10" @click="$navigate({ path: item.routeName })" v-for="(item, index) in supportMenu"
               :key="index">
               {{ item.name }}
            </div>
         </a-collapse-panel>
      </a-collapse>
   </Drawer>

   <a-modal v-model:visible="loginModalVisible" centered :footer="null" :closable="false" class="w-[88%] xl:w-[27.75rem]"
      :bodyStyle="{ padding: '1.88rem' }">
      <!-- 登录表单内容 -->
      <div class="w-full h-[1.88rem] text-[1.88rem] leading-[1.88rem] mb-5 font-medium">Log In</div>
      <a-form :model="loginForm" layout="vertical" @finish="onLoginFinish">
         <a-form-item name="email" label="Email" :rules="rules.email">
            <a-input v-model:value="loginForm.email" size="large"> </a-input>
         </a-form-item>
         <a-form-item label="Password" name="password">
            <a-input-password size="large" v-model:value="loginForm.password"></a-input-password>
            <div class="w-full h-[0.88rem] text-[0.88rem] leading-[0.88rem] text-[#3491FA] text-right mt-2 cursor-pointer"
               @click="showPdModal">
               Forgot your password?
            </div>
         </a-form-item>
         <a-form-item class="pt-3">
            <a-button class="w-full h-9 submit-buttom-bg" html-type="submit">
               Log in
            </a-button>
         </a-form-item>
         <div class="text-center">
            <span class="text-[#3D3D3D]">Don't have an account？</span>
            <span @click="showRegModal" class="text-[#3491FA] cursor-pointer">
               Create account
            </span>
         </div>
      </a-form>
   </a-modal>

   <a-modal v-model:visible="regModalVisible" centered :footer="null" class="w-[88%] xl:w-[27.75rem]"
      :bodyStyle="{ padding: '1.88rem' }">
      <!-- 注册表单 -->
      <div class="w-full h-[1.88rem] text-[1.88rem] leading-[1.88rem] mb-2 font-medium">Create Account</div>
      <p class="text-[#4E5969] text-base">
         *By creating an account, you agree to 360BioChem’s<NuxtLink to="/support/terms" class="text-[#3491FA]">
            Terms and Conditions</NuxtLink>
      </p>
      <a-form :model="regForm" layout="vertical" @finish="onRegFinish">
         <a-row :gutter="16">
            <a-col :span="12">
               <a-form-item label="First Name" :rules="rules.firstName" name="firstName" class="mb-2">
                  <a-input v-model:value="regForm.firstName" size="large"></a-input>
               </a-form-item>
            </a-col>
            <a-col :span="12">
               <a-form-item label="Last Name" :rules="rules.lastName" name="lastName" class="mb-2">
                  <a-input v-model:value="regForm.lastName" size="large"></a-input>
               </a-form-item>
            </a-col>
         </a-row>
         <a-form-item label="Company Email" name="email" :rules="rules.email">
            <a-input v-model:value="regForm.email" size="large"> </a-input>
         </a-form-item>
         <a-form-item label="Verification Code" :rules="rules.code" name="code">
            <a-input v-model:value="regForm.code" size="large">
               <template #suffix>
                  <div class="flex items-center">
                     <span class="w-[0.06rem] h-5 bg-[#E5E6EB]"></span>
                     <span class="w-20 text-center ml-[11px] text-[#3491FA] cursor-pointer text-[0.88rem]"
                        :disabled="countDown > 0" @click="sendSMS(passwordForm.phone)">
                        {{ countDown > 0 ? `${countDown} s` : 'Send Code' }}
                     </span>
                  </div>
               </template>
            </a-input>
         </a-form-item>
         <a-form-item name="select" label="Country" has-feedback :rules="rules.country">
            <a-select v-model:value="regForm.country" placeholder="Please select a country" size="large">
               <template #suffixIcon>
                  <img src="/images/select.png" alt="" class="w-4 h-4" />
               </template>
               <a-select-option value="china">China</a-select-option>
               <a-select-option value="usa">U.S.A</a-select-option>
            </a-select>
         </a-form-item>
         <a-form-item label="Password" :rules="rules.passwd" name="passwd">
            <a-input-password v-model:value="regForm.passwd" size="large">
               <template #iconRender="props">
                  <img :src="'/images/' + (props ? 'eye-off-fill.svg' : 'eye-off-fill1.svg')" alt="" class="w-4 h-4" />
               </template>
            </a-input-password>
         </a-form-item>
         <a-form-item class="pt-3 mb-0">
            <a-button class="w-full h-9 submit-buttom-bg" html-type="submit">
               Create Account
            </a-button>
            <div class="text-center mt-3">
               <span class="text-gray-700">Already have an account？</span>
               <span @click="showLoginModal" class="text-blue-500 text-right cursor-pointer">
                  Login
               </span>
            </div>
         </a-form-item>
      </a-form>
   </a-modal>

   <a-modal v-model:visible="forgotPdModalVisible" centered :footer="null" :closable="false"
      class="w-[88%] xl:w-[27.75rem]" :bodyStyle="{ padding: '1.88rem' }">
      <!-- 忘记密码表单 -->
      <div class="w-full h-[1.88rem] text-[1.88rem] leading-[1.88rem] mb-5 font-medium">Reset Your Password</div>
      <a-form :model="passwordForm" layout="vertical" @finish="onPasswdFinish">
         <a-form-item name="email" label="Email" :rules="rules.email">
            <a-input v-model:value="passwordForm.email" size="large"> </a-input>
         </a-form-item>
         <div v-if="currentStep === 1">
            <a-form-item label="Verification Code">
               <a-input size="large" v-model:value="passwordForm.phone" placeholder="Please enter your phone number">
                  <template #suffix>
                     <div class="flex items-center">
                        <span class="w-[0.06rem] h-5 bg-[#E5E6EB]"></span>
                        <span class="w-20 text-center ml-[11px] text-[#3491FA] cursor-pointer text-[0.88rem]"
                           :disabled="countDown > 0" @click="sendSMS(passwordForm.phone)">
                           {{ countDown > 0 ? `${countDown} s` : 'Send Code' }}
                        </span>
                     </div>
                  </template>
               </a-input>
            </a-form-item>
            <a-form-item class="mb-0">
               <a-button class="w-full h-9 submit-buttom-bg mb-2" @click="nextStep">
                  <span class="text-white text-base"> Next </span>
               </a-button>
               <a-button class="w-full h-9 mb-2 checked-border" @click="passwdBack">
                  <span class="text-[#3491FA] text-base"> Go back </span>
               </a-button>
            </a-form-item>
         </div>
         <div v-else-if="currentStep === 2">
            <a-form-item label="New Password">
               <a-input-password size="large" v-model:value="passwordForm.newPasswd">
               </a-input-password>
            </a-form-item>
            <a-form-item label="Confirm new password">
               <a-input-password size="large" v-model:value="passwordForm.newPasswd">
               </a-input-password>
            </a-form-item>
            <a-form-item class="pt-3 mb-0">
               <a-button class="w-full h-9 submit-buttom-bg" html-type="submit">
                  Save
               </a-button>
            </a-form-item>
         </div>
      </a-form>
   </a-modal>
</template>
<script setup lang="ts">
const loginState = ref(false);
const { $navigate, $storage } = useNuxtApp()
import { Drawer } from "ant-design-vue";
import { MenuFoldOutlined, CloseOutlined } from '@ant-design/icons-vue';
interface userDownMenuItem {
   name: string;
   routeName: string;
}
interface SupportMenuItem {
   name: string;
   routeName: string;
}
defineProps({
   cartBg: {
      type: String,
      default: "#12BEED",
   },
   supportClassName: {
      type: String,
      default: '',
   },
   downRootClass: {
      type: String,
      default: 'bg-sy',
   },
   downSubitemClass: {
      type: String,
      default: 'text-[#A4ACB6] hover:bg-[#4E5969] hover:text-white',
   },
   userDownMenu: {
      type: Array as () => userDownMenuItem[],
      default: () => [
         { name: 'My  Orders', routeName: '/personCenter/myOrder' },
         { name: 'Basic Information', routeName: '/personCenter/baseInfo' },
         { name: 'Upload Tax Exemption Docs', routeName: '/personCenter/uploadTax' },
      ]
   },
   supportMenu: {
      type: Array as () => SupportMenuItem[],
      default: () => [
         { name: "Terms & Conditions", routeName: "/support/terms" },
         { name: "Shipping Methods", routeName: "/support/shipping" },
         { name: "Orders & Payments", routeName: "/support/orders" },
      ],
   },
});

const visible = ref<boolean>(false);
onMounted(() => {
   loginState.value = $storage.get('isLogin');
})
const forgotPdModalVisible = ref(false);
const currentStep = ref(1);
const regModalVisible = ref(false);
const loginModalVisible = ref(false);
const countDown = ref(0);
let timer: any;
const loginForm = reactive({
   email: "2644890352@qq.com",
   password: "123456",
});

const validatePass = (value: any) => {
   if (value === '') {
      return Promise.reject('Please input the password');
   } else if (!/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(value)) {
      return Promise.reject('Password must be at least 6 characters long and contain both letters and numbers');
   }
};

const rules = {
   email: [
      { type: 'email', message: ' Please enter a valid email address ' },
      { required: true, message: 'Please enter an email address' },
   ],
   passwd: [
      { required: true, validator: validatePass, trigger: 'change' }
   ],
   lastName: [
      { required: true, message: 'Please input the lastName' },
   ],
   firstName: [
      { required: true, message: 'Please input the firstName' },
   ],
   code: [
      { required: true, message: 'Please input the code' },
   ],
   country: [
      { required: true, message: 'Please input the country' },
   ],
}

const regForm = reactive({
   lastName: "",
   firstName: "",
   email: "",
   code: "",
   country: "china",
   passwd: "",
});

const passwordForm = reactive({
   email: "",
   phone: "",
   code: "",
   newPasswd: "",
   confirmPasswd: "",
});


const Logout = (data: any) => {
   loginState.value = false
   $storage.remove('isLogin');
}

const sendSMS = (value: any) => {
   if (!value) {
      return;
   }
   // 模拟发送短信请求

   // 请求成功后设置倒计时
   countDown.value = 60;
   timer = setInterval(() => {
      if (countDown.value > 0) {
         countDown.value -= 1;
      } else {
         clearInterval(timer);
      }
   }, 1000);
};

const onLoginFinish = (values: any) => {
   // 登录表单提交
   message.success({
      content: () => JSON.stringify(values),
      class: "custom-class",
      style: {
         marginTop: "20vh",
      },
   });
   loginModalVisible.value = false;
   loginState.value = true;
   $storage.set('isLogin', true);
};

const onRegFinish = () => {
   // 注册保存
   message.success({
      content: () => "This is a prompt message with custom className and style",
      class: "custom-class",
      style: {
         marginTop: "24vh",
      },
   });
};

const onPasswdFinish = (values: any) => {
   // 忘记密码表单提交
   message.success({
      content: () => JSON.stringify(values),
      class: "custom-class",
      style: {
         marginTop: "20vh",
      },
   });
   forgotPdModalVisible.value = false;
   currentStep.value = 1;
};

const showLoginModal = () => {
   // 打开登陆
   forgotPdModalVisible.value = false;
   regModalVisible.value = false;
   loginModalVisible.value = true;
};

const showRegModal = () => {
   // 打开注册
   loginModalVisible.value = false;
   regModalVisible.value = true;
};

const showPdModal = () => {
   // 打开忘记密码
   currentStep.value = 1;
   loginModalVisible.value = false;
   forgotPdModalVisible.value = true;
   message.success({
      content: () => 'Please enter the verification code  sent to your email.',
      style: {
         marginTop: "20vh",
      },
   });
};

const nextStep = () => {
   currentStep.value += 1;
};

const passwdBack = () => {
   // 忘记密码 返回
   forgotPdModalVisible.value = false;
   loginModalVisible.value = true;
   currentStep.value = 1;
};

const resetLoginForm = () => {
   Object.assign(loginForm, {
      email: "",
      password: "",
   });
};

const resetRegForm = () => {
   Object.assign(regForm, {
      lastName: "",
      firstName: "",
      email: "",
      code: "",
      country: "",
      passwd: "",
   });
};

const resetPdForm = () => {
   Object.assign(passwordForm, {
      email: "",
      code: "",
      phone: "",
      newPasswd: "",
      confirmPasswd: "",
   });
};

onBeforeUnmount(() => {
   // 组件销毁时清除定时器
   clearInterval(timer);
});
</script>
<style scoped>
:deep(.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector){
   height: 36px;
}
:deep(.ant-input-affix-wrapper-lg) {
   padding: 4.5px 11px;
}

:deep(.ant-input-lg) {
   padding: 4.5px 11px;
}

:deep(.ant-collapse-item .ant-collapse-header) {
   padding: 12px;
   color: #FFFFFF
}

:deep(.ant-collapse-content-box) {
   color: #FFFFFF
}

:deep(.ant-collapse-header div) {
   position: absolute;
   right: 0;
}

:deep(.ant-modal-body) {
   padding: 24px !important;
}
</style>
