export const getPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json();
    return data
}

export const getDetailsPage = async (id) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  };