import React, { useEffect} from 'react';

import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import useState from 'react-usestateref'
import '../css/one.css'
import '../static/video.mp4'
import videos from './video.mp4'
import { MENU_ROUTE } from '../utils/consts';
import $ from 'jquery'
import { Order_getAllItem } from '../http/deviceAPI';
import jwt_decode from "jwt-decode";
import OrderDevice from './OrdersItem';
import OrderDevice1 from './OrdersItem1';
const Order  = observer( ()=>{
  const [orders,setorders,setordersRef] = useState()


  $('.menu').removeClass('fill_tsd_activ')
  $('.present').removeClass('fill_tsd_activ')
  $('.basket').removeClass('fill_tsd_activ')

 $('.delivery').addClass('fill_tsd_activ')
  const handleClick = e => {

      $('.otprav_1').removeClass('category_item_activ')
      $('.otprav_2').removeClass('category_item_activ')
      $('.otprav_3').removeClass('category_item_activ')

      const link = e.target.getAttribute('link')
      $(`.${link}`).addClass('category_item_activ')
    };

    const handleClick_1 = e => {

      $('.poluch_1').removeClass('category_item_activ')
      $('.poluch_2').removeClass('category_item_activ')


      const link = e.target.getAttribute('link')
      $(`.${link}`).addClass('category_item_activ')
    };

    const handleClick_2 = e => {

      $('.otkr_1').removeClass('category_item_activ')
      $('.otkr_2').removeClass('category_item_activ')


      const link = e.target.getAttribute('link')
      $(`.${link}`).addClass('category_item_activ')
    };
    const getOrders = async() => {
      const storedToken = localStorage.getItem('token');
      const userId = jwt_decode(storedToken)
    const orders = await Order_getAllItem(userId.id)
    setorders(orders.data)
    console.log(orders.data)
    }
    useEffect(() => {
getOrders()
    }, [])
    
   

    const navigate = useNavigate()
    return (
      <div class='bg'> 
        
      <div class=' bg-tsd'>

        <div class='del_cont_1'>
        <div class='del_text_1'>
        Ваши заказы
      </div>
      {setordersRef?.current?.map(order =>
       
               
           
      

 



   <div class='order_item' key={order.id}>
      
    <div class='order_item_text'>
    <div class='order_item_text_1 bord_bot' >
  Заказ номер : {order.id}
  
</div>
    </div>
    <div class='d-flex_-'>

<OrderDevice1 order={order}  />
<div class='df_center_ pr-35 pr_0'>
<div class='img_item_name ml-35'>
Открытка
</div>
<img class='img_item ml-35' src='https://avatars.mds.yandex.net/i?id=67f31b7c62f41d5a1f42d7ceaeea39267da91416-9246177-images-thumbs&n=13'/>


<div class='df_  bottom_price'>
<div class='price_'>
  В подарок
</div>

<svg version="1.1" id="Capa_1" class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div></div>
{/* <div class='df_end_'>


<div class='d-flex'>

<div class='df_center_'>
<div class='img_item_name ml-35'>
Трайфл Красн ...
</div>
<img class='img_item ml-35' src='https://downloader.disk.yandex.ru/preview/d803d33a0ea23c94fcc22d7e654080e42aa8f8b371c4929d7091b097a3d03f5b/65006b59/MkPZPnMTvafNbM6PCVUq40tIcQnvdwLF26jkMZhZPsFSApyNAZpOzJuO5-6KJ4vQd3lmwQ8M2tAJJs29P-lkfQ%3D%3D?uid=0&filename=DSC_6074.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1583x784'/>


<div class='df_  bottom_price'>
<div class='price_'>
  3400Р
</div>

<svg version="1.1" id="Capa_1"  class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div>

<div class='df_center_'>
<div class='img_item_name ml-35'>
Набор чизкейков
</div>
<img class='img_item ml-35' src='https://downloader.disk.yandex.ru/preview/d803d33a0ea23c94fcc22d7e654080e42aa8f8b371c4929d7091b097a3d03f5b/65006b59/MkPZPnMTvafNbM6PCVUq40tIcQnvdwLF26jkMZhZPsFSApyNAZpOzJuO5-6KJ4vQd3lmwQ8M2tAJJs29P-lkfQ%3D%3D?uid=0&filename=DSC_6074.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1583x784'/>


<div class='df_  bottom_price'>
<div class='price_'>
  3400Р
</div>

<svg version="1.1" id="Capa_1" class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div>
</div>



<div class='df_center_ pr-35'>
<div class='img_item_name ml-35'>
Открытка
</div>
<img class='img_item ml-35' src='https://downloader.disk.yandex.ru/preview/d803d33a0ea23c94fcc22d7e654080e42aa8f8b371c4929d7091b097a3d03f5b/65006b59/MkPZPnMTvafNbM6PCVUq40tIcQnvdwLF26jkMZhZPsFSApyNAZpOzJuO5-6KJ4vQd3lmwQ8M2tAJJs29P-lkfQ%3D%3D?uid=0&filename=DSC_6074.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1583x784'/>


<div class='df_  bottom_price'>
<div class='price_'>
  В подарок
</div>

<svg version="1.1" id="Capa_1" class='svg_w' width='14px' height='14px' xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 45.583 45.583" ><g><g><path d="M22.793,12.196c-3.361,0-6.078-2.729-6.078-6.099C16.715,2.73,19.432,0,22.793,0c3.353,0,6.073,2.729,6.073,6.097 C28.866,9.466,26.145,12.196,22.793,12.196z"/><path d="M22.794,28.889c-3.361,0-6.079-2.729-6.079-6.099c0-3.366,2.717-6.099,6.078-6.099c3.353,0,6.073,2.732,6.075,6.099 C28.866,26.162,26.144,28.889,22.794,28.889z"/><path d="M22.794,45.583c-3.361,0-6.079-2.729-6.079-6.099s2.717-6.098,6.078-6.098c3.353-0.002,6.073,2.729,6.073,6.098 S26.144,45.583,22.794,45.583z"/></g></g></svg>

</div>
</div>


</div> */}

<div class='order_item_text bg_trans pb-5 pt-0'>
    <div class='order_item_text_1 '>
 
</div>
    </div>
    <div class='order_item_text_2 pd_t_3'>
  Статус : {order.status}
</div>
<div class='order_item_text_2  pb-10'>
  Адрес : {order.address}
</div>



 </div>
  )
}
        </div>

      </div>
        </div>
    );
});

export default Order;
