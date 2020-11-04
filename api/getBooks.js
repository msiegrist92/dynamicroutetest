import axios from 'axios';

export const getBooks = async () => {
  await axios.get(' https://the-one-api.dev/v2/book').then((res) => {
    const books =  res.data.docs.map(obj => {
      return {
        params : {
          books : obj.name.replace(/\s/g, '').toLowerCase()
        }
      }
    })
    console.log(books);
    return books;
  }).catch((err) => {
    console.log(err);
  })
}
