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

const travellist =ref([
{name:'ดอยอ่างขาง' , img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-ang-khang-1536x1024.png",
text_box:'สถานีเกษตรหลวงอ่างขาง เป็นโครงการหลวงแห่งแรก จัดตั้งขึ้นมาเมื่อปี พ.ศ. 2512 เป็นโครงการอันเนื่องมาจากพระราชดำริในพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชเพื่อส่งเสริมอาชีพเกษตรกรรม ทดแทนการปลูกฝิ่นที่ว่า “ให้เขาช่วยตัวเอง” เปลี่ยนพื้นที่จากไร่ฝิ่นมาเป็นแปลงเกษตรเมืองหนาวที่สร้างรายได้ดีกว่าเก่าก่อน สถานีเกษตรหลวงอ่างขาง ตั้งอยู่ในเขตบ้านคุ้ม หมู่ที่ 5 ตำบลแม่งอน อำเภอฝาง จังหวัดเชียงใหม่ อยู่สูงจากระดับน้ำทะเลประมาณ 1,400 เมตร มีพื้นที่ทำการเกษตรประมาณ 1,800 ไร่ มีหมู่บ้านชาวเขาที่ทางสถานีเกษตรฯ ให้การส่งเสริมและพัฒนาอาชีพรวม 6 หมู่บ้าน ได้แก่ บ้านหลวง บ้านคุ้ม บ้านนอแล บ้านปางม้า บ้านป่าคา และบ้านขอบด้ง ประกอบชาวเขา 4 เผ่าได้แก่ ไทยใหญ่ มูเซอดำ ปะหล่อง และจีนฮ่อ จากจุดเริ่มต้นถึงวันนี้ได้มีการพัฒนาพื้นที่ให้เป็นประโยชน์อยู่มากมาย และกลายเป็นจุดเที่ยวชมดอยอ่างขางที่สวยงามอยู่หลายจุดด้วยกัน'
}])

const stayy=ref([
{name:'ลานกางเต็นท์ป่าสน' , 
  img: "https://f.ptcdn.info/741/066/000/q0hgae2297BO3P1K7cV2-o.png",
  img2:"https://fastly.4sqi.net/img/general/600x600/18973455_51l8Jd9CXr-lSgc8trN_4oHJrwNmmIKIIY9VPiMGorQ.jpg",
  text_box:' ลานกางเต็นท์ป่าสน จะตั้งอยู่ก่อนถึงสถานีเกษตรหลวงอ่างขาง เป็นจุดที่ได้รับความนิยมจากนักท่องเที่ยวมากที่สุด เพราะบริเวณนี้สามารถมองเห็นวิวของทะเลหมอกได้อย่างสวยงาม อีกทั้งยังมีร่มสนให้ความร่มเย็น และมีร้านค้า ร้านอาหาร รวมทั้งห้องน้ำอยู่ในบริเวณนี้ '  ,
  Location:'V372+8MJ, Tambon Mae Sun, Fang District, Chiang Mai 50320',
  phone:'-',
  link: 'https://maps.app.goo.gl/cz5qGoUNrwJnqjoQ6',
  Facebook:' ',
},
{name:'จุดกางเต็นท์ฐานปฏิบัติการบ้านนอแล' , 
  img: "https://4.bp.blogspot.com/-GgUNToVgXh4/WggUuQuCybI/AAAAAAAANAM/9Hf4AEqP39kq6HVXqHw80ugjQLU4MwqDACKgBGAs/s1600/Angkhang_0570.jpg",
  img2:"https://www.topchiangmai.com/wp-content/uploads/2016/02/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%AD%E0%B9%81%E0%B8%A5-%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%94%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2-%E0%B8%9E%E0%B8%A1%E0%B9%88%E0%B8%B2-3.jpg",
  text_box:'  พื้นที่ในส่วนนี้จะเป็นลานกว้าง ๆ และเป็นพื้นที่ของทหาร แต่ขอบอกว่าวิวสวยแจ่มไม่แพ้จุดกางเต็นท์อื่น ๆ เช่นกัน และยังสามารถมองเห็นวิวของภูเขาฝั่งเมียนมา ยามเช้าอากาศที่นี่จะหนาวเย็นมาก นักท่องเที่ยวสามารถเดินเที่ยวชมรอบ ๆ ฐานปฏิบัติการบ้านนอแลและบริเวณแปลงผัก แปลงสตรอว์เบอร์รีของชาวบ้านได้อีกด้วย '  ,
  Location:'W2RR+4JF, Unnamed Road Tambon Mon Pin Amphoe Fang Chang Wat Chiang Mai, Mong Hsai, Myanmar (Burma)',
  phone:'-',
  link: 'https://maps.app.goo.gl/CyTzdsVY55UUrXqc8',
  Facebook:'ฐานปฏิบัติการบ้านนอแล ',
},
{name:'ลานกางเต็นท์หน่วยจัดการต้นน้ำแม่เผอะ' , 
  img: "http://www.thongthailand.com/private_folder/forest/maepu1.jpg",
  img2:"http://www.thongthailand.com/private_folder/forest/maepu5.jpg",
  text_box:' หน่วยจัดการต้นน้ำแม่เผอะ อยู่ก่อนถึงทางเข้าสถานีเกษตรหลวงอ่างขางไม่ไกลค่ะ ตั้งอยู่ในหุบเขา วิวอาจจะไม่ได้สวยมากนัก แต่รับรองว่าบรรยากาศเงียบสงบสุด ๆ นักท่องเที่ยวไม่วุ่นวาย สามารถพักผ่อนได้อย่างเต็มที่ ใครที่ชอบนอนเงียบ ๆ ยามค่ำคืน ไม่ต้องแย่งห้องน้ำกับนักท่องเที่ยวคนอื่น ๆ ที่นี่ก็ถือว่าเป็นตัวเลือกที่ดีทีเดียว'  ,
  Location:'ตำบลแม่สูน อำเภอ ฝาง เชียงใหม่ 50320',
  phone:'-',
  link: ' https://maps.app.goo.gl/GGZTpyjSdVXTGaSo9',
  Facebook:' - ',
},
{name:'จุดกางเต็นท์ฐานปฏิบัติการอ่างขาง' , 
  img: "https://img.kapook.com/u/2016/pattra/patoct16/angkhang01.jpg",
  img2:"https://i.ytimg.com/vi/qqs3uhQj_KM/maxresdefault.jpg",
  text_box:'  จุดกางเต็นท์ฐานปฏิบัติการอ่างขาง จะอยู่ใกล้กับจุดชมวิวม่อนสน ในจุดนี้จะเป็นลานกว้าง มีลานจอดเฮลิคอปเตอร์ อยู่ไกลจากสถานีเกษตรหลวงอ่างขางเล็กน้อย แต่มีจุดชมวิวที่สวยงาม สะดวกในเรื่องห้องน้ำ บรรยากาศเงียบสงบ ไม่วุ่นวายเท่ากับจุดชมวิวอื่น ๆ ที่อยู่ใกล้กับสถานีเกษตรฯ และยังมีความปลอดภัย เพราะอยู่ในพื้นที่ทหาร'  ,
  Location:'V373+G2W ตำบล แม่สูน อำเภอ ฝาง เชียงใหม่ 50320',
  phone:' 053- 969-492',
  link: 'https://maps.app.goo.gl/q5XWXxTNmwg7SMSe9',
  Facebook:'-',
},
])


