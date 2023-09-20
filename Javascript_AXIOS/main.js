

// GET REQUEST
function getTodos(){
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
        params:{
            _limit:5
        }
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}


// POST REQUEST
function addTodo(){
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'New Todo',
            completed: false
        }
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}


// PUT/PATCH REQUEST
function updateTodo(){
    axios({
        method: 'patch',
        url:'https://jsonplaceholder.typicode.com/todos/1',
        data: {
            title: 'Updated Todo',
            completed: true
        }
    }) 
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}


// DELETE REQUEST
function removeTodo(){
    axios({
        method: 'delete',
        url:'https://jsonplaceholder.typicode.com/todos/1',
    }) 
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}


// CUSTOM HEADERS
function customHeaders(){
    const config = {
        headers: {
            'Content-Type' : 'application/json',
            Authorization : 'sometoken'
        }
    }

    axios.post(
     'https://jsonplaceholder.typicode.com/todos', 
     {
        title: 'New Todo',
        completed: false
    }, config
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err))
}


// TRANSFORMING REQUESTS AND RESPONSES







// INTERCEPTING REQUEST AND RESPONSES -- makikita mo yung nangyayari intercept lang
axios.interceptors.request.use(config =>{
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);

    return config
}, error => {
    return Promise.reject(error)
});


// SIMULTANEOUS DATA
function getData(){
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(axios.spread((todos,posts) => showOutput(posts)))
    .catch(err => console.error(err))
}




  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }



  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document.getElementById('transform').addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);