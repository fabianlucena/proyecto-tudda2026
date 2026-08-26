import { getDependency } from '../dependency.js';
import checkRoleMiddleware from '../middlewares/check_role_middleware.js';

export function configureUserRouter(router) {
  const userService = getDependency('userService');

  router.get('/users', checkRoleMiddleware(['admin']),  async (req, res) => {
    const users = await userService.getList();
    res.json(users.map(user => ({
      username: user.username,
      displayName: user.displayName,
      email: user.email,
      role: user.role,
    })));
  });

  router.post('/users', checkRoleMiddleware(['admin']),  async (req, res) => {
    const user = req.body;
    const newUser = await userService.add(user);
    res.json(newUser);
  });
}