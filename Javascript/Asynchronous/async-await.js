function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data fetched"), 1000);
    });
  }
  
  async function showData() {
    const result = await fetchData();
    console.log(result); // Data fetched
  }
  
  showData();
  