<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h1>{{ n.name }}</h1>
      <h6>{{ n.text_box }}</h6>
      <p>สถานที่ : {{ n.Location }}</p>
        <p>เบอร์ติดต่อ : {{ n.phone }}</p>
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
        <a :href="'http://' + stay.link">ที่พัก</a>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const travellist=ref([
{name: 'ดอยค้ำฟ้า', 
img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-kamfha-1536x1024.jpg", quantity: 0 ,
Location:': ตำบลทุ่งข้าวพวง อำเภอเชียงดาว จังหวัดเชียงใหม่',
phone:'08-1992-7346',
text_box:'   ดอยค้ำฟ้า หรืออีกชื่อเรียกคือ กิ่วใจหาย ตั้งอยู่ที่ หน่วยจัดการต้นน้ำแม่งาย ใน ตำบลทุ่งข้าวพวง อำเภอเชียงดาว จังหวัดเชียงใหม่ สูงกว่า 1,834 เมตร มีป่าต้นน้ำและลำธารน้ำตก รวมถึงวิวทิวทัศน์ที่สวยงดงามดอยค้ำฟ้า แห่งนี้ เหมาะกับสายรักธรรมชาติ ชอบพักค้างแรม กางเต็นท์กลางธรรมชาติมากกว่าค่ะ ที่นี่ก็ยังเป็นสถานที่ท่องเที่ยวแบบปิดอยู่นะคะ ต้องติดต่อหน่วยจัดการต้นน้ำแม่งายก่อนขึ้นไปทุกครั้งค่ะ โดยจะจำกัดนักท่องเที่ยวให้ค้างคืนได้ 50 คน ต่อวันเท่านั้นถ้ามาจากเชียงใหม่-เชียงดาว ใช้เส้นทางเชียงดาว-เวียงแหง แล้วก็ให้ขับตรงไปจนถึง สะพานข้ามห้วยน้ำกัด ด้านขวามือจะมีป้ายบอกทางไป ดอยค้ำฟ้า ประมาณหลักกิโลเมตร ที่ 26-27 ก็จะถึง ดอยค้ำฟ้าค่ะ จะตั้งอยู่ก่อนหน่วยจัดการต้นน้ำขุนคอง'
}])

const stayy=ref([
{name:'จุดดกางเต็นท์ดอยค้ำฟ้า' , 
  img: "https://cms.dmpcdn.com/travel/2021/01/04/a67804a0-4e47-11eb-89e4-35f1a97d3869_original.jpg",
  img2:"https://chillpainai.com/src/wewakeup/scoop/images/eb7fb8b87af9d289cbe96a2dd1538bbc85a7af70.jpg",
  text_box:'จุดกางเต็นท์ดอยค้ำฟ้านี้ ไม่มีร้านค้าสวัสดิการ ให้บริการ เเราต้องเตรียมเสบียงและอุปกรณ์การนอนกันให้พร้อมก่อนออกเดินทางให้เรียบร้อย  ส่วนในเรื่องของห้องน้ำที่นี่มีให้บริการ ใครที่สนใจไปที่นี่ต้องขออนุญาตเจ้าหน้าที่ที่หน่วยยจัดการต้นน้ำแม่งายก่อนเท่านั้น เพราะเส้นทางขึ้นไปดอยค้ำฟ้านั้นต้องเป็นรถขับเคลื่อนสี่ล้อเท่านั้น ซึ่งเจ้าหน้าที่จะมีรถของคนท้องถิ่นไว้ให้บริการ ต้องติดต่อล่วงหน้า'  ,
  Location:'ตำบลทุ่งข้าวพวง อำเภอเชียงดาว จังหวัดเชียงใหม่',
  phone:'08-1992-7346',
  link: 'https://goo.gl/maps/GjamVDjWPxUhzuVh8',
  Facebook:'ดอยค้ำฟ้า อุทยานแห่งชาติผาแดง อ.เชียงดาว จ.เชียงใหม่ ',
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
