<style lang="scss">

    .messages {
        background: url(./images/paper.png);
        background-position: left top;
        background-repeat: repeat;
        border-radius: 5px;
        padding: 1em;
        height: 50vh;
        overflow: auto;
    }

    .messageNormal {
        background-color: white;
        color: black;
        padding: 0.3em;
        display: flex;
        flex-direction: column;
        margin: 2em;
        margin-right: auto;
        border-radius: 0.2em 1em 1em 1em;
        width: 40%;
    }

    .messageColor {
        background-color: #BEFFD6;
        color: black;
        padding: 0.3em;
        display: flex;
        flex-direction: column;
        margin: 2em;
        border-radius: 1em 0.2em 1em 1em;
        margin-left: auto;
        width: 60%;
    }

    .date_message{
        font-size: x-small;
        color: gray;
        text-align: right;
        margin-right: 1em;
    }

    .text_message {
         margin-left: 1.5em;
    }

    form {
        display: flex;
        margin-top: 1em;
        justify-content: space-between;
    }

    input {
        padding: 0.5em;
        margin-right: 10px;
    }

    .mon_text_message {
        width: 100%;
    }
    .nick_name{
        color:#c4b8f9; //#aa779a;
    }

    .DivToScroll{
        background-color: #F5F5F5;
        border: 1px solid #DDDDDD;
        border-radius: 4px 0 4px 0;
        color: #3B3C3E;
        font-size: 12px;
        font-weight: bold;
        left: -1px;
        padding: 10px 7px 5px;
    }

    .DivWithScroll{
        height:60vh;
        overflow:scroll;
        overflow-x:hidden;
    }

    </style>


<template>
    <div class=" container ad p-5  h-50 message1 ">
        <h2 class="p-5">{{title}}</h2>
        <h5 class="nick_name">{{buyerName}}</h5>

        <div id="container"  class="DivToScroll DivWithScroll chat" >
            <div v-for="message in messagesMap" :key="message.id"  v-bind:class = " {'messageColor' : message.sender_id == sender_id, 'messageNormal' : message.sender_id != sender_id}">
                <span v-if= "message.sender_id != sender_id" class="nick_name text_message">{{buyerName}}</span>
                <span class="text_message">{{message.message}}</span>
                <span class="date_message">{{message.created_at.substring(11, 16)}}</span>
            </div>
        </div>

        <div class="user-inputs">
            <form action="">
                <input v-model="mySendedMessage" type="text" class="mon_text_message" name="text_message" placeholder="Votre message !">
                <input @click="envoiMessage" type="button"  value="Envoyer" class="col-3 btn btn-primary btn-block text-uppercase">
            </form>
        </div>

    </div>



</template>
<script>

import axios from "axios";
import {http} from '../../services/http_service';

export default {
  props : ['adId', 'buyerId'],
  data() {
    return {
    ad: {},
     title:'',
     buyerName:'',
      messagesMap: [],
      errors:{},
      sender_id: 0 ,
      mySendedMessage:'',
      receivedMessage:'',
    };
  },
  methods: {

      getAd(){
          axios
            .get(`/api/ads/${this.adId}`)
            .then(response => {
                this.ad = response.data;
                this.title = this.ad.title
               // this.buyerName = this.messagesMap[0]['buyer']['first_name']+" "+this.messagesMap[0]['buyer']['last_name'];
            })
            .catch(e => {
                this.errors.push(e);
            });
      },

    envoiMessage: function(){
         http()
        .post('/api/messages/',{'message' : this.mySendedMessage, 'ad_id':this.adId , 'buyer_id':this.buyerId } )
        .then(response =>{
          this.errors = {};
          this.receivedMessage = response.data;
          this.messagesMap.push(this.receivedMessage);
          this.mySendedMessage = '';
        })
        .catch(error => {
          this.errors = error.response.data.error;
        });

    },  //  Fin afficherMessages(lesMessages)

  },

  created() {
      const gd = JSON.parse(localStorage.getItem('gooddeal-token'));
      if (gd) {
          this.sender_id = gd.user.id;
          this.role = gd.user.role;
      }
      let address = '/api/messages/'
      if(this.role =="seller" ){
          address = '/api/messages/'+this.buyerId
      }

     http().get(address)
    .then(response =>{
        let messages = response.data;

         // map qui contient les messages selon Ad
        this.messagesMap = [];
        // chercher les messages pour chaque Ad et pour chaque buyer
        this.messagesMap = messages.filter( message => {
            return message.ad_id == this.adId
        });

        if(this.messagesMap[0]){
            this.title = this.messagesMap[0]['ad']['title']
            this.buyerName = this.messagesMap[0]['buyer']['first_name']+" "+this.messagesMap[0]['buyer']['last_name']
            this.buyerId = this.messagesMap[0].buyer_id;
        }
        else{
             this.getAd();
        }



        return response;
    });
  },

  updated() {
      let container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
  },
};
</script>
