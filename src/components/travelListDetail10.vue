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
          <img :src="stay.img2" alt="รูปภาพ 2">
          <img :src="stay.img" alt="รูปภาพ 1">
        <br><br>
        <h4>{{ stay.name }}</h4>
        
      </div>
      <div class="tipark">
        <p>{{ stay.text_box }}</p>
        <img :src="stay.img3" alt="รูปภาพ 3">
        <p>สถานที่ : {{ stay.Location }}</p>
        <p>เบอร์ติดต่อ : {{ stay.phone }}</p>
        <p>Facebook : {{ stay.Facebook }}</p>
        <p>ราคา :  ค่าบริการรถรับ-ส่ง
          -  จำนวนนักท่องเที่ยว 1-5 คน ค่าบริการเหมา 2,500 บาท
          -  จำนวนนักท่องเที่ยว 6-9 คน ค่าบริการเหมา 3,000 บาท
          -  จำนวนนักท่องเที่ยว 12-17 คน ค่าบริการเหมา 6,000 บาท
          -  จำนวนนักท่องเที่ยวเกิน 18 คน ค่าบริการเหมา 9,000 บาท
          -  หากต้องการไปรับ-ส่งที่ อ.อมก๋อย ค่าบริการเหมา 4,000 บาท (จากตัว อ.อมก๋อย - ศูนย์บริการ ฯ - ลานจอดรถทางเดินเท้า)
            
          -  ค่าบริการสัมภาระ (ลูกหาบ)
            จำกัดน้ำหนักไม่เกิน 20 กิโลกรัม ต่อ 1 ลูกหาบ
            ลูกหาบ 1 คน ค่าบริการ 300 บาทต่อวัน

            2 วัน 1 คืน ไป - กลับ ค่าบริการ 600 บาท
          -  ค่าบริการคนนำทาง เที่ยวละ 600 บาท</p>
          <br>
        <a :href="stay.link">ที่พัก</a> /
        <a :href="stay.place">พิกัด</a>
      </div>
    </div>
  </div>

</template>

<script setup>

import { ref } from 'vue';

const travellist=ref([
{name: 'ดอยม่อนจอง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monjong-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const stayy=ref([
{name:'ศูนย์บริการนักท่องเที่ยวดอยม่อนจอง' , 
  img: "https://cms.dmpcdn.com/travel/2020/10/19/9efd9580-11f9-11eb-ab84-d705c02e81b2_original.jpg",
  img2:"https://cms.dmpcdn.com/travel/2020/10/19/9f3dabc0-11f9-11eb-9801-6518ce16dfa7_original.jpg",
  img3:'https://cms.dmpcdn.com/travel/2020/10/19/9eeca590-11f9-11eb-a54d-490661e142b8_original.jpg',
  text_box:'เหมาะสำหรับสายแคมป์ปิ้ง พกพาเต็นท์ไปเอง ดอยม่อนจอง ตั้งอยู่บนทิวเขาถนนธงชัยตอนกลาง ปัจจุบันตั้งอยู่ใน อ.นันทบุรี เดิมตั้งอยู่ใน ต.แม่ตื่น อ.อมก๋อย จังหวัดเชียงใหม่ โดยอยู่ในพื้นที่ความรับผิดชอบของเขตรักษาพันธุ์สัตว์ป่าอมก๋อย ไม่ได้เปิดใช้เที่ยวชมกันตลอดทั้งปี เพราะต้องระวังภัยเรื่องช้างป่าที่ออกมาหากิน รวมถึงสภาพอากาศที่แห้ง ซึ่งเสี่ยงต่อการเกิดไฟป่าได้ง่าย โดยปรกติแล้วจะเปิดให้ขึ้นประมาณวันที่ 1 พฤศจิกายน - 28 กุมภาพันธ์   สำหรับที่มาของคำว่า ม่อนจอง นั้น คำว่า ม่อน เป็นภาษาคำเมืองที่แปลว่า ดอยหรือเนินเขา ส่วนคำว่า จอง ก็เป็นภาษาคำเมือง แต่จะออกเสียงว่า จ๋อง หมายถึง ลักษณะจั่ว สามเหลี่ยมที่อยู่สูงที่สุด แม้การเดินทางตอนที่เดินขึ้นดอยจะไม่ได้ลำบากอะไรมาก แต่จุดสำคัญนั้นอยู่ที่ก่อนจะขึ้นไปเดินขึ้นดอยอีกทีต่างหาก เพราะจะต้องสตาร์ทที่เขตรักษาพันธุ์สัตว์ป่าอมก๋อย หน่วยพิทักษ์ป่ามูเซอ ซึ่งจะต้องติดต่อทำเรื่องกับเจ้าหน้าที่เสียก่อนถึงจะขึ้นไปได้ จากนั้นจึงนั่งรถ 4WD ไปยังจุดเริ่มเดิน (ขับรถขึ้นไปเองไม่ได้ เพราะทางค่อนข้างอันตราย) แล้วถึงขึ้นสู่ยอดดอยระยะทาง 4 ก.ม. ใช้เวลา เดินเท้าประมาณ 3-4 ชั่วโมง'  ,
  Location:': บ้านมูเซอปากทาง ตำบลม่อนจอง อำเภออมก่อย จังหวัดเชียงใหม่',
  phone:'09-2559-7201',
  Facebook:'ศูนย์บริการนักท่องเที่ยวดอยม่อนจอง - บ้านมูเซอ',
  link: 'https://doimonjong.web.app',
  place:'https://goo.gl/maps/UFFZFH9uocxXLpXp9',
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