const neartravel=ref([
{name:'ดอกซากุระแท้ บานในสถานีเกษตรหลวงฯ' , 
  img: "https://th.bing.com/th/id/R.912e4d8241f1a413ac5de0fbd68d2c70?rik=6njn%2bXrIbmha9g&pid=ImgRaw&r=0",
  text_box:' จุดเที่ยวชมในสถานีเกษตรฯ ยังไม่หมดเพียงเท่านี้ อีกหนึ่งไฮไลท์ก็มีดอกซากุระแท้ๆ ที่ไม่ใช่ซากุระเมืองไทยเหมือนที่อื่น โดยจะเริ่มบานในช่วงเดือนมกราคม ซึ่งซากุระแท้จะมีให้ชมอยู่ 3 จุดด้วยกันคือ ระหว่างทางภายในสถานีฯ สวน 80 และ สวนกุหลาบอังกฤษ'  ,
  Location:'W22R+C2F ตำบล ม่อนปิ่น อำเภอ ฝาง เชียงใหม่ 50320',
  phone:'0815688750 , 053 969 477',
  link: 'https://www.facebook.com/AngkhangRoyalAgriculturalStation/',
  Facebook:'สถานีเกษตรหลวงอ่างขาง',
  place:'https://www.google.com/maps/place/%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%B2%E0%B8%87/@19.9010555,99.0019471,14z/data=!4m6!3m5!1s0x30d0cfd9ad99a48f:0xca080867829d1968!8m2!3d19.9010555!4d99.0400559!16s%2Fg%2F11cjk42wtv?entry=ttu',
  time:' '
},
{name:'ไร่ชา2000' , 
  img: "https://img.salehere.co.th/p/1200x0/2022/06/15/grbvubvsv9bq.jpg",
  text_box:'ไร่ชา 2000 ดอยอ่างขาง (Tea Plantation 2000 Doi Ang Khang) ตั้งอยู่บน ทิวเขาแดนลาว ตำบลแม่งอน อำเภอฝาง จังหวัดเชียงใหม่ จัดตั้งขึ้นเมื่อปี พ.ศ. 2512 ตามแนวพระราชดำริในพระบาทสมเด็จพระเจ้าอยู่หัว จุดน่าสนใจ ของแปลงชา 2000 มีหลายจุด 2 จุดหลักๆ คือ ด้านบนตรงบริเวณกังหันลมแคนนอน และ ตรงแปลงชาด้านล่าง โดยทั้ง 2 จุดมีร้านชาให้นักท่องเที่ยวดื่มด่ำไปกับบรรยากาศเย็นๆของที่นั่น บรรยากาศไร่ชาสุดสดชื่น หรือจะแวะชิมชาร้อนได้อีกด้วย'  ,
  Location:' อำเภอ ฝาง เชียงใหม่ 50110 ประเทศไทย',
  phone:' 0 5345 0107-9',
  link: 'http://www.royalprojectangkhang.com/',
  Facebook:' ',
  place:'https://maps.app.goo.gl/DQ24xHMmfmmJq2Pt7',
  time:'ทุกวัน	08.00-16.30 น',
},
{name:'ไร่สตรอเบอร์รีบ้านนอแล' , 
  img: "https://พาเที่ยวไทย.com/wp-content/uploads/2023/03/dFQROr7oWzulq5FZXlf5jcn3Io4IAI85USkHtkSo6dlGamLSU7PGIEregwevJNzFQE6.jpg",
  text_box:' บ้านนอแล เป็นอีกหนึ่งหมู่บ้านที่มีการปลูกไร่สตรอเบอร์รี่อยู่มาก เมื่อขับผ่านเช้าๆ เราจะเห็นชาวบ้านกำลังเก็บสตรอเบอร์รี่ที่ปลูกอยู่เป็นทิวแถว',
  Location:'269 หมู่ที่ 1 ตำบลสะเมิงใต้ อำเภอสะเมิง จังหวัดเชียงใหม่',
  phone:'093-1377719 / 084-3642639',
  link: 'https://namphapsiza.com/',
  Facebook:' ',
  place:'https://goo.gl/maps/aWWHabsCsfkWCocy5',
  time:'7:00–17:00 น.',
},
{name:'ชมทะเลหมอก ฐานปฎิบัติการดอยอ่างขาง' , 
  img: "https://mpics.mgronline.com/pics/Images/565000007301504.JPEG",
  text_box:' ฐานปฏิบัติการดอยอ่างขาง เป็นอีกจุดชมวิวทะเลหมอกและพระอาทิตย์ขึ้นที่สวยงามและอากาศดีมาก โดยจะอยู่ทางขึ้นก่อนถึงสถานีเกษตรฯ ประมาณ 1 กิโลเมตร',
  Location:' Mae Sun, Fang District, Chiang Mai 50320',
  phone:'053 453 517 ',
  link: '-',
  Facebook:'-',
  place:' https://maps.app.goo.gl/KTEvean5vrCPntCBA',
  time:'-',
},
{name:'จุดชมวิวม่อนสน' , 
  img: "https://s.isanook.com/tr/0/ud/283/1416613/hy6uj.jpg",
  text_box:' จุดนี้มีต้นสนเต็มไปหมด จึงได้ชื่อว่าเป็นจุดชมวิวม่อนสน ที่นี่เหมาะแก่การกางเต็นท์พักแรมแล้วตื่นเช้ามาชมวิวทะเลหมอก รวมไปถึงวิวทิวทัศน์ของต้นสนที่สวยงามกับไอหมอกจางๆ ระหว่างทิวสน ให้บรรยากาศดีราวกับอยู่ต่างประเทศ',
  Location:' Mae Sun, Fang District, Chiang Mai 50320',
  phone:'053 453 517 ',
  link: '-',
  Facebook:'-',
  place:'https://maps.app.goo.gl/FTJRcNk3mnCvMA6WA',
  time:'-',
},
{name:'จุดชมวิวซุ่ยถัง' , 
  img: "https://mpics.mgronline.com/pics/Images/565000007301501.JPEG",
  text_box:' จุดชมวิวซุ่ยถึง หรือ จุดชมวิวฐานปฏิบัติการซุ่ยถัง อยู่ห่างจากสถานีเกษตรฯ ไปทางหมู่บ้านอรุโณทัย ได้ชื่อว่าเป็นลำธารแห่งสายหมอก เพราะเราจะเห็นทะเลหมอกระหว่างแนวเขาทอดตัวยาวราวกับลำธาร โดยที่นี่มีลานกางเต็นท์และห้องน้ำสำหรับใครที่อยากนอนค้างคืนก็สามารถพักได้',
  Location:' 1340, Mae Ngon, Chai Prakan District, Chiang Mai 50320',
  phone:'0932943313 ',
  link: '',
  Facebook:' ',
  place:' https://maps.app.goo.gl/XqS5xtSNhYT88ErN8',
  time:' 8 AM–4 PM',
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
