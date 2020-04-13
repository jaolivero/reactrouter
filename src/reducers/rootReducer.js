const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle laid and Egg",
      body: "lorem  ipsum, dolor sit amer const",
    },
    {
      id: "2",
      title: "Charmander laid an Egg",
      body: "lorem  ipsum, dolor sit amer const",
    },
    {
      id: "1",
      title: "Bulbsaur was never picked",
      body: "lorem  ipsum, dolor sit amer const",
    },
  ],
};
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
