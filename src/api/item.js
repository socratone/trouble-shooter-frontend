const url = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const getHomeItems = async () => {
  try {
    const res = await fetch(url + '/api/item/home');
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 

const getTroublesItems = async () => {
  try {
    const res = await fetch(url + '/api/item/troubles');
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 

const getBeginnerItems = async () => {
  try {
    const res = await fetch(url + '/api/item/beginner');
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 
const getAlgorithmItems = async () => {
  try {
    const res = await fetch(url + '/api/item/algorithm');
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 

const getItem = async id => {
  try {
    const res = await fetch(url + '/api/item/' + id);
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 

const postItem = async item => {
  const headers = new Headers();
  const token = localStorage.getItem('token');
  headers.append('x-auth-token', token);
  headers.append('Content-Type', 'application/json');
  const page = JSON.stringify(item.page)

  try {
    const raw = JSON.stringify({ 
      title: item.title,
      category: item.category, 
      page
    });

    const res = await fetch(url + '/api/item/', {
      method: 'POST',
      headers,
      body: raw,
      redirect: 'follow'
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 

const putItem = async (item, id) => {
  const headers = new Headers();
  const token = localStorage.getItem('token');
  headers.append('x-auth-token', token);
  headers.append('Content-Type', 'application/json');
  const page = JSON.stringify(item.page)

  try {
    const raw = JSON.stringify({ 
      title: item.title,
      category: item.category, 
      page
    });

    const res = await fetch(url + '/api/item/' + id, {
      method: 'PUT',
      headers,
      body: raw,
      redirect: 'follow'
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
}; 

const deleteItem = async (id, password) => {
  const headers = new Headers();
  const token = localStorage.getItem('token');
  headers.append('x-auth-token', token);
  headers.append('Content-Type', 'application/json');

  try {
    const raw = JSON.stringify({ 
      password
    });

    const res = await fetch(url + '/api/item/' + id, {
      method: 'DELETE',
      headers,
      body: raw,
      redirect: 'follow'
    });
  
    const result = await res.json();
    return result;
  } catch (error) {
    return { error };
  }
};

export {
  getHomeItems,
  getTroublesItems,
  getBeginnerItems,
  getAlgorithmItems,
  getItem,
  postItem,
  putItem,
  deleteItem
};
