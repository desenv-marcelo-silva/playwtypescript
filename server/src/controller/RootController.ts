import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>
            <p>You are logged in</p>
            <a href="/auth/logout">Logout</a>
          </div>
        </div>
      `);
    } else {
      res.send(`
      <div>
        <div>
          <p>You are not logged in</p>
          <a href="/auth/login">Login</a>
        </div>
      </div>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('<h1>Yeap!! You are in protected area here!!</h1>');
  }
}
