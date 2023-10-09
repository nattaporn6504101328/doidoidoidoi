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
        <p>ราคา :{{ stay.Price }}</p>
        <p>Facebook : {{ stay.Facebook }}</p>
        <a :href="stay.link">ที่พัก</a> 
      </div>
    </div>
  </div>
  
</template>


<script setup>

import { ref } from 'vue';

const travellist=ref([
{name: 'ดอยแม่โถ', 
img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-mae-tho-1536x1024.jpg",
text_box:'มีวิวของภูเขาที่สวยงาม เขียวขจี พร้อมสายหมอกบาง มีจุดชมวิวภูเขาและทุ่งหญ้าขึ้นชื่อ ได้รับการขนานนามว่า ทุ่งหญ้าสะวันนาเมืองไทย ด้วยวิวสีเขียวของภูเขาที่เรียงรายสลับซับซ้อนสบายตา มีฝูงวัวของชาวบ้านมาประกอบฉาก ทำให้ภาพของทุ่งหญ้ามีทิวทัศน์คล้ายบรรยากาศในต่างประเทศ ดอยแม่โถตั้งอยู่ในอำเภอฮอด จังหวัดเชียงใหม่ ใช้ถนนเส้นอำเภอฮอด-อำเภอแม่สะเรียง เมื่อถึงบ้านกองลอยให้เลี้ยวขวาเข้าไปต่ออีกประมาณ 14 กิโลเมตร จะถึงหมู่บ้านแม่โถ เส้นทางเป็นถนนลาดยางตลอดทั้งสาย ไม่ชันมาก รถทุกชนิดขึ้นได้ แต่ถนนบางไม่ค่อยดีนะ เป็นหลุมบ่ออยู่หลายจุดทำให้ต้องขับรถด้วยความระมัดระวังกันสักนิด มาเที่ยวช่วงใกล่สู่ฤดูหนาว ภูเขาจะไม่เขียวมากเหมือนฤดูฝน'
}])

const stayy=ref([
{name:'แม่โถแคมป์ปิ้ง ' , 
  img2: "https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/386771182_769518651851740_5414572174399457773_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGGp4GghvVjDyoMKDuNkweB8yXGZFpc3g7zJcZkWlzeDqP6g8LHliUiLrOsUl0tGQBCeV79SlztPyfs2JHCbwF2&_nc_ohc=qUK5vjPQztUAX8YG_Wl&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfDXJgIjIT-Q7s-oMv9rmbGvfqDbTELmDHUPWwE7CDZwWA&oe=65280EA1",
  img:"https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/387155563_769518608518411_7930152007356146963_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeE7KH-z1FU1FN8VrF4STPQTncDWh0_S2aGdwNaHT9LZob_DFdE_UL2tlIG2ivWeUxfdfCKO68vfixQCKkgj8t4x&_nc_ohc=8T-ShxsBFCYAX-6qhyL&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfAmc6lQ4iWpA9Sa58OBnz3aN7dZs0rn60EfWQdh0ltfig&oe=6527B058",
  text_box:'แม่โถแคมป์ปิ้ง เป็นที่พักเพียงแห่งเดียวในดอยแม่โถ เป็นที่พักในรูปแบบเต้นท์  โลเคชั่นดีมาก ตั้งอยู่บนภูเขามองเห็นวิวได้ 360 องศา แต่เส้นทางจากปากทางถนนใหญ่มายังที่พักจะแคบนิดนึงและเป็นทางดิน ถ้าช่วงฝนตกถนนลื่นรถเก๋ง หรือรถโหลดต่ำไม่แนะนำให้ขึ้นมาค่ะ ใช้บริการรถของที่พักมารับส่งจะดีกว่า '  ,
  Location:' https://goo.gl/maps/gio21befGYXF8j9y8',
  phone:' 093 614 4803',
  Price:'เต้นท์มีทั้งหมด 6 หลัง ราคาหลังละ 2290 บาท พักได้ 2 ท่าน ราคารวมรถนำเที่ยวทุ่งหญ้าสะวันนา และอาหารเช้าข้าวต้ม  ราคาจะแตกต่างกันตามฤดูที่เข้าพัก',
  link: 'https://www.facebook.com/maethocamping/',
  Facebook:'แม่โถแคมป์ปิ้ง Maetho Camping',
  place:' https://goo.gl/maps/gio21befGYXF8j9y8',
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
