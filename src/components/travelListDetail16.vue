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
        <p>ราคา : {{ near.Price }}</p>
        <a :href="near.link">link</a> /
        <a :href="near.place">พิกัด</a>
      </div>
    </div>
  </div>
</template>
<script setup>

import { ref } from 'vue';

const travellist=ref([
{name: 'ขุนช่างเคี่ยน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/khun-chang-kian-1536x1024.jpg",
text_box: 'ขุนช่างเคี่ยน มีชื่อเรียกเต็ม ๆ ว่า สถานีวิจัยและศูนย์ฝึกอบรมเกษตรที่สูงขุนช่างเคี่ยน ตั้งอยู่ในตำบลช้างเผือก อำเภอเมือง และตำบลแม่แรม อำเภอแม่ริม จังหวัดเชียงใหม่ อยู่ในเส้นทางเดียวกับพระธาตุดอยสุเทพ ห่างจากตัวเมืองเชียงใหม่เพียง 32 กิโลเมตรเท่านั้น จึงถือเป็นแหล่งชมดอกพญาเสือโคร่งที่อยู่ใกล้เมืองเชียงใหม่มากที่สุด โดยอยู่บนยอดดอยที่ความสูงประมาณ 1,200-1,300 เมตรจากระดับน้ำทะเล  ขุนช่างเคี่ยน มีพื้นที่ครอบคลุมกว่า 262 ไร่ แบ่งออกเป็น Site A และ Site B โดยจุดที่นักท่องเที่ยวไปเที่ยวชมมากที่สุดจะอยู่บริเวณ Site A จัดทำขึ้นมาเป็นศูนย์วิจัยเกี่ยวกับพืชเมืองหนาวของคณะเกษตรศาสตร์ มหาวิทยาลัยเชียงใหม่ เป็นสถานที่วิจัยและปลูกกาแฟอาราบิก้า ไม้ผลเมืองหนาว พืชผักเมืองหนาว และพืชอื่น ๆ แต่ได้มีการนำต้นนางพญาเสือโคร่งมาปลูกทำรั้ว พอถึงฤดูกาลที่ดอกนางพญาเสือโคร่งบานจึงทำให้ที่นี่กลายเป็นยอดดอยที่สวยงาม'
}])

