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
  <h3>สถานที่เที่ยวใกล้ๆ</h3><br>
  <div class="col" v-for="(near, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="near.img" alt="รูปภาพ 1">
        <br><br>
        <h4>{{ near.name }}</h4>
      </div>
      <div class="titravel">
        <p>{{ near.text_box }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const travellist=ref([
{name: 'ดอยปุย', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-pui-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])


const neartravel=ref([
{name:'อนุสาวรีย์ครูบาศรีวิชัย' , 
  img: "https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005644_1.jpeg",
  text_box:'ตามประวัติแล้วครูบาศรีวิชัยเป็นนักบุญแห่งล้านนาไทยที่มีผู้เคารพศรัทธาจำนวนมาก เนื่องจากท่านเป็นผู้ที่มีบทบาทในการฟื้นฟูวัดวาอารามและโบราณสถานในแถบภาคเหนือให้กลับมาเฟื่องฟูอีกครั้งทำให้เป็นที่เคารพนับถือของคุณภาคเหนืออย่างมาก และยังเป็นผู้ที่ริเริ่มและเชิญชวนให้ประชาชนในจังหวัดเชียงใหม่และภาคเหนือ ร่วมแรงร่วมใจกันในการสร้างถนนเพื่อขึ้นไปสู่พระบรมธาตุดอยสุเทพ และถือเป็นบุคคลหีบุกเบิกเส้นทางนี้ ปัจจุบันอนุสาวรีย์ครูบาศรีวิชัยตั้งอยู่บริเวณทางขึ้นดอยสุเทพ ซึ่งเป็นอนุสรณ์สถานให้คนมากราบไหว้',

},
{name:'บ้านม้งดอยปุย' , 
  img: "https://files.thailandtourismdirectory.go.th/assets/upload/2017/12/21/2017122191d26527b979a9faf7e92fa1468cb2b9133812.jpg",
  text_box:'ขึ้นมาอีกสักหน่อยก็จะเจอหมู่บ้านม้งดอยปุยที่มีประชาชนอาศัยอยู่ส่วนมากจะประกอบอาชีพค้าขาย ทำการเกษตร ภายในหมู่บ้านมีสถานที่ท่องเที่ยวที่น่าสนใจหลายอย่าง และยังมีผลิตภัณฑ์หรือ ผลไม้ทางการเกษตรที่เป็นของชาวบ้านนำมาจำหน่ายด้วยตัวเอง นอกจากนี้ภายในบริเวณของบ้านม้งดอยปุยยังมีต้นพญาเสือโคร่งหรือซากุระเมืองไทยปลูกอยู่ หากใครมาช่วงหน้าหนาว ประมาณเดือนพฤศจิกาธันวาก็จะเห็นดอก ของต้นพญาเสือโคร่งอย่างสวยงามเป็นสีชมพูเรียงรายภายในรอบ ๆ หมู่บ้าน',

},
{name:'น้ำตกมณฑาธาร' , 
  img: "https://th.bing.com/th/id/R.fe16c6e69973eff5f4a8fa55732e347a?rik=tdeddL51CA6nTw&riu=http%3a%2f%2f2g.pantip.com%2fcafe%2fgallery%2ftopic%2fG4523450%2fG4523450-1.jpg&ehk=flCsI6DE%2f4JAzu9p0stkABP7cak9rpsX2oPY76OtjZw%3d&risl=&pid=ImgRaw&r=0",
  text_box:'เป็นน้ำตกที่อยู่ในเขตอุทยานแห่งชาติดอยสุเทพปุย มีทั้งหมด 9 ชั้น โดยมีน้ำตกไทรย้อยเป็นน้ำตกชั้นสูงสุด ไหลมาจากห้วยคอกม้า ก่อนจะไหลไปบรรจบลงสู่แม่น้ำปิง ระหว่างทางในการเดินทางมายังน้ำตกมณฑาธาร จะเห็นต้นมณฑาที่มีดอกสีขาวใบสีเขียวใหญ่ สูง เรียงรายตามข้าง จึงเป็นที่มาของชื่อน้ำตกแห่ง ',

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
