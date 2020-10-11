class Fight {
  getRandomDamage = async () => {
    const responce = await fetch('https://reactmarathon-api.netlify.app/api/fight?player1id=25&attackId=1&player2id=1');
    const body = await responce.json();
    //console.log(body);
    return body;
  }

  randomKicks = async () => {
    const randomDamage = await this.getRandomDamage();
    //console.log(randomDamage);
    
    return randomDamage.kick;
  }
}

export default Fight;
