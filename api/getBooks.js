import axios from 'axios';


export const getIds = async () => {
  return await axios.get(' https://the-one-api.dev/v2/book').then((res) => {
      const ids =  res.data.docs.map(obj => {
        return {
          params : {
            id : obj._id
          }
        }
      })
      return ids;
    }).catch((err) => {
      console.log(err);
    })
}

export const getTitles = async (params) => {
  return await axios.get(' https://the-one-api.dev/v2/book/' + params.id).then((res) => {
      const books =  res.data.docs.map(obj => {
        return {
            title: obj.name
        }
      })
      return books;
    }).catch((err) => {
      console.log(err);
    })
}

export const getChapters = async (params) => {
  return await axios.get('https://the-one-api.dev/v2/book/' + params.id + '/chapter').then((res) => {
    const chapters = res.data.docs.map(obj => {
      return {
        chapter: obj.chapterName
      }
    })
    return chapters;
  }).catch((err) => {
    console.log(err);
  })
}
