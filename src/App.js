import './App.css';

export default function App(){
  const player = [
    {name :'Messi',
    pic : "https://therealchamps.com/wp-content/uploads/getty-images/2017/07/1475698105.jpeg",
    rating : '4.5 / 5' 
  },
    {name : 'CR7',
    pic : "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee886584fd1cd345/60db8718892a730f5883a347/68a712aa7ffd3da7d91c2fe1469bda58990f7ab7.jpg?auto=webp&format=pjpg&width=1080&quality=60",
    rating : 4.5 / 5
  
  },
    {name : 'Mappi',
     pic : "https://therealchamps.com/wp-content/uploads/getty-images/2017/07/1475698105.jpeg"
  },
    {name : 'Neymer Jr',
     pic : "https://images.ctfassets.net/3mv54pzvptwz/5eTv6hTyA1pqkFClYRn0qt/be626a573cbf1ee7e421b73f87ed6851/20221205_foto_GETTY_neymar_jr_jogo_brasil_x_coreia_copa_do_mundo__209_.jpg"
  }]

  return(
    <div>

      { /* Type 1 <UserName name = 'Messi'/>
      <UserName name = 'CR7'/>
      <UserName name = 'Neymar'/> */}

     {/*Type 2 {player.map((nm) => <UserName name= {nm}/>)} */}

     {player.map((nm) => <UserName name={nm.name} pic={nm.pic} />)}


    </div>
  );
}
// function UserName({name}){
//   return(
//     <div>
//     <img className="profile-img"
//      src="https://therealchamps.com/wp-content/uploads/getty-images/2017/07/1475698105.jpeg" alt= {name}></img>
//     <h1 className='userName'>Chaos,{name}!😎👌</h1>  {/* Interpolation syntax, Substitution , Template syntax*/}
     
//      </div>
//   );
// }

function UserName({name, pic, rating}){
  return(
    <div>
    <legend>Player</legend>
    <img className="profile-img"
     src={pic} alt= {name}></img>
    <h1 className='userName'>Chaos,{name}!😎👌</h1>  {/* Interpolation syntax, Substitution , Template syntax*/}
    
     
     </div>
  );
}