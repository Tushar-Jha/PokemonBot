const {Client,MessageEmbed} = require('discord.js');
const axios=require('axios');
const client = new Client();
const Pokemon = require('pokemon.js');
const Data=require('./typeData');
const _=require('underscore');
const { union } = require('underscore');

//---Functions to get Pokemon data--
async function getPokemon1(pokemon){  
  return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res=>{return res.data;})
      .catch(err=>console.log(err));
}
async function getPokemon2(pokemon){
  return axios
      .get(`https://pokeapi.glitch.me/v1/pokemon/${pokemon}`)
      .then(res=>{return res.data[0].description})
      .catch(err=>console.log(err));
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.content.toLocaleLowerCase().startsWith('!poke'||'!pokemon')) {
        var pokemon=msg.content.split(' ')[1];

        try {
          const pokeData=await getPokemon1(pokemon);
          const pokeData1= await Pokemon.getPokemon(pokemon);
   
          const {stats,base_experience}=pokeData;
          const {sprites,height,id,name,weight,types}=pokeData1;
          const pokeDescription=await getPokemon2(id);
  
          //--Embed data--
          const embed=new MessageEmbed();
          if(types[0].name in Data){
            var Color=Data[types[0].name].hex;
          }
          embed.setColor(Color);
          embed.setTitle(`#${id} ${name} `);
          embed.setDescription(pokeDescription);


          //--TYPES--
          var Types=" ";
          types.forEach((type)=>{
            if(type.name in Data){
              var Emoji=Data[type.name].emoji;
            }
            Types+=`${Emoji} ${type.name} `+Array(6).fill('\xa0').join('')
          });
          embed.addField("Types",Types);


          embed.setThumbnail(`${sprites.front_default}`);
          stats.forEach(stat=>{embed.addField(stat.stat.name,stat.base_stat,true);})
          embed.addField('Weight',`${Number(weight)/10} kg`,true);
          embed.addField('Height',`${Number(height)/10} m`,true);
          embed.addField('Base Experience',base_experience,true);

          
          //--STRENGTHS--
          var strengthArray=[];
          types.forEach((type)=>{
            if(type.name in Data){
              strengthArray.push(Data[type.name].strengths);
            }
          })
          var unionStrength=_.union(strengthArray[0],strengthArray[1]);
          var Strengths=" ";
          for(let i=0;i<unionStrength.length;i++){
            Strengths+=unionStrength[i]+Array(6).fill('\xa0').join(''); 
          }
          embed.addField('Strong Against',Strengths,false);

          //--WEAKNESSES--
          var weaknessArray=[];
          types.forEach((type)=>{
            if(type.name in Data){
              weaknessArray.push(Data[type.name].weaknesses);
            }
          })
          var unionWeakness=_.union(weaknessArray[0],weaknessArray[1]);
          var weaknesses=" ";
          for(let i=0;i<unionWeakness.length;i++){
            weaknesses+=unionWeakness[i]+Array(6).fill('\xa0').join(''); 
          }
          embed.addField('Weak Against',weaknesses,false);

  
  
          msg.channel.send(embed);
        }
         catch (err) {
          msg.reply("Incorrect pokemon name/index (NOTE: if pokemon name is not working,use pokemon index.)")
        }
  }
});

client.login(process.env.token);