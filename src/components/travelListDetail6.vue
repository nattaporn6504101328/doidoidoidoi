<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h1>{{ n.name }}</h1>
      <h6>{{ n.text_box }}</h6>
    </div>
  </div>
  <br>
  <nav style="text-align: center;">
  <RouterLink to="ที่พัก">ที่พัก</RouterLink> /
  <RouterLink to="สถานที่เที่ยว">สถานที่เที่ยว</RouterLink>
  </nav>
  <br>
  <br>
    <div class="col" v-for="(stay, index) in stayy" :key="index">
      <div class="name">
        <div class="name">
        <img :src="stay.img" alt="รูปภาพ 1">
        <img :src="stay.img2" alt="รูปภาพ 2">
        <br><br>
        <h4>{{ stay.name }}</h4>
      </div>
      <div class="tipark">
        <p>{{ stay.text_box }}</p>
        <p>สถานที่ : {{ stay.Location }}</p>
        <p>เบอร์ติดต่อ : {{ stay.phone }}</p>
        <p>ราคา :{{ stay.Price }}</p>
        <p>Facebook : {{ stay.Facebook }}</p>
        <a :href="stay.link">ที่พัก</a>
      </div>
    </div>
  </div>
  
</template>

<script setup>

import { ref } from 'vue';

const travellist=ref([
{name: 'สันป่าเกี๊ยะ หรือ ดอยแม่ตะมาน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/sanpakae-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const stayy=ref([
{name:'สันป่าเกี๊ยะ ดอยแม่ตะมาน จุดกางเต็นท์' , 
  img: "https://www.tripgether.com/wp-content/uploads/2023/01/sanpakea50.jpg",
  img2:"https://www.tripgether.com/wp-content/uploads/2023/01/sanpakea82.jpg",
  text_box:'ตั้งอยู่ภายในอำเภอเชียงดาว จังหวัดเชียงใหม่ เป็นยอดดอยที่ได้รับความนิยมสำหรับสายรักธรรมชาติ วิวดอยหลวงเชียงดาวแบบอลังการตัดกลับบรรยากาศที่เย็นสบายและสดชื่นมากๆ ให้ความรู้สึกเหมือนอยู่ในต่างประเทศเลย อากาศบนดอยแม่ตะมานและสันป่าเกี๊ยะจะหนาวเย็นตลอดทั้งปีฟินสุดๆ ใครที่อยากมาสัมผัสความหนาวแต่ถ้าใครไปในช่วงหน้าหนาว ก็ควรเตรียมเสื้อผ้าและอุปกรณ์ป้องกันความหนาวไปด้วย และควรพกอุปกรณ์ของใช้ที่จำเป็นมาให้พร้อมส่วนบนดอกแม่ตะมานมีทั้งบ้านพักเป็นหลังและลานกางเต็นท์ สามารถติดต่อจองบ้านพักได้ที่ ที่ศูนย์วิจัยและฝึกอบรมที่สูง คณะเกษตรศาสตร์ มหาวิทยาลัยเชียงใหม่ ได้เลย สำหรับคนที่ไม่ได้พกเต็นท์มาเองก็สะดวกมากลานกางเต็นท์จะอยู่ที่เต็นท์หลังละ 100 บาท พักได้ 2 คน มีห้องน้ำไว้บริการ หรือจะมีแบบบ้านเป็นหลังราคาหลังละ 1,000 บาท สามารถพักได้ 4 – 5 คน ใครสะดวกพักแบบไหนก็เลือกได้ตามใจชอบเลย '  ,
  Location:'ต.แม่นะ อ.เชียงดาว จ.เชียงใหม่',
  phone:'ติดต่อจองรถเพื่อรับส่งล่วงหน้าได้ที่เบอร์ 096 698 9350',
  Price:'ค่าเหมารถ 4×4 ไปกลับ(ค้างคืน): 2,400฿ ต่อคัน (นั่งสูงสุด 6 คน) // ไปกลับ(ไม่ค้างคืน): 2,000฿ ต่อคัน',
  link: 'https://www.facebook.com/doimaetaman/',
  Facebook:'สันป่าเกี๊ยะ ดอยแม่ตะมาน',
},
{name:'ม่อนวิวสันป่าเกี๊ยะ' , 
  img: "https://www.paiduaykan.com/travel/wp-content/uploads/2020/01/9-IMG_5671.jpg",
  img2:"https://www.paiduaykan.com/travel/wp-content/uploads/2020/01/12-IMG_5614.jpg",
  text_box:'ห้องพักแบบเต้นท์โดมใสทรงกลมมี 3 หลัง  ตั้งอยู่ข้างบนติดกับบ้านพักแบบบ้าน ภายในห้องพักมีที่นอน โซฟา และหน้าต่างแบบใส ที่สามารถมองเห็นวิวของดอยหลวงเชียงดาว ส่วนห้องน้ำเป็นห้องน้ำส่วนตัวที่อยู่ข้างนอกเต้นท์ ข้างนอกมีระเบียงชมวิวพร้อมหลังคาบังแดด ราคาหลังละ 2000 บาทพร้อมอาหารเช้าคือข้าวต้ม กาแฟ โอวัลติน'  ,
  Location:'บ้านสันป่าเกี๊ยะ Chiang Dao, Chiang Mai 50170',
  phone:'061 304 6085',
  Price:'ราคาที่พักเท่ากันเกือบทุกแบบ คือ ห้องละ 2000 บาท พักได้ 2 ท่าน',
  link: 'https://www.facebook.com/OrangeApiporn/',
  Facebook:'ม่อนวิวสันป่าเกี๊ยะ',
},
])
</script>

<style>

.card-img-top{
height: 100%;
padding: 25px;

}
.box_all{
justify-content: center;
align-items: center;
margin-left: 30%;
text-align: center
}

</style>
