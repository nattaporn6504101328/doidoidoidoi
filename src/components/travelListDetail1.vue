<template>
  <div class="col" v-for="(n) in travellist" :key="n">
    <div class="name">
      <h1>{{ n.name }}</h1>
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
        <a :href=" stay.link">ที่พัก</a>
      </div>
    </div>
  </div>
  <h3>สถานที่เที่ยวใกล้ๆ</h3>
  <div class="col" v-for="(neartravel, index) in neartravel" :key="index">
      <div class="name">
        <div class="name">
        <img :src="neartravel.img" alt="รูปภาพ 1">
        <br><br>
        <h4>{{ neartravel.name }}</h4>
      </div>
      <div class="titravel">
        <p>{{ neartravel.text_box }}</p>
        <p>สถานที่ : {{ neartravel.Location }}</p>
        <p>เบอร์ติดต่อ : {{ neartravel.phone }}</p>
        <p>เวลา : {{ neartravel.time }}</p>
        <a :href="neartravel.place">พิกัด</a>
      </div>
    </div>
  </div>
</template>


<script setup>

import { ref } from 'vue';
import { RouterLink } from 'vue-router'
const travellist=ref([
{name: 'ดอยหลวงเชียงดาว',  price:500, img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-luang-chiang-dao-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const stayy=ref([
{name:'บ้านต้นไม้ แม่แมะ เชียงดาว โฮมสเตย์' , 
  img: "https://treehousehomestay.com/wp-content/uploads/2020/07/treehouseterracelogo1-800x450.jpg",
  img2:"https://treehousehomestay.com/wp-content/uploads/2020/07/chomjan7terrace2logo-800x450.jpg",
  text_box:'บ้านพักแนบอิงธรรมชาติสีเขียว บรรยากาศเงียบสงบ รับลมเย็นๆ เหมาะแก่การหนีความวุ่นวายในเมือง แล้วมาปล่อยตัวไปกับธรรมชาติ ที่นี่เหมาะแก่การมาพักผ่อนสุดๆ'  ,
  Location:' บ้านต้นไม้แม่แมะ ต.แม่นะ อ.เชียงดาว จ.เชียงใหม่',
  phone:'081 958 5601',
  Price:'ราคา ที่พัก+อาหาร 2 มื้อ 750 บาท',
  link: 'https://www.facebook.com/TreeHouseHideaway',
  Facebook:'บ้านต้นไม้แม่แมะ Tree House Hideaway ',
},
{name:'บ้านสายหมอก โฮมสเตย์ เชียงดาว' , 
  img: "https://www.paiduaykan.com/travel/wp-content/uploads/2016/07/3-DSC08168.jpg",
  img2:"https://www.paiduaykan.com/travel/wp-content/uploads/2016/07/16-DSC08202.jpg",
  text_box:'อีกหนึ่งที่พักวิวทะเลหมอก รับลมหนาวมาเย็นสบายๆ เป็นที่พักที่ตั้งอยู่บนเนินเขามีธรรมชาติสีเขียวล้อมรอบ ให้คุณได้สัมผัสบรรยากาศสุดฟิน แบบที่ไม่เคยพบเจอที่ไหนกันมาก่อน'  ,
  Location:'ต.เชียงดาว อ.เชียงดาว จ.เชียงใหม่',
  phone:'090-760-8819',
  Price:' ห้องพัก ราคา 500 บาท',
  link: ' https://www.facebook.com/BansaimokHomestay/',
  Facebook:'บ้านสายหมอก โฮมสเตย์ เชียงดาว',
},
{name:'บ้านวิวหลวง เชียงดาว' , 
  img: "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/Toon/Trip%20Chiangmai4d3n/Doi_Luang-7.jpg",
  img2:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/A_Toon%202016/JAN/5%20Homestay%20Chiangdao_Chiangmai%202016/Doi-Luang-1.jpg",
  text_box:'บ้านพักสไตล์โฮมสเตย์ราคาไม่แพง สร้างขึ้นด้วยจากวัสดุจากธรรมชาติ เพื่อให้นักท่องเที่ยวที่มาพักกันได้สัมผัสธรรมชาติแบบใกล้ชิด ซีมซับอากาศสุดแสนบริสุทธิ์ไปกับที่พักหลักร้อยกับวิวหลักล้านที่ใครๆ ก็ยกนิ้วให้'  ,
  Location:'บ้านนาเลา อ.เชียงดาว จ.เชียงใหม่',
  phone:'0895598272, 0872087086',
  Price:'ห้องพัก ราคา 500 บาท',
  link: 'https://www.facebook.com/pages/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%94%E0%B8%B2%E0%B8%A7/637218686321101',
  Facebook:'บ้านวิวดอยหลวง เชียงดาว',
},
{name:'บ้านระเบียงดาว' , 
  img: "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/Toon/5%20Cafe%20Chantaburi%20Chic/Doi_Luang-9.jpg",
  img2:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/Toon/Trip%20Chiangmai4d3n/Doi_Luang-4.jpg",
  text_box:'เป็นที่พักเล็กๆ แต่วิวไม่เล็ก ด้วยบรรยากาศที่เงียบสงบ กับรอบข้างที่รายล้อมไปด้วยภูเขาน้อย ภูเขาใหญ่ เรียงรายสลับกันไปมา หากใครกำลังต้องการตัดขาดจากโลกภายนอกเพื่อมาพักผ่อนกันให้เต็มที่ ต้องมาที่นี่กันเลย'  ,
  Location:' บ้านนาเลา อ.เชียงดาว จ.เชียงใหม่',
  phone:'089 998 0712, 089 903 0083',
  Price:' สอบถามกับทางที่พัก',
  link: 'https://www.facebook.com/rabiangdaohomestay',
  Facebook:'บ้านระเบียงดาว',
},
{name:'บ้านหมอกตะวัน เชียงดาว' , 
  img: "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/ben_study_2016/sep/wood_dinner/baanmok/1.jpg",
  img2:"https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/ben_study_2016/sep/wood_dinner/baanmok/4.jpg",
  text_box:'อีกหนึ่งที่พักที่มีวิวสวยสุดๆ สามารถรับชมวิวดอยหลวงเชียงดาวได้แบบใกล้ชิด สัมผัสสายหมอกสีขาว กับลมหนาวในยามเช้าให้คุณได้รู้สึกผ่อนคลายไปกับบรรยากาศที่เงียบสงบ ฟินไปกับวิวหลักล้านได้อีกด้วย'  ,
  Location:'บ้านนาเลา อ.เชียงดาว จ.เชียงใหม่',
  phone:'096 959 9683',
  Price:'ห้องพัก ราคา 500 บาท',
  link: 'https://www.facebook.com/profile.php?id=100066889585683',
  Facebook:'บ้านหมอกตะวัน',
},
])

const neartravel=ref([
{ name: 'Giant tree alley' , 
  img: "https://www.paiduaykan.com/travel/wp-content/uploads/2022/11/3-DSC06939.jpg",
  text_box:'ถนนอุโมงค์ต้นไม้เชียงดาว ที่กำลังเป็นจุดถ่ายรูปยอดฮิตของนักท่องเที่ยวที่มาเยือนเมืองเชียงดาว อุโมงค์ต้นไม้แห่งนี้ คือ ต้นยางสูงใหญ่ตั้งเรียงรายไปตามโค้งถนน  เส้นทางไปยังวัดถ้ำเชียงดาวและเมืองคอง ซึ่งบางช่วงของถนนมีความโค้งและมีแสงสวยในยามบ่ายและเช้าส่องลงมา กลายเป็นภาพถนนที่สวยงาม' ,
  Location:'' ,
  place:'',
  phone:'',
  time:'',
},
{ name: '.Pronto Coffee Thailand' , 
  img: "https://coffcafe.com/wp-content/uploads/2022/09/Pronto-Coffee-Chiangdao-1024x620.jpg",
  text_box:'สัมผัสกับธรรวมชาติและอากาศบริสุทธิ์ได้เต็มที่ นั่งมองวิวดอยหลวงเชียงดาว ขุนเขาอันยิ่งใหญ่สูงอันดับ3 ของประเทศไทยที่ตั้งตระหง่านอยู่ตรงหน้าคุณแบบสัมผัสได้ ไม่ว่าจะมาเที่ยวฤดูไหนๆ อากาศดีทั้งปี แวะมานั่งพักผ่อนพร้อมด้วยการจิบกาแฟอร่อยๆ และเครื่องดื่มอีกมากมายหลากหลายรายการให้เลือกดื่มๆกันได้อย่างจุใจ' ,
  Location:'ตำบลเชียงดาว อำเภอเชียงดาว เชียงใหม่ 50170' ,
  place:'',
  phone:'02-870-4554',
  time:' เปิดทุกวัน 7:00-18:00 น.',
},
{ name: 'ฮกหลง' , 
  img: "https://www.topchiangmai.com/wp-content/uploads/2022/07/%E0%B8%AE%E0%B8%81%E0%B8%AB%E0%B8%A5%E0%B8%87-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%94%E0%B8%B2%E0%B8%A726.jpg",
  text_box:'ป็นกระท่อมมุงหญ้าคา ที่อยู่ใจกลางหุบเขา ไม่ไกลตัวอำเภอเชียงดาว จังหวัดเชียงใหม่ เป็นที่ตั้งของร้านกาแฟและที่พักสำหรับนักเดินทางที่มีความชื่นชอบธรรมชาติ ชื่อว่า ฮกหลง (Hoklhong Cafe) ที่แปลว่า มังกร มังกรที่ซ่อนกายเงียบๆ อยู่ท่ามกลางความสงบแห่งขุนเขาหลวงเชียงดาว โดยมีเจ้าของร้านอย่าง คุณ‘ยุทธ์’ – ธีรยุทธ์ จันทโชติ ที่คอยต้อนรับนักเดินทาง และคั่วกาแฟเอง บดเอง และชงเองกับมือ' ,
  Location:': ตำบลเชียงดาว อำเภอเชียงดาว เชียงใหม่' ,
  place:'https://goo.gl/maps/E5jfS1sGcarmwqkf8',
  phone:'086-3464624',
  time:' 09.00 – 17.00 น',
},
{ name: 'ศูนย์ฝึกช้างเชียงดาว' , 
  img: "https://roijang.com/wp-content/uploads/2023/05/shutterstock_1923442577.jpg",
  text_box:'ศูนย์ฝึกช้างเชียงดาวเป็นสถานที่ เชียงดาวที่เที่ยว อีกหนึ่งแห่งของการท่องเที่ยวทางธรรมชาติมีลักษณะคือ จะอยู่ท่ามกลางธรรมชาติ ภูเขาโอบล้อม นักท่องเที่ยวที่จะเข้ามาชมช้างที่นี่จะต้องเดินข้ามสะพานแขวนข้ามแม่น้ำแม่ปิงเข้าไป สะพานที่นี่จะมีลักษณะเด่น สร้างความตื่นเต้นให้กับนักท่องเที่ยวที่เข้ามาเที่ยวสถานที่แห่งนี้ นักท่องเที่ยวที่ได้เข้าไปถือว่าคุ้มค่าเพราะจะได้พบเจอกิจกรรม การแสดงของช้าง ในแต่ละช่วงเวลา และอีกหนึ่งกิจกรรมที่สร้างจุดเด่นให้กับสถานที่แห่งนี้นั่นคือ การขี่ช้างลุยแม่น้ำ จึงทำให้สร้างความเพลิดเพลินเป็นเข้าสู่ธรรมชาติได้อย่างแท้จริง' ,
  Location:'ตำบลเชียงดาว อำเภอเชียงดาว จังหวัดเชียงใหม่' ,
  place:' https://goo.gl/maps/2pFFyhN3cDEdzuWA6',
  Price:'',
  time:'08:00 – 13:00',
},
{ name: 'ไร่ภูผาหมวก' , 
  img: "https://roijang.com/wp-content/uploads/2023/05/shutterstock_2277546695.jpg",
  text_box:'หน้าหนาวก็ต้องมาพร้อมกับที่เที่ยวหน้าหนาว ขอฝากไร่ภูผาหมวกไว้ในอ้อมกอดของนักท่องเที่ยวอีกหนึ่งแห่ง ไร่ภูผาหมวกสวยงดงาม อารมณ์เหมือนวิ่งเล่นอยู่ในสวนดอกไม้เป็น ที่เที่ยวเชียงดาว ที่ได้ใกล้ชิดกับธรรมชาติที่สุดมีทุ่งดอกไม้หลากสี มีที่พักเป็นกระท่อมได้สัมผัสกับธรรมชาติ ความเรียบง่าย โดดเด่นด้วยรูปร่างที่แปลกตา ตัวกระท่อมอาจจะไม่ได้หรูหรา ไม่ได้มีรูปร่างที่สวยงามแต่บอกเลยว่าทุกคนที่ได้มาพักผ่อนที่ไร่ภูผาหมวกนี้จะได้รับความสุขกลับไปเต็มเปี่ยม ในวันที่ท้องฟ้าโปร่งใสก็จะมีความสวยในตัวของมัน ตกกลางคืนออกมานอนดูดาวได้อย่างสุดฟิน' ,
  Location:'ไร่ภูผาหมวก ตำบล ปิงโค้ง อำเภอเชียงดาว เชียงใหม่ 50170' ,
  place:'',
  phone:'097 950 5297',
  time:'- ค่าเข้าชมโชว์ช้าง วันละหนึ่งรอบ เวลา 10:05 ค่าชม 100 บาท , Foreigner BHT 100 - กิจกรรมนั่งช้าง ลงชื่อล่วงหน้าเป็นรอบ เวลา 11:00 12:00 และ 13:00 ใช้เวลาประมาณหนึ่งชั่วโมง ราคา 1,200 บาทต่อเชือก นั่งได้สองคน - กิจกรรมล่องแพ ติดต่อล่องได้ถึงเวลาประมาณ 12:00 คนละ 400 บาท สามคนขึ้นไป 300 บาท',
},
  
])

</script>

<style>
.name{
  text-align: center;
}
.tipark{
  text-align: center;
}

</style>
