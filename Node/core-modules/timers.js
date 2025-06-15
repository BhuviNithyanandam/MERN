setTimeout(() => {
    console.log('This runs after 2 seconds');
  }, 2000);
  
  let count = 0;
  const interval = setInterval(() => {
    console.log(`Running... ${++count}`);
    if (count === 3) clearInterval(interval);
  }, 1000);
  