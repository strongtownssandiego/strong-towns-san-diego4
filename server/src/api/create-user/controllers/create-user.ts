// src/api/create-user/controllers/create-user.ts
import { factories } from "@strapi/strapi";

export default factories.createCoreController("plugin::users-permissions.user", ({ strapi }) => ({
  async create(ctx) {
    try {
      const { email, username, password } = ctx.request.body;

      if (!email || !username || !password) {
        return ctx.badRequest("Missing required fields");
      }

      const newUser = await strapi
        .plugin("users-permissions")
        .service("user")
        .add({
          email,
          username,
          password,
        });

      await strapi
        .plugin("users-permissions")
        .service("user")
        .sendConfirmationEmail(newUser);

      return (ctx.body = {
        user: newUser,
        message: "Registration successful. Please check your email to verify your account.",
      });
    } catch (err) {
      strapi.log.error("Error in /create-user:", err);
      ctx.internalServerError("Unable to create user");
    }
  },
}));
