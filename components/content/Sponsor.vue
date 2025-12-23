<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <div
      v-for="(sponsor, index) in sponsors" :key="index" class="rounded-xl border p-4 transition-colors duration-300
             bg-white dark:bg-neutral-900
             border-gray-200 dark:border-neutral-700
             shadow-sm hover:shadow-md dark:shadow-none"
    >
      <!-- Avatar -->
      <div class="flex justify-center mb-3">
        <img
          :src="sponsor.avatar" :alt="`${sponsor.name}的头像`" class="w-20 h-20 rounded-full object-cover border
                 border-gray-200 dark:border-neutral-700"
        >
      </div>

      <!-- Name + Badge -->
      <div class="flex items-center justify-center gap-2 mb-2">
        <h3 class="font-medium truncate text-nowrap text-gray-800 dark:text-gray-100" :title="sponsor.name">
          {{ sponsor.name }}
        </h3>
        <span
          v-if="sponsor.badge" class="text-xs px-2 py-0.5 rounded-full text-nowrap
                 bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-300"
          :class="sponsorBadgeTypeClass[sponsor.badgeType]"
        >
          {{ sponsor.badge }}
        </span>
      </div>

      <!-- Amount -->
      <div class="text-center mb-2">
        <span class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          ¥{{ sponsor.amount }}
        </span>
      </div>

      <!-- Slogan -->
      <p
        v-if="sponsor.slogan" class="text-center text-sm italic
               text-gray-500 dark:text-gray-400"
      >
        "{{ sponsor.slogan }}"
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import wechatAvatar from '@/assets/wechat.png';

const sponsorBadgeTypeClass: Record<string, string> = {
  afdian: 'bg-purple-300 text-white',
  wechat: 'bg-green-300 text-white',
  alipay: 'bg-blue-300 text-white',
};

