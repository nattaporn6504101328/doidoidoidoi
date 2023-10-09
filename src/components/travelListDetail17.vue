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
        <p>ราคา : {{ stay.price }}</p>
        <p>Facebook : {{ stay.Facebook }}</p>
        <a :href="stay.link">facebook</a> /
        <a :href="stay.web">web</a>
      </div>
    </div>
  </div>
  
</template>

<script setup>

import { ref } from 'vue';

const travellist=ref([
{name: 'ดอยไม่มีชื่อ',
 img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-noname-1536x1027.jpg", quantity: 0 ,
 link: 'https://www.facebook.com/doolaylay.homestay',
 web: 'https://www.doolaylay.com',
 text_box:'ดอยไม่มีชื่อ อ.กัลยาณิวัฒนา จ.เชียงใหม่ แสงแรก และ แสงสุดท้ายของวัน บนดอยที่ไม่มีชื่อเรียก ดอยไม่มีชื่อนั้น เป็นดอยที่เหมือนๆกับดอยทั่วๆไปในภาคเหนือ แต่มันมีความพิเศษตรงที่ความดิบของธรรมชาติ สวยด้วยธรรมชาติสร้างโดยไม่ผ่านการตกแต่งจากฝีมือของมนุษย์'
}])

const stayy=ref([
{name:'บ้านดูเลเล Doolaylay Homestay' , 
  img: "https://global-uploads.webflow.com/649174dcab676e52a64ce81a/64926e22b45c012e44bbcc19_Doolaylay_03.jpeg",
  img2:"https://global-uploads.webflow.com/649174dcab676e52a64ce81a/64926e22b45c012e44bbcc7b_Doolaylay_14.jpeg",
  text_box:'บ้านเรา เป็นบ้านคนอยู่ธรรมดาๆ ที่มีห้องนอนสำหรับเพื่อนๆที่มาเยือนเพียงสี่ห้อง โดยแขกที่เข้าพักในวันเดียวกัน ต้องร่วมกินอยู่ใช้ชีวิตแบ่งพื้นที่ในบ้านร่วมกัน ใต้หลังคาเดียวกัน กินข้าวหม้อเดียวกัน ช่วยกันล้างจาน บ้านเป็นแบบห้องนอนรวม ห้องน้ำรวม นั่นหมายความว่าเราต้องทานข้าว เที่ยว และทำกิจกรรมร่วมกัน เราแบ่งปันกัน เพื่อเรียนรู้ซึ่งกันและกัน ที่นี่ไม่ได้สะดวกสบาย และค่อนข้างไม่มีความเป็นส่วนตัว ในการอยู่ร่วมกัน ความหลากหลายของแขกในแต่ละวัน จึงทำให้บ้านดูเลเลในแต่ละวันแตกต่างกันไป บ้านดูเลเล อาจจะไม่ได้เหมาะสม หรือ พอดีกับทุกคน ก่อนเพื่อนๆ ตัดสินใจมาเยือน อยากให้เพื่อนๆ ศึกษารายละเอียดเกี่ยวกับบ้าน เราหวังว่าบ้านหลังนี้จะพอดีกับผู้มาเยือน ดูเลเล คือ บ้านพักโฮมสเตย์ รบกวนทุกท่านที่มาต้องจองก่อนล่วงหน้าเท่านั้น บ้านเราไม่ใช่ร้านกาแฟ เราไม่ได้เปิดสถานที่ให้เยี่ยมชม ถ่ายรูป ขอสงวนพื้นที่เพื่อความสงบ ให้กับคนที่เข้าพักอาศัยเท่านั้น เรามีการจำกัดจำนวนคน ในการเข้าพักแต่ละวัน เพื่อความพอดีแก่การอยู่ร่วมกัน'  ,
  Location:'เทศบาลนครเชียงใหม่, จังหวัดเชียงใหม่ 58130',
  price:'ค่าใช้จ่ายเริ่มต้นที่ 1,000 บาท ต่อคน ต่อคืนในวันธรรมดา และ 1500 บาทต่อคนในวันที่มีกิจกรรม ทั้งหมดรวมที่พักพร้อมอาหาร มื้อเที่ยง เย็นและเช้า',
  link: 'https://www.facebook.com/doolaylay.homestay',
  web:'https://www.doolaylay.com/',
  Facebook:'Doolaylay',
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
