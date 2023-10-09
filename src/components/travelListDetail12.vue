<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h1>{{ n.name }}</h1>
      <h6>{{ n.text_box }}</h6>
      <p>  ไฮไลต์ของดอยม่อนเงาะ คือ จุดชมวิวบนยอดดอย มีความสูง 1,425 เมตร เหนือระดับน้ำทะเล เป็นมุมภูเขาแบบ 360 องศา ทำให้สามารถมองเห็นพระอาทิตย์ขึ้นและตกได้ในที่เดียวเลย นอกจากนี้ในช่วงที่อากาศเย็น นักท่องเที่ยวก็จะได้ชมทะเลหมอกที่มีความสวยงาม ทอดยาวไปตามหุบเขาต่าง ๆ เป็นระยะทางหลายกิโลเมตรเลยทีเดียว นับเป็นแลนด์มาร์กที่สายหมอกทั้งหลายควรไปเช็กอินเป็นอย่างยิ่ง</p>
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
{name: 'ดอยม่อนเงาะ', 
img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monngo.jpg", quantity: 0 ,
link:' https://maps.app.goo.gl/YEsbJYpSe86ekFRSA',
text_box:'ดอยม่อนเงาะ ตั้งอยู่ที่บ้านม่อนเงาะ ตำบลเมืองก๋าย อำเภอแม่แตง จังหวัดเชียงใหม่ ห่างจากตัวเมืองประมาณ 60 กิโลเมตร ใช้เวลาเดินทางโดยรถประมาณ 1 ชั่วโมง และอยู่ห่างจากศูนย์พัฒนาโครงการหลวงม่อนเงาะ ประมาณ 2 กิโลเมตร นับเป็นแหล่งท่องเที่ยวเชิงธรรมชาติที่นักท่องเที่ยวสามารถมองเห็นวิวทิวทัศน์ของ 3 ยอดดอยใหญ่ ๆ ของจังหวัดเชียงใหม่ นั่นคือ ยอดดอยผ้าห่มปก ยอดดอยอินทนนท์ และยอดดอยหลวงเชียงดาว รวมถึงทิวเขาน้อยใหญ่ที่สลับลดหลั่นกันไปสุดลูกหูลูกตา อากาศด้านบนจะเย็นสบาย มีลมหนาวพัดผ่าน'
}])