const sponsors = ref([
  {
    name: '*片',
    avatar: wechatAvatar,
    badge: '微信',
    badgeType: 'wechat',
    amount: 30,
  },
  {
    name: '*食',
    avatar: wechatAvatar,
    badge: '微信',
    badgeType: 'wechat',
    amount: 15,
  },
  {
    name: '夜梦',
    avatar: 'https://pic1.afdiancdn.com/user/user_upload_osl/e8c76ce7a8d0823ddeaac5f39e2c3b6b_w132_h132_s4.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: 'Asiawings - 枫之屿',
    avatar: 'https://pic1.afdiancdn.com/user/75d0a9082ed011ee94195254001e7c00/avatar/e77e17c90704f58150a2dcc312e38368_w1920_h1919_s68.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 12,
  },
  {
    name: 'Fanting',
    avatar: 'https://pic1.afdiancdn.com/user/96c10c20acfe11ecb43952540025c377/avatar/23b6bf34917af125de4e10fe4f707c7b_w1080_h1440_s431.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: 'Aiden Yan_Da',
    avatar: 'https://pic1.afdiancdn.com/user/acb9e8b232b611eb84d352540025c377/avatar/c59b294a2fbdfa3ccbd72f680328f02f_w640_h640_s45.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: 'HelloZGY',
    avatar: 'https://pic1.afdiancdn.com/user/ae113c5c203e11edbdfa52540025c377/avatar/a4c349d29c889d9481ad6b6dff080b74_w240_h240_s25.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: 'GTNH-laoji',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-yellow.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: '夜梦',
    avatar: 'https://pic1.afdiancdn.com/user/user_upload_osl/e8c76ce7a8d0823ddeaac5f39e2c3b6b_w132_h132_s4.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: '爱发电用户_af3y',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/default-avatar@2x.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
    slogan: '加油 很看好这个项目 很需要这个项目',
  },
  {
    name: '我的世界量子科技服务器',
    avatar: 'https://pic1.afdiancdn.com/user/deeeae08c60211edb0ec5254001e7c00/avatar/7760d5bb7a85561663d5849dcfa367f8_w1080_h1080_s148.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 30,
  },
  {
    name: 'CAUCraft中航大服务器对外赞助',
    avatar: 'https://pic1.afdiancdn.com/user/07ea1b62de1b11ef9be152540025c377/avatar/d9ffcffe149d8500c6640e599b55f700_w727_h727_s22.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 200,
  },
  {
    name: '夜梦',
    avatar: 'https://pic1.afdiancdn.com/user/user_upload_osl/e8c76ce7a8d0823ddeaac5f39e2c3b6b_w132_h132_s4.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: '爱发电用户_98c48',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: 'DreamLand幻想乡服主',
    avatar: 'https://pic1.afdiancdn.com/user/05ba66b6517711ef86cf52540025c377/avatar/4739ff66d89fde9e5f13fc907a362437_w756_h756_s122.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: '爱发电用户_GmJx',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-orange.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: 'ベGKԅspace',
    avatar: 'https://pic1.afdiancdn.com/user/user_upload_osl/76d1632b0e1c178a504e2248e490503a_w132_h132_s3.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 12,
  },
  {
    name: 'FeiXue',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-orange.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
    slogan: '我尚早八',
  },
  {
    name: 'DreamLand幻想乡服主',
    avatar: 'https://pic1.afdiancdn.com/user/05ba66b6517711ef86cf52540025c377/avatar/4739ff66d89fde9e5f13fc907a362437_w756_h756_s122.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
    slogan: '加油加油qwq',
  },
  {
    name: '雾里云端',
    avatar: 'https://pic1.afdiancdn.com/user/33505a56740911edb4db52540025c377/avatar/2507d656300c3616a9ec483702c66769_w1024_h768_s947.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 30,
  },
  {
    name: 'T4R71',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-orange.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: 'DreamLand幻想乡服主',
    avatar: 'https://pic1.afdiancdn.com/user/05ba66b6517711ef86cf52540025c377/avatar/4739ff66d89fde9e5f13fc907a362437_w756_h756_s122.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: 'Tikor Teane',
    avatar: 'https://pic1.afdiancdn.com/user/d5bad57cf51811eaa7de52540025c377/avatar/5a9ee9131ddfa8627dc7b685f7459bf9_w1000_h1000_s76.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 30,
  },
  {
    name: '爱发电用户_d2dc6',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '彩笔锅',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_rduT',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-blue.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_c21f1',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_5WPc',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: 'Peng_studio',
    avatar: 'https://pic1.afdiancdn.com/user/fbe2b408869511ecab9f52540025c377/avatar/775a7d84a487cbf3c9d268ed66b5e237_w1080_h1069_s105.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_7JvA',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/default-avatar@2x.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '阿林qwq',
    avatar: 'https://pic1.afdiancdn.com/user/5aa9070cae6011ecbb0452540025c377/avatar/bec045567cdfb87b238e26d96e5498b7_w1079_h1080_s245.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 30,
  },
  {
    name: '爱发电用户_21fbc',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_4VMG',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/default-avatar@2x.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_9Rt8',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-orange.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_63rA',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 30,
  },
  {
    name: 'StarDust',
    avatar: 'https://pic1.afdiancdn.com/user/89eadd8c66a611eaa81852540025c377/avatar/abe32c13f8059d2c449f2879eef95604_w400_h800_s12.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_f2abf',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_ec3c1',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '爱发电用户_7wKW',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-blue.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 30,
    slogan: '牛哇牛蛙！',
  },
  {
    name: '橙子丷',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-yellow.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '风林水起',
    avatar: 'https://pic1.afdiancdn.com/user/7ce9e3e4d36e11ec842b52540025c377/avatar/dd381306504a07ed0e767d13410fcf95_w350_h350_s11.jpg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '彩笔锅',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: '月神',
    avatar: 'https://pic1.afdiancdn.com/user/user_upload_osl/cf6eceb66da0c76fb63fba10f78445d7_w132_h132_s3.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: 'Brian',
    avatar: 'https://pic1.afdiancdn.com/user/70ff2a30b11111e9abc052540025c377/avatar/ed761963817c900908a5e945f996aedf_w640_h640_s30.jpg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: '哀伤crazy',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-orange.png?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 15,
  },
  {
    name: '爱发电用户_94c58',
    avatar: 'https://pic1.afdiancdn.com/default/avatar/avatar-purple.png?imageView2/1/',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
  {
    name: 'Bob',
    avatar: 'https://pic1.afdiancdn.com/user/user_upload_osl/dc2354c673ef0d4e8a10ceba82835827_w132_h132_s2.jpeg?imageView2/1/w/240/h/240',
    badge: '爱发电',
    badgeType: 'afdian',
    amount: 5,
  },
]);
</script>

<style>

</style>
