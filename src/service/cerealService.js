export const getCereal = () => {
  return fetch(`http://localhost:7890/api/v1/cereal`)
    .then(res => res.json())
};

export const postCereal = () => {
  return fetch(`http://localhost:7890/api/v1/cereal`, {
    method: 'POST',
    body: JSON.stringify(data)
  })
};
