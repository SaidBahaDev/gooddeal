<template>
  <div class="container ad message my-5 px-5 py-5">
    <h1 class="pb-5 m-5">Mes messages</h1>
    <div v-if="role === 'buyer'">
        <div  v-for="get_key in get_keys" :key="get_key" class="row offset-1 col-10 offset-1 data-row px-3 py-4 m-5">
            <router-link :to="{ name: 'conversation', params: { adId: messagesMap[get_key][0]['ad']['id'] } }">
                <div class="row text-dark">
                    <div class="col-12 text-left font-weight-bold  mx-3 mb-2">
                    <span class= "px-2 ">{{messagesMap[get_key][0]['ad']['title']}}</span>
                    </div>
                    <div class="col-12 text-left mx-3 px-2 mb-2">
                        <span class="px-2  ">{{messagesMap[get_key][0]['message']}}</span>
                    </div>
                </div>
            </router-link >
        </div>
    </div>

    <div v-if="role === 'seller'">
        <div  v-for="get_key in get_keys" :key="get_key" class="row offset-1 col-10 offset-1 data-row px-3 py-4 m-5">
            <div class="row text-dark">
                <div class="col-12 text-left font-weight-bold  mx-3 mb-2">
                    <span class= "px-2 ">{{messagesMap[get_key]['ad']['title']}}</span>
                </div>

                <div v-for="user in messagesMap[get_key]['tabAd']" :key="user.id">
                    <router-link :to="{ name: 'conversation', params: { adId: messagesMap[get_key]['ad']['id'], buyerId: user.id } }">
                        <div   class="row offset-2 col-8 offset-2 data-row px-3 py-4 m-5">
                            <div>
                                <div class=" row col-12 text-left mx-3 px-2 mb-2">
                                    <span class="px-2  ">{{user.first_name}} {{user.last_name}}</span>
                                </div>
                            </div>
                        </div>
                    </router-link >
                </div>
            </div>
        </div>
    </div>

  </div>
</template>
<script>

import {http} from '../../services/http_service';

export default {
  data() {
    return {
      role:"",
      messagesMap: new Object(),
      errors: [],
      get_keys: [],
    };
  },
  methods : {
      getConversation(conversation) {
      this.$router.push(`conversation/${conversation}`);
    },
  },

  created() {
    const gd = JSON.parse(localStorage.getItem('gooddeal-token'));
    if (gd){
        this.sender_id = gd.user.id;
        this.role = gd.user.role;
    }
    http().get('/api/messages/')
    .then(response =>{
        let messages = response.data;  console.log( messages);

         // map qui contient les messages selon Ad et buyer
                this.messagesMap = {};

                // Calculer  les ad_id uniques
                let tabUniqueAd = []
                //calculer tous les ad_id meme repetes
                for(let i=0;i<messages.length; i++) {
                    tabUniqueAd.push(messages[i].ad_id);
                }
                // supprimer les ad_id redondants et ne laisser que unique ad_id
                tabUniqueAd = tabUniqueAd.filter((item, i, arr) => arr.indexOf(item) === i);

                /*******        Buyer          ************************************************************* */
                if(this.role == "buyer"){
                    for(let i=0;i<tabUniqueAd.length; i++) {   //   pour chaque ad
                    // chercher les messages pour chaque Ad et pour chaque buyer
                    let messageAd = messages.filter( message => {
                        return message.ad_id == tabUniqueAd[i] ;
                    });
                    let key = tabUniqueAd[i];
                    this.messagesMap[key] = messageAd;
                }

                    // getting all the keys of the map
                    this.get_keys = Object.keys(this.messagesMap);
                }
                console.log("unique AD : " );console.log(tabUniqueAd);

                /*******        Seller           ************************************************************* */
                if(this.role == "seller"){
                    for(let i=0;i<tabUniqueAd.length; i++) {   //   pour chaque ad
                        let tabBuyerAd=[];
                        let messagEchantillon={}
                        for(let j=0; j<messages.length; j++){
                            if(messages[j]['ad'].id == tabUniqueAd[i]){
                                let notFind = true;
                                for(let k=0; k<tabBuyerAd.length; k++){
                                    if(messages[j].buyer_id == tabBuyerAd[k].id){
                                        notFind = false;
                                        break;
                                    }
                                } // Fin  tabBuyerAd  k

                                if(notFind){
                                    tabBuyerAd.push(messages[j]["buyer"])
                                }
                                messagEchantillon = messages[j]['ad'];

                            }// fin if messages

                        }// fin for messages j

                        let key = tabUniqueAd[i];
                        this.messagesMap[key] = {"tabAd":tabBuyerAd, "ad":messagEchantillon};

                    } // fin for tabUniqueAd  i

                    // getting all the keys of the map
                    this.get_keys = Object.keys(this.messagesMap);
                }


                console.log(this.messagesMap);

        return response;
    });
  }
};
</script>