const stayy=ref([
{name:'ฮอมฮัก โฮมสเตย์-ที่พักดอยม่อนเงาะเชียงใหม่' , 
  img: "https://chillpainai.com/src/wewakeup/scoop/images/de2ab2cd89ad66d14a50e7d5035b79b8cd9392c3.jpg",
  img2:"https://chillpainai.com/src/wewakeup/scoop/images/2ec791b794b7c961a178615aadf8d856713536a2.jpg",
  text_box:'ฮอมฮัก โฮมสเตย์ ที่พักสุดแสนน่ารัก ท่ามกลางธรรมชาติ ที่นี่เป็นที่พักเล็กๆ บรรยากาศเป็นกันเอง โดยภายในจะมีโซนที่พักแบ่งเป็น 2 โซนค่ะ จะมีห้องพักบนบ้าน 2 ชั้น ที่มีห้องน้ำในตัว แบ่งเป็นห้องเล็กและห้องใหญ่ พักได้ตั้งแต่ 2-4 ท่าน และโซนที่พักแบบเต็นท์ริมแม่น้ำ มีทั้งเต็นท์สำหรับ 2 ท่าน และเต็นท์ใหญ่สำหรับ 4 ท่านค่ะ แต่ในโซนนี้จะเป็นห้องน้ำรวมค่า นอกจากนี้ยังมาพร้อมกับลานปิ้งย่าง ที่ให้บรรยากาศเหมือนมาแคมป์ปิ้งเลย สามารถซื้อวัตถุดิบมาทำอาหารกันได้ค่ะ ทางที่พักมีอุปกรณ์เครื่องครัวให้เช่า รวมถึงถ้าใครอยากไปเที่ยว ที่นี่เค้าก็มีบริการนำเที่ยว 1,200.-/เที่ยว  เที่ยวได้ 4 สถานที่ เลือกเอาได้เลยว่าจะไปเที่ยวไหน (ชมทะเลหมอกตอนเช้า,ไร่ชา,ชิมกาแฟขี้ชะมดดอยแตง, เก็บผลไม้ เก็บส้ม ชมสวนองุ่น ,ปางช้าง)'  ,
  Location:' https://goo.gl/maps/9esoqLscmTMXgMYE6',
  phone:' 0857171799 หรือ 0824194611',
  link: 'https://www.facebook.com/HomhugHomestay.Chiangmai',
  Facebook:'ฮอมฮัก โฮมสเตย์',
},
{name:'BLISS Homestay Maetaeng-ที่พักดอยม่อนเงาะเชียงใหม่' , 
  img: "https://chillpainai.com/src/wewakeup/scoop/images/f584f2ab6d0a125f5085de94329222d3305bf95e.jpg",
  img2:"https://chillpainai.com/src/wewakeup/scoop/images/b0141dee8531966fbcf1573a2d391137ed1c3a23.jpg",
  text_box:'Bliss Homestay อีกหนึ่งที่พักอบอุ่นและเป็นกันเอง เพราะที่นี่เป็นธุรกิจครอบครัว ทำกันเองในครอบครัวค่ะ โดยเค้าออกแบบที่พักมาในสไตล์บ้านไม้ที่ภายในให้กลิ่นอายความเป็นยุโรป ที่ให้บริการห้องพักเพียงแค่ 2 หลัง เน้นความสะดวกสบาย และเป็นส่วนตัว มาพร้อมกับชานระเบียงให้เราได้ชมวิวเขาค่ะ ในส่วนของสิ่งอำนวยความสะดวกก็มี wifi ไดร์เป่าผม ตู้เย็น ราคา : - ช่วงเดือนสิงหาคม-เดือนกันยายน หลังละ 1,500 บาท รวมอาหารเช้า- ช่วงเดือนตุลาคมเป็นต้นไป หลังละ 1,800 บาท  รวมอาหารเช้า'  ,
  Location:'https://g.page/bliss-homestay-maetaeng?share',
  phone:' 0904448051',
  link: ' https://www.facebook.com/bliss.homestay.maetaeng',
  Facebook:'BLISS Homestay Maetaeng',
},
{name:'เฮือนฮิมน้ำ AKHomestay-ที่พักดอยม่อนเงาะเชียงใหม่' , 
  img: "https://chillpainai.com/src/wewakeup/scoop/images/4813513290c88eb3e488ea695691cf18b986e572.jpg",
  img2:"https://chillpainai.com/src/wewakeup/scoop/images/7aa0c308831094c43eb0e50f1104f8f4f7f49fd0.jpg",
  text_box:'มานอนเล่น เอาขาจุ่มน้ำกันต่อที่ เฮือนฮิมน้ำ AKHomestay โฮมสเตย์ริมธารน้ำ บรรยากาศสุดชิล ที่บริการห้องพักสไตล์ลอฟท์ที่ถ้ามองจากหน้าห้องก็จะเห็นกับธารน้ำไหลและสวนสวยตลอดทั้งวัน ที่สำคัญลำธารนี้มีน้ำตลอดปีด้วยนะ ภายในห้องพักก็ตกแต่งเรียบง่าย มาพร้อมกับสิ่งอำนวยความสะดวกพื้นฐานครบครัน...สำหรับมื้อเย็นใครที่อยากทานอาหารเหนือ ก็สามารถสั่งชุดขันโขกได้นะ เพิ่มเพียงแค่คนละ 100 บาทเท่านั้น ราคา :  ราคาต่อท่าน ท่านละ 650 บาท + รวมอาหารเช้า ถ้ารับอาหารเย็นชุดขันโตกอาหารเหนือ เพิ่มท่านละ 100 บาท'  ,
  Location:' https://goo.gl/maps/2Vq1ifVhSqeHUaQx7',
  phone:' 0812870808  ID Line : kaipramoth',
  link: 'https://www.facebook.com/pages/AK-Homestay/1904977839826977',
  Facebook:'AK Homestay',
},
{name:'ธรรมดา โฮมสเตย์-ที่พักดอยม่อนเงาะเชียงใหม่' , 
  img: "https://chillpainai.com/src/wewakeup/scoop/images/32af5d4ebc7e9718df516485253c6dd8dc7abbdf.jpg",
  img2:"https://chillpainai.com/src/wewakeup/scoop/images/32af5d4ebc7e9718df516485253c6dd8dc7abbdf.jpg",
  text_box:'ธรรมดา โฮมสเตย์ ที่พักน้องใหม่ในอำเภอแม่แตง ที่บอกเลยว่ามาแรงสุดๆ เพราะที่นี่เป็นที่พักสไตล์บ้านๆ ที่มีคอนเซ็ปต์การใช้ชีวิตธรรมดาๆ เรียบง่าย ออกแบบห้องพักสไตล์บ้านไม้เป็นหลัง มีทั้งหมด 4 หลัง คือ บ้านจุดเริ่มต้น บ้านอบอุ่น บ้านพอดี (มีอ่างอาบน้ำ) และบ้านความฝัน (มีอ่างอาบน้ำ) ซึ่งแต่ละหลังจะหันหน้าออกไปยังวิวภูเขา มีระเบียงหน้าห้อง ทำให้เราสามารถเห็นวิวทะเลหมอกและภูเขาสลับซับซ้อนได้จากเตียงนอน แต่ถ้ามาถึงที่ธรรมดา โฮมสเตย์แล้ว ก็ต้องไม่พลาดที่จะพักห้องที่มีอ่างอาบน้ำค่ะ เพราะอ่างอาบน้ำจะอยู่นอกห้อง ทำให้เราสามารถแช่น้ำพร้อมกับชมวิวไปในตัวได้เลย นอกจากนี้ยังมีบริการหมูกระทะ ชุดละ 350 บาท ด้วยนะ แต่ต้องแจ้งล่วงหน้า ราคา :  เริ่มต้น 1,400 บาท *ราคาในแต่ละช่วงไม่เท่ากัน รบกวนสอบถามโดยตรงกับที่พัก'  ,
  Location:' https://goo.gl/maps/ykzQBzv8fHbH7tiM7',
  phone:'0611425665',
  link: ' https://www.facebook.com/Dhammada5626',
  Facebook:'ธรรมดา โฮมสเตย์ ',
},

])

const neartravel=ref([
{name:'' , 
  img: "",
  text_box:' ',
  Location:' ',
  phone:'',
  link: '',
  Facebook:' ',
  place:' ',
  time:' ',
},
{name:'' , 
  img: "",
  text_box:' ',
  Location:' ',
  phone:'',
  link: '',
  Facebook:' ',
  place:' ',
  time:' ',
},
{name:'' , 
  img: "",
  text_box:' ',
  Location:' ',
  phone:'',
  link: '',
  Facebook:' ',
  place:' ',
  time:' ',
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
