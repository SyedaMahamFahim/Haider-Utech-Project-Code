async function f() {

    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let user = await response.json();
      console.log(user)
    } catch(err) {
      // catches errors both in fetch and response.json
      alert(err);
    }
  }
  f()
