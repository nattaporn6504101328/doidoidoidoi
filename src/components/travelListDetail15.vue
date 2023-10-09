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
        <br><br>
        <h4>{{ stay.name }}</h4>
      </div>
      <div class="tipark">
        <p>{{ stay.text_box }}</p>
        <p>สถานที่ : {{ stay.Location }}</p>
        <p>เบอร์ติดต่อ : {{ stay.phone }}</p>
        <a :href="stay.Facebook">Facebook </a> / 
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
        <p>ราคา : {{ near.price }}</p>
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
{name: 'ดอยสุเทพ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-suthep-1536x1024.jpg", quantity: 0 ,
text_box:'เดินทางโดยสวัสดิภาพ'
}])

const stayy=ref([
{name:'Flora Creek Chiang Mai' , 
  img: "https://img.salehere.co.th/p/1200x0/2022/02/15/4ooddnckkqkk.jpg",
  text_box:'ฟลอร่า ครีค เชียงใหม่ รีสอร์ทหรูหราระดับ 5 ดาวที่ตั้งอยู่บนภูเขา บนพื้นที่กว่า 20 กว่าไร่ มีห้องพัก 4 แบบไว้คอยต้อนรับผู้ที่มาพักไม่ว่าจะเป็น Superior Garden View , Deluxe Plantation , Deluxe Horizon และ Pool Villa โดยห้องพักอยู่ท่ามกลางสวนสวย ๆ บนเขา สไตล์โมเดิร์น ทำให้ได้ทั้งความทันสมัยและธรรมชาติไปในตัว ที่นี่ให้บริการอุปกรณ์บาร์บีคิว มีสระว่ายน้ำกลางแจ้ง ฟิตเนส และมีบริการทัวร์รวมไปถึงรถรับส่งสนามบิน สะดวกสบายสุด ๆ'  ,
  Location:'Flora Creek Chaing Mai 90 Moo 4 samoeng Rd. Banpong, Hangdong 50230',
  phone:'052 001 400',
  link: 'https://www.floracreekchiangmai.com',
  Facebook:'https://www.facebook.com/FloraCreekChiangMai/ ',
},
{name:'จันตราคีรี ชาเลต์ เชียงใหม่' , 
  img: "https://img.salehere.co.th/p/1200x0/2022/02/15/udxo9x1cr0t5.jpg",
  text_box:'อีกหนึ่งโรงแรมสไตล์บูติคที่มีความหรูหรา เป็นส่วนตัว บรรยากาศดีเช่นกัน ที่นี่มีห้องพักทั้งแบบเป็นสไตล์ฝรั่งและ เป็นวิลล่าสไตล์ล้านนา มีความไทยร่วมสมัย โดยนำแรงบันดาลใจมากจากยุ้งข้าวของภาคเหนือ มาประยุกต์เป็นการตกแต่งห้องพักที่มีความสวยงามนั่นเอง ห้องพักมีระเบียงสามารถเดินออกไปรับลมชมวิวบนเนินเขาได้อีกด้วย ที่นี่ยังมีบริการเสิร์ฟอาหารพื้นเมืองอีกด้วย รวมไปถึงมีสวนกุหลาบสวย ๆ ให้ชมและการไปทำกิจกรรมที่ฟาร์มอย่างการเก็บไข่สด ๆ อีกด้วย'  ,
  Location:' ตำบล บ้านปง อำเภอหางดง เชียงใหม่ เทศบาลนครเชียงใหม่, จังหวัดเชียงใหม่ 50230',
  phone:'081 802 0666',
  link: 'https://chantrakhirichalet.com/gallery/',
  Facebook:'https://www.facebook.com/Chantrakhirichaletchiangmai/',
},
{name:'Merchant Villa' , 
  img: "https://img.salehere.co.th/p/1200x0/2022/02/15/ofitrqn4n6wa.jpg",
  text_box:'วิลล่าสวย ๆ อีกหนึ่ง ที่พักอุทยานแห่งชาติดอยสุเทพปุย เดินทางไปดอยสุเทพไม่เกินครึ่งชั่วโมงเท่านั้น ที่นี่ตกแต่งเป็นเหมือนบ้านพักตากอากาศที่อยู่เมืองฝั่งยุโรปเลย ไม่ว่าจะเป็นอาคารและสวน สามารถเดินชมและถ่ายรูปในวิลล่าไม่มีเบื่อ ที่นี่ยังมีชื่อเสียงเรื่องไวน์ที่ยกมาจากทั่วมุมโลกมาไว้ที่นี่ ใครที่ชอบรสชาติของไวน์ น่าจะลองมาพักที่นี่ดู'  ,
  Location:'132/1 Khai Luksuea Soi 5, Chang Puak (0.11 km) เทศบาลนครเชียงใหม่ 50300 เทศบาลนครเชียงใหม่, จังหวัดเชียงใหม่ 50300',
  phone:'097 924 2888 , 053 218 563 ',
  link: ' https://www.merchantvillachiangmai.com',
  Facebook:'https://www.facebook.com/merchantvillachiangmai/',
},

])

