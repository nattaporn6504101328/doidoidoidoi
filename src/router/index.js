import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Newcard from '../components/Newcard.vue'

import travelListDetail_1 from '../components/travelListDetail1.vue';
import travelListDetail_2 from '../components/travelListDetail2.vue';
import travelListDetail_3 from '../components/travelListDetail3.vue';
import travelListDetail_4 from '../components/travelListDetail4.vue';
import travelListDetail_5 from '../components/travelListDetail5.vue';
import travelListDetail_6 from '../components/travelListDetail6.vue';
import travelListDetail_7 from '../components/travellistDetail7.vue';
import travelListDetail_8 from '../components/travellistDetail8.vue';
import travelListDetail_9 from '../components/travellistDetail9.vue';
import travelListDetail_10 from '../components/travellistDetail10.vue';
import travelListDetail_11 from '../components/travellistDetail11.vue';
import travelListDetail_12 from '../components/travellistDetail12.vue'; 
import travelListDetail_13 from '../components/travellistDetail13.vue';
import travelListDetail_14 from '../components/travellistDetail14.vue';
import travelListDetail_15 from '../components/travellistDetail15.vue';
import travelListDetail_16 from '../components/travellistDetail16.vue';
import travelListDetail_17 from '../components/travellistDetail17.vue';



const shopRoutes = [
  { name: 'news_1', component: travelListDetail_1, shop: 'ดอยหลวงเชียงดาว' },
  { name: 'news_2', component: travelListDetail_2, shop: 'ดอยแม่โถ' },
  { name: 'news_3', component: travelListDetail_3, shop: 'ดอยอ่างขาง'},
  { name: 'news_4', component: travelListDetail_4, shop: 'ดอยอินทนนท์'},
  { name: 'news_5', component: travelListDetail_5, shop: 'ดอยค้ำฟ้า'},
  { name: 'news_6', component: travelListDetail_6, shop: 'สันป่าเกี๊ยะ'},
  { name: 'news_7', component: travelListDetail_7, shop: 'ป่าปงเปียง'},
  { name: 'news_8', component: travelListDetail_8, shop: 'ดอยแม่ตะมาน' },
  { name: 'news_9', component: travelListDetail_9, shop: 'ดอยม่อนแจ่ม' },
  { name: 'news_10', component: travelListDetail_10, shop: 'ดอยม่อนจอง'},
  { name: 'news_11', component: travelListDetail_11, shop: 'ดอยม่อนล้าน'},
  { name: 'news_12', component: travelListDetail_12, shop: 'ดอยม่อนเงาะ'},
  { name: 'news_13', component: travelListDetail_13, shop: 'ดอยผ้าห่มปก'},
  { name: 'news_14', component: travelListDetail_14, shop: 'ดอยปุย'},
  { name: 'news_15', component: travelListDetail_15, shop: 'ดอยสุเทพ' },
  { name: 'news_16', component: travelListDetail_16, shop: 'ขุนช่างเคี่ยน' },
  { name: 'news_17', component: travelListDetail_17, shop: 'ดอยไม่มีชื่อ'}
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
