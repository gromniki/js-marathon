class Fight {
  getRandomDamage = async () => {
    const responce = await fetch('https://reactmarathon-api.netlify.app/api/fight?player1id=25&attackId=1&player2id=1');
    return await responce.json();
  }
}

export default Fight;