const neartravel=ref([
{name:'วัดพระธาตุดอยสุเทพ' , 
  img: "https://roijang.com/wp-content/uploads/2023/06/shutterstock_1534517819.jpg",
  text_box:'วัดพระธาตุดอยสุเทพ ตั้งอยู่ในตำบลสุเทพ อำเภอเมืองเชียงใหม่ วัดเชียงใหม่ สัญลักษณ์ของเมืองเหนือเลยต้องวัดนี้เลยค่ะ มาเที่ยวเชี่ยงใหม่ ใครไม่มา วัดพระธาตุดอยสุเทพ ถือว่าพลาดมากๆ เลยนร้า โดดเด่นสวยงามตามศิลปะเมืองเหนือที่สวยงาม ภายในมี พระอารามหลวง ชั้นโท ชนิดราชวรวิหาร',
  Location:'ตำบลสุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200',
  price:'30 บาท/คน',
  link: 'https://www.facebook.com/Watphrathatdoisuthep/',
  Facebook:'วัดพระธาตุดอยสุเทพราชวรวิหาร จังหวัดเชียงใหม่',
  place:'https://goo.gl/maps/MKdZzqSMV4ckmAez9',
  time:'6.00 – 18.00 น.',
},
{name:'จุดชมวิวบนยอดดอยสุเทพ' , 
  img: "https://roijang.com/wp-content/uploads/2023/06/shutterstock_1758737123.jpg",
  text_box:'มาตามเราไม่มีผิดหวัง เที่ยววัดเข้าวัดขอพรเพื่อความเป็นสิริมงคลกันเสร็จแล้วก็ตามมากันต่อเลยค่ะ กับ จุดชมวิวของคนเชียงใหม่ จุดชมวิวบนยอดดอยสุเทพ ที่อยู่ใกล้ๆ กันเลย เป็นพื้นที่กว้างที่สามารถมองเห็นวิวเมืองทั้งเมืองแบบมุมสูง โดยโซนนี้จะทำเป็น จุดชมวิวสำหรับนักท่องเที่ยวที่ขึ้นมาไหว้พระ บน วัดพระธาตุดอยสุเทพ เสร็จกันแล้ว ส่วนใหญ่จะขึ้นมาชมวิวด้านบนนี้กันต่อ ซึ่งเพื่อนๆ สามารถโบกรถประจำทางที่วิ่งประจำอยู่โซนนี้ขึ้นมากันได้นะคะ มาเก็บภาพบรรยากาศวิวเมืองเชียงใหม่ ที่สวยงาม มาได้ทั้งกลางวันและกลางคืน สวยไม่แพ้กันเลยจ้า!!!',
  Location:' ถนน ศรีวิชัย ตำบลสุเทพ อำเภอเมืองเชียงใหม่',
  phone:'-',
  link: '-',
  Facebook:'- ',
  place:'https://goo.gl/maps/D8kU5C59XguAe7nNA',
  time:'-',
},
{name:'น้ำตกห้วยแก้ว' , 
  img: "https://cms.dmpcdn.com/travel/2022/05/25/5b490ab0-dbe5-11ec-824f-19d999be95c9_webp_original.jpg",
  text_box:'น้ำตกเล็ก ๆ อยู่ห่างจากตัวเมืองเพียงแค่ 6 กิโลเมตร โดยน้ำตกไหลตลอดทั้งปี มีความร่มรื่นจากธรรมชาติ สามารถขับรถเพื่อไปพักผ่อน นั่งเล่นได้เลย',
  Location:' ',
  phone:'',
  link: 'https://www.emagtravel.com/archive/huaykaew-waterfall.html',
  Facebook:' ',
  place:' ',
  time:'ทุกวัน ตั้งแต่เวลา 8.00-17.00 น.',
},
{name:'พระตำหนักภูพิงค์ราชนิเวศน์' , 
  img: "https://cms.dmpcdn.com/travel/2022/10/19/185f05a0-4f72-11ed-b302-939aac1ef702_webp_original.jpg",
  text_box:'ห่างจากวัดพระธาตุดอยสุเทพ ไปเพียงแค่ 4 กิโลเมตร โดยตั้งอยู่บนดอยบวก โดยบริเวณนั้นจะมีสวนดอกไม้นานาพรรณและแปลงกุหลาบสวย ๆ ห้า สามารถชมรอบ ๆ พระตำหนักได้ในวันศุกร์ เสาร์ และวันอาทิตย์',
  Location:'1223 ถนนศรีวิชัย ตำบลสุเทพ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ ',
  phone:'053 294 599',
  price:'คนไทย ผู้ใหญ่ 20 บาท เด็ก 10 บาท , ชาวต่างชาติ 50 บาท',
  link: 'https://www.royaloffice.th/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%B1%E0%B8%87-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3/%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B8%8A%E0%B8%A1/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A0%E0%B8%B9%E0%B8%9E%E0%B8%B4%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B9%80/',
  Facebook:' ',
  place:' https://goo.gl/maps/Lr3xpzUsQWCRq2ZH8',
  time:'08:30 - 15:30 น.',
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
