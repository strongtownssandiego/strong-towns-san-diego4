export default {
  routes: [
    {
      method: "POST",
      path: "/create-user",
      handler: "create-user.create",
      config: {
        auth: false, // Using API token, not user JWT
        policies: [],
      },
    },
  ],
};
