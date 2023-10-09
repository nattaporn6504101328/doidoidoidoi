<template>
<div class="row ">
  <div class="col" v-for="(n, i) in travellist" :key="n">
   
      <div class="card" >
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">
            กดดูรายละเอียดเพิ่มเติม
            <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
          </RouterLink>
        </div>
      </div>
  </div>
</div>


</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const travellist=ref([
  {name: 'ดอยหลวงเชียงดาว', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-luang-chiang-dao-1536x1024.jpg", quantity: 0 ,
    text_box:'///'
    }, 
    
  {name:'ดอยแม่โถ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-mae-tho-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },
  
  {name:'ดอยอ่างขาง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-ang-khang-1536x1024.png", quantity: 0 ,
    text_box:' '
    },

  {name:'ดอยอินทนนท์', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-inthanon-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

  {name:'ดอยค้ำฟ้า', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-kamfha-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

  {name:'สันป่าเกี๊ยะ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/sanpakae-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

  {name:'ป่าปงเปียง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/Pa-Pong-Piang.png", quantity: 0 ,
    text_box:' '
    },

    {name:'ดอยแม่ตะมาน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-meataman-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

    {name:'ดอยม่อนแจ่ม', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-mon-cham-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

    {name:'ดอยม่อนจอง', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monjong-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

    {name:'ดอยม่อนล้าน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monlan-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

    {name:'ดอยม่อนเงาะ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-monngo.jpg", quantity: 0 ,
    text_box:' '
    },

    {name:'ดอยผ้าห่มปก', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-phahompok-1536x1024.jpg", quantity: 0 ,
    text_box:''
    },

    {name:'ดอยปุย', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-pui-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

    {name:'ดอยสุเทพ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-suthep-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },

    {name:'ขุนช่างเคี่ยน', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/khun-chang-kian-1536x1024.jpg", quantity: 0 ,
    text_box:' '
    },
    {name:'ดอยไม่มีชื่อ', img:"https://www.reviewchiangmai.com/wp-content/uploads/2022/06/doi-noname-1536x1027.jpg", quantity: 0 ,
    text_box:' '
    },
    
])

</script>

<style>

.card-img-top{
height: 100%;
padding: 10px;

}
.row{
justify-content: center;
align-items: center;
gap: 10px;
text-align: center
}

.card{
  gap: 10px;
  width: 250px;
}

</style>