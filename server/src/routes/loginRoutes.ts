import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>
          <p>You are logged in</p>
          <a href="/logout">Logout</a>
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === '123') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('<h1>Invald e-mail or password.</h1>');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = null;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('<h1>Yeap!! You are in protected area here!!</h1>');
});

export { router };