const stayy=ref([
{name:'บ้านพักอุทยานแห่งชาติ ดอยสุเทพ-ปุย (At Doi Suthep Pui National Park)' , 
  img: "https://resource.nationtv.tv/uploads/images/contents/w1024/2021/11/h0BsJUkwojp64TrQS7vz.webp",
  img2:"https://media-cdn.tripadvisor.com/media/photo-s/13/80/71/b4/4.jpg",
  text_box:''  ,
  Location:'ถนนศรีวิชัย ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200 ',
  phone:'0 5321 0244 (ที่ทำการฯ) 0 5329 5041 (บ้านพักนักท่องเที่ยวสวนสน) ',
  Price:'คนไทย เด็ก 10 บาท ผู้ใหญ่ 20 บาท, ชาวต่างชาติ เด็ก 50 บาท ผู้ใหญ่ 100 บาท',
  link: 'https://nps.dnp.go.th/home.php?id=120&name=%25E0%25B8%25AD%25E0%25B8%258A.%25E0%25B8%2594%25E0%25B8%25AD%25E0%25B8%25A2%25%25B8%25AA%25E0%25B8%25B8%25E0%25B9%2580%25E0%25B8%2597%25E0%25B8%259E%25E0%25B8%259B%25E0%25B8%25B8%25E0%25B8%25A2',
  Facebook:'บ้านพักอุทยานแห่งชาติ ดอยสุเทพ-ปุย (At Doi Suthep Pui National Park) ',
},
{ name: 'จุดกางเต็นท์' , 
  img: "https://2.bp.blogspot.com/-T01yde1WjoI/UtITZ-2eDsI/AAAAAAAAC9Q/yd2zQy-t2LA/s1600/khun_chang_keeng_014.jpg",
  img2: "https://tatcontactcenter.com/wp-content/uploads/2023/01/326284552_6198963473448004_8624843654563489621_n-1024x683.jpg",
  text_box:'สำหรับการตั้งแค้มป์กางเต็นท์ ภายในสถานีไม่มีลานกางเต็นท์ไว้รองรับนักท่องเที่ยว หากนักท่องเที่ยวมีความประสงค์จะกางเต็นท์ จะต้องมากางในพื้นที่ของศูนย์บริการนักท่องเที่ยว อุทยานแห่งชาติดอยสุเทพ-ปุย ซึ่งอยู่ห่างจากสถานีประมาณ 4 กิโลเมตร' ,
  Location:'ถนนแม่บัวมุง ตำบล ดอนแก้ว อำเภอแม่ริม เชียงใหม่ 50300',
  link:'https://maps.app.goo.gl/T7eWXFtsA3h5etbW8' ,
  Price:'ค่าบริการ เต็นท์ขนาด 3 คน ราคา 225 บาท ไม่รวมเครื่องนอน โดยค่าบริการเฉพาะเครื่องนอน ได้แก่ ถุงนอน 30 บาท/คน/คืน ที่รองนอน 20 บาท/คน/คืน และหมอน 10 บาท/คน/คืน  ค่าบริการในการใช้พื้นที่ กรณีไม่ใช้เต็นท์ของอุทยาน ต้องชำระค่าใช้พื้นที่ตามขนาดเต็นท์ ในราคา 30 บาท/คน/คืน เช่น เอาเต็นขนาด 4 คนนอนมากางเอง ต้องชำระค่าเช่าใช้พื้นที่ 4x30 = 120 บาท/คืน แม้ว่าจะนอนไม่เต็มเต็นท์ก็ตาม สามารถจองเต็นท์ล่วงหน้าก่อนวันเข้าพัก 60 วัน',
  phone:'053-210244, 086-4205242',
  Facebook:'',
},
{ name: 'โฮมเสตย์บ้านม้งขุนช่างเคี่ยน' , 
  img: "https://img.wongnai.com/p/1920x0/2018/11/16/5b66986d35af4932ae11b24a6b8ca0e2.jpg",
  img2: "https://f.ptcdn.info/550/040/000/o3cp131s1kAIe9KagJ4-o.jpg",
  text_box:'' ,
  Location:'ทางหลวงพิเศษหมายเลข 7 - 9 กรุงเทพมหานคร 10240' ,
  link:' https://maps.app.goo.gl/M6juwZUtA837xeXg6' ,
  phone:'083 322 9732',
  Price:'',
  Facebook:'โฮมสเตย์ บ้านม้งขุนช่างเคี่ยน https://www.facebook.com/profile.php?id=100063487270996',
},
{ name: 'วีรันดา เชียงใหม่ เดอะ ไฮ รีสอร์ท (Veranda Chiang Mai The High Resort)' , 
  img: "https://www.ninebooking.com/wp-content/uploads/2020/05/DSC05136-1.jpg",
  img2: "https://www.ninebooking.com/wp-content/uploads/2020/05/DSC04801-1.jpg",
  text_box:'วีรันดา ไฮ รีสอร์ท เชียงใหม่ คือสถานที่หรูหราที่ตั้งอยู่ในพื้นที่เงียบสงบและสวยงามของเชียงใหม่ รีสอร์ทนี้มีการออกแบบสมัยใหม่ที่มีเสน่ห์อันเป็นเอกลักษณ์ของไทย และมีสวนสวยที่งามเต็มไปด้วยความอุดมสมบูรณ์และมุมมองที่น่าทึ่งของภูมิภาครอบๆ' ,
  Location:'https://www.verandaresort.com/chiang-mai/?fbclid=IwAR25gu9NzRl_6eGXEctpWqH0nj3T3YUrWQ0vmFeiJVz4OfP82dp3F3euPIM' ,
  phone:'053 365 007',
  Price:'Deluxe 3,900 บาท/คืน Pool Suite 7,900 บาท/คืน Pool Villa 11,900 บาท/คืน',
  Facebook:'Veranda High Resort Chiang Mai – Mgallery  https://www.facebook.com/verandachiangmaithehighresort/?locale=th_TH',
},
{ name: 'Fernpresso at Khun Chang Khian' , 
  img: "https://10619-2.s.cdn12.com/rests/original/105_510203442.jpg",
  img2: "https://img.wongnai.com/p/400x0/2022/01/05/801330f113b345debfecb5f92298afd1.jpg",
  text_box:'' ,
  Location:' https://maps.app.goo.gl/wj5GzQuKoWup4uvk6' ,
  phone:' 062-302-5224',
  Price:' กาแฟคั่ว เริ่มที่ 80 บาท',
  Facebook:'Fernpresso at Khun Chang Khian',
},
{ name: 'กาแฟขุนช่างเคี่ยน formula hmong coffee' , 
  img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/249439215_3111570299166627_3390009346714461332_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFLIS3YnFIECSmnREWfWpqq5AFHhCEj3UvkAUeEISPdS5TnAX9R8zpetGVJk58u-BQa7d2gndTy6942tp6d3tdT&_nc_ohc=AQ0ORvdDiRQAX8bJQBm&_nc_ht=scontent.fcnx3-1.fna&cb_e2o_trans=t&oh=00_AfB_4KL793C96EFZNvYcB7APJgtyhnU_PXrXIb3Iw7gZJQ&oe=652317E9",
  text_box:'' ,
  img2: "https://lh3.googleusercontent.com/p/AF1QipPVIqV-ae7ulnE2P2MtfxGymOcXRzSh0q8vh3Zo=s1360-w1360-h1020",
  Location:' https://maps.app.goo.gl/LKNBzbFC3A1yvaHY8' ,
  phone:'083 322 9732',
  Price:'กาแฟคั่วเริ่มต้นที่ 340 บาท',
  Facebook:'กาแฟขุนช่างเคี่ยน formula hmong coffee https://www.facebook.com/Narong137.coffee/',
},
{ name: 'From Farm to Sip' , 
  img: "https://10619-2.s.cdn12.com/rests/original/102_528617076.jpg",
  img2: "https://10619-2.s.cdn12.com/rests/original/102_528617074.jpg",
  text_box:'' ,
  Location:'7 หมู่4 บ้านขุนช่างเคี่ยน ตำบลช้างเผือก อำเภอเมืองเชียงใหม่, Chiang Mai, Thailand, Chiang Mai https://maps.app.goo.gl/TARjQhxma5Mgz7KV9' ,
  phone:'084 612 8047',
  Price:'กาแฟคั่วเริ่มต้นที่ 380 บาท',
  Facebook:'กาแฟขุนช่างเคี่ยน - KCK Beans https://www.facebook.com/KhunChangKienCoffee',
},
])

const neartravel =ref([
{ name: 'View Suai Coffee' , 
  img: "https://img.restaurantguru.com/r6e2-Beautiful-Coffee-facade.jpg",
  text_box:'' ,
  Location:'53 ถนน ช้างเผือก Tambon Don Kaeo, Mueang Chiang Mai District, Chiang Mai 50300' ,
  place:'  https://maps.app.goo.gl/NdsWuW8hNQRTJMUE6 ',
  phone:' 081 026 7984',
},
{ name: 'Chong Wa Coffee Shop' , 
  img: "https://img.wongnai.com/p/1920x0/2020/12/12/44a622e01b80440daa1f3031a8fb3a22.jpg",
  text_box:'' ,
  Location:'https://maps.app.goo.gl/PFbjbaTgSo9dzv22A' ,
  phone:'081 180 4722',
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
