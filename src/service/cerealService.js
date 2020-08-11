export const getCereal = () => {
  return fetch(`http:localhost:27017/backend42`)
    .then(res => res.json())
    .then(({results} ) => 
      results.map(result => ({
        name: result.name,
        thoughts: result.thoughts,
        scale: result.scale,
        tags: tags.tags
      }))
    );
};

export const postCereal = () => {
  return fetch(`http:localhost:27017/backend42`, {
    method: 'POST',
    body: JSON.stringify(data)
  })
};
