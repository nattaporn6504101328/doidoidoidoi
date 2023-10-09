<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h1>{{ n.name }}</h1>
      <h6>{{ n.text_box }}</h6>
      <p>การเดินทาง มายัง ดอยม่อนล้าน
     สามารถเดินทางมาบนถนนเชียงใหม่พร้าว หมายเลข 1001 ขับไปเรื่อยๆ ประมาณ 90 กิโลเมตร 
     จากนั้นก็ให้เลี้ยวเข้าเส้นถนนหมายเลข 1150 แล้วจะเจอกับป้ายบอกทางไปแม่ขะจาน จังหวัดเชียงราย จากนั้นจะเจอทางแยกไปบ้านขุนแจ ตรงนี้ก็จะเป็นทางขึ้นไป ดอยม่อนล้าน ซึ่งดอยม่อนล้านจะห่างจากอำเภอพร้าว  40 กิโลเมตรโดยประมาณ</p>
     <p>ที่อยู่ : {{ n.Location }}</p>
     <p>เวลา : {{ n.time }}</p>
     <a :href="n.link">พิกัด</a>
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
        <p>Facebook : {{ stay.Facebook }}</p>
        <a :href="stay.link">ที่พัก</a>
      </div>
    </div>
  </div>
  <h3>สถานที่เที่ยวใกล้ๆ</h3>
  <div class="col" v-for="(near, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="near.img" alt="รูปภาพ 1">
        <br><br>
        <h4>{{ near.name }}</h4>
      </div>
      <div class="titravel">
        <p>{{ near.text_box }}</p>
        <p>สถานที่ : {{ near.Location }}</p>
        <p>เบอร์ติดต่อ : {{ near.phone }}</p>
        <p>เวลา : {{ near.time }}</p>
        <a :href="near.link">link</a> /
        <a :href="near.place">พิกัด</a>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const travellist=ref([
{name: 'ดอยม่อนล้าน', 
img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monlan-1536x1024.jpg", quantity: 0 ,
link:'https://goo.gl/maps/ZxztVCmns8YHFKd2A',
Location:'อำเภอพร้าว จังหวัดเชียงใหม่',
time:' 08.30-17.30 น.',
text_box:'ดอยม่อนล้าน หรือ สถานีพัฒนาการเกษตรที่สูง ตามพระราชดำริดอยม่อนล้าน ที่ตั้งอยู่ใน อำเภอพร้าว จังหวัดเชียงใหม่ บนความสูงกว่า 1,696 เมตร เป็นบริเวณที่เราสามารถมองเห็นวิวของทะเลหมอก รวมถึงยอดดอยในบริเวณโดยรอบได้แบบชัดๆ และมองเห็นอำเภอพร้าวได้ทั้งอำเภอเลย     นอกจากนั้นที่บนดอยยังมี พระตำหนักที่ประทับ มีดอกไม้เมืองหนาวสีสันสวยงามหลากหลายพันธุ์ด้วยเช่นกัน สามารถเดินเข้าไปชมและถ่ายรูปสวยๆ กันได้เลย แต่ยังไม่หมดเพียงแค่นั้น เพราะที่นี่ยังเป็นจุดติดตั้งกังหันลมไว้สำหรับผลิตไฟฟ้า ตามโครงการศึกษาศักยภาพการผลิตไฟฟ้าจากพลังงานลมของ ม.แม่โจ้ ช่วยทำให้ชาวบ้านมีไฟฟ้าจากพลังงานสะอาดใช้กันตลอด ที่ ดอยม่อนล้าน นั้น สภาพอากาศจะเป็นแบบฝนตกชุกสลับแห้งแล้งกันไป ในช่วงฤดูฝน จะเริ่มตั้งแต่เดือนมิถุนายนไปจนตุลาคม ส่วนในช่วงหน้าหนาวนั้น ก็หนาวเย็นตามพื้นที่ของภาคเหนือ ถึงกับเลขตัวเดียวเลยนะคะ หนาวสั่นๆ กันเลยทีเดียว แต่สิ่งไฮไลท์ของดอยนี้ ก็คือช่วงเวลาพระอาทิตย์ขึ้น และพระอาทิตย์ตกที่หลายๆ คนต่างก็จับจองที่นั่งชมวิวสวยๆ',
}])

const stayy=ref([
{name:'ที่พัก ดอยม่อนล้าน' , 
  img: "https://files.thailandtourismdirectory.go.th/assets/upload/2018/01/05/20180105b9405a13d7a19194ecccb492f7c5e954153746.jpg",
  img2:"https://chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/Joe/Scoop/10%20Mon%20Chiangmai/Monlarn2.jpg",
  text_box:'ดอยม่อนล้านมีที่พักของโครงการเกษตรที่สูงม่อนล้าน ให้บริการประมาณ 6 หลัง พร้อมเครื่องนอน พักได้ 4-5 คน มี ไฟฟ้าใช้ตลอดวัน ไม่มีเครื่องทำน้ำอุ่น ค่าบริการแล้วแต่จะให้เป็นค่าบำรุงสถานที่ (*ช่วงที่มีคนมาพักเยอะๆธ.ค-ม.ค ทางโครงการขอความร่วมมือค่าห้องพักประมาณ500บาทต่อคืน) รวมถึงสถานที่กางเต้นท์สามารถ นำเต้นท์มาเองได้ ไม่มีร้านอาหารต้องเตรียมมาเอง ต'  ,
  Location:'อำเภอพร้าว จังหวัดเชียงใหม่',
  phone:'อ.แจ๊ค 089 554 1025',
  link: 'https://www.facebook.com/MODOlMONLAN/',
  Facebook:'ดอยม่อนล้าน',
},

])

