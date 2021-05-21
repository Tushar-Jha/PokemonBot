const Data={
    bug: { 
      emoji: '🐞',
      hex: '#A8B820',
      weaknesses:["Fire","Fighting","Poison","Flying","Ghost","Steel","Fairy"],
      strengths:["Grass","Psychic","Dark"]
    },
    dark: { 
      emoji:'🌙',
      hex:'#000000',
      weaknesses:["Fighting","Dark","Fairy"],
      strengths:["Psychic","Ghost"]
    },
    dragon:{ 
      emoji:'🐲',
      hex:'#7038F8',
      weaknesses:["Steel","Fairy"],
      strengths:["Dragon"]
    },
    electric: { 
      emoji:'⚡',
      hex:'#FAB536',
      weaknesses:["Electric","Grass","Dragon","Ground"],
      strengths:["Water","Flying"]
    },
    fairy: { 
      emoji:'✨', 
      hex:'#EE99AC',
      weaknesses:["Fire","Poison","Steel"],
      strengths:["Fighting","Dragon","Dark"]
    },
    fighting: { 
      emoji:'🥊', 
      hex:'#C03028',
      weaknesses:["Poison","Flying","Psychic","Bug","Fairy","Ghost"],
      strengths:["Fighting","Bug","Grass"] 
    },
    fire: { 
      emoji:'🔥', 
      hex:'#F08030',
      weaknesses:["Fire","Water","Rock","Dragon"],
      strengths:["Grass","Ice","Bug","Steel"] 
    },
    flying: { 
      emoji:'🕊',
      hex:'#A890F0',
      weaknesses:["Electric","Rock","Steel"],
      strengths:["Grass","Fighting","Bug"]
    },
    ghost: { 
      emoji:'👻',
      hex:'#705898',
      weaknesses:["Dark","Normal"],
      strengths:["Psychic","Ghost"]
    },
    grass: { 
      emoji:'🌿', 
      hex:'#78C850',
      weaknesses:["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"],
      strengths:["Water","Ground","Rock"] 
    },
    ground: { 
      emoji:'🏔',
      hex:'#927D44',
      weaknesses:["Grass","Bug","Flying"],
      strengths:["Fire","Electric","Poison","Rock","Steel"]
    },
    ice: { 
      emoji:'❄️',
      hex:'#98D8D8',
      weaknesses:["Fire","Water","Ice","Steel"],
      strengths:["Grass","Ground","Flying","Dragon"]
    },
    normal: { 
      emoji:'🔶', 
      hex:'#6D6D4E',
      weaknesses:["Rock","Steel","Ghost"],
      strengths:[" "]
    },
    poison : { 
      emoji:'☠️',
      hex:'#A040A0',
      weaknesses:["Poison","Ground","Rock","Ghost","Steel"],
      strengths:["Grass","Fairy"]
    },
    psychic: { 
      emoji:'🧠', 
      hex:'#F85888',
      weaknesses:["Psychic","Steel","Dark"],
      strengths:["Fighting","Poison"] 
    },
    rock: { 
      emoji:'🗿', 
      hex:'#786824',
      weaknesses:["Fighting","Ground","Steel"],
      strengths:["Fire","Ice","Flying","Bug"]
    },
    steel : { 
      emoji:'⚙️', 
      hex:'#B8B8D0',
      weaknesses:["Fire","Water","Electric","Steel"],
      strengths:["Ice","Rock","Fairy"]
    },
    water : {
      emoji:'💧',
      hex:'#6890F0',
      weaknesses:["Water","Grass","Dragon"],
      strengths:["Fire","Ground","Rock"]
    }
  }

  module.exports=Data;