const neartravel=ref([
{name:'อ่างเก็บน้ำแม่สะลวม อันเนื่องมาจากพระราชดำริ' , 
  img: " https://img.kapook.com/u/2017/Tanapol/travel/citypraw/citypraw7.jpg",
  text_box:'    อ่างเก็บน้ำแม่สะลวม อันเนื่องมาจากพระราชดำริ ตั้งอยู่ที่ตำบลป่าตุ้ม อำเภอพร้าว เป็นอ่างเก็บน้ำเขื่อนดินขนาดใหญ่ที่กำลังดำเนินการก่อสร้างและจะกลายเป็นแหล่งท่องเที่ยวที่สวยงามของอำเภอพร้าวเร็ว ๆ นี้ โดยนักท่องเที่ยวจะได้เดินชมวิวทิวทัศน์ป่าเขาสีเขียวบนถนนที่ทอดยาวไปตลอดแนวสันเขื่อน ถือได้ว่าเป็นแหล่งพักผ่อนหย่อนใจที่ดีที่สุดแห่งหนึ่งของอำเภอพร้าวเลยทีเดียว',
  place:'https://maps.app.goo.gl/RRf3khTGArCNGx3MA',

},
{name:'วิหารจีน วัดห้วยบง' , 
  img: "https://chiangmaipress.com/wp-content/uploads/2021/05/IMG_9736-800x445.jpg",
  text_box:'วัดห้วยบง ตั้งอย่างโดดเด่นบริเวณเชิงเขาในเขตบ้านห้วยบง ตำบลเขื่อนผาก เป็นอีกวัดที่สำคัญของอำเภอพร้าว ไฮไลท์ของที่นี่ก็คือ "วิหารจีน" ซึ่งมีสถาปัตยกรรมสไตล์จีนอันสวยงาม ภายในวิหารมีสิ่งศักดิ์สิทธิ์ตามแบบวัดจีนให้ได้กราบไหว้ขอพรมากมาย',
  place:'https://maps.app.goo.gl/Jrv8m4FAV47qiiZq5',
  link:' https://taoist-temple-115.business.site/?utm_source=gmb&utm_medium=referral',

},{name:'วัดถ้ำดอกคำ' , 
  img: "https://image.tnews.co.th/newscenter/images/userfiles/images/15621705_1790810504504184_5925256887208583467_n.jpg",
  text_box:'ตั้งอยู่ที่ตำบลน้ำแพร่ อำเภอพร้าว เป็นสถานที่ที่หลวงปู่มั่น ภูริทัตโต บรรลุพระอรหัตผล เมื่อปี พ.ศ. 2479 ณ ถ้ำดอกคำ',
  place:' https://maps.app.goo.gl/d8WSHxzCxUA1pvoH9',
  link:" https://www.facebook.com/WatThamDokKham/",

},{name:'น้ำพุร้อนบ้านหนองครก' , 
  img: " https://chiangmaipao.go.th/cmpao/img-data/47131672159557.jpg",
  text_box:'ตั้งอยู่ที่ตำบลสันทราย อำเภอพร้าว เป็นบ่อน้ำพุร้อนธรรมชาติ มีธรรมชาติของขุนเขาล้อมรอบสวยงาม',
  place:'https://maps.app.goo.gl/sHcbJSx8R4Yh4D4XA',
  link:'https://www.bing.com/search?pglt=2177&q=น้ำพุร้อนบ้านหนองครก&cvid=fb3e78ca0fbd4ae5add87efa4b142f1f&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIECAEQANIBBzU0MmowajGoAgCwAgA&FORM=ANNTA1&PC=DCTS',

},{name:'ออบมืด' , 
  img: "https://cdn.chiangmainews.co.th/wp-content/uploads/2019/02/06102753/605443-800x600.jpg",
  text_box:'อบมืด เป็นลำธารสวยใสระยะทางประมาณ 8 กิโลเมตรในหมู่บ้านปางตอย ตำบลป่าไหน่ อำเภอพร้าว มีลักษณะเป็นลำธารไม่กว้างมากนัก ไหลผ่านบริเวณกลางหมู่บ้าน บางช่วงมีก้อนหินสูงใหญ่ขนาบสองข้างของลำธาร และมีต้นไม้ใหญ่ปกคลุมให้ร่มเงา ทำให้แสงแดดส่องลงมาไม่ถึงลำธาร ชาวบ้านจึงเรียกกันว่า ออบมืด นักท่องเที่ยวสามารถที่จะลงไปเล่นน้ำในลำธารได้ สอบถามรายละเอียดเพิ่มเติมได้ที่เทศบาลตำบลป่าไหน่ เบอร์โทรศัพท์ : 0 5301 7567-8  หรือ 065 497 4471 ',
  place:'https://maps.app.goo.gl/8GpdrXK6dgVRKxL26',
  link:'https://www.facebook.com/ObMuedChiangMai/',

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
