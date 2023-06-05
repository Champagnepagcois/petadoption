import { verify } from "jsonwebtoken";
import cookie, { serialize } from 'cookie';
export default function logoutHandler(req, res) {
  const { MyTokenName } = req.cookies;

  if (!MyTokenName) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    verify(MyTokenName, "secret");
    const serialized = serialize('MyTokenName',null,{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        sameSite:'strict',
        maxAge:0,
        path:'/'
    });
    res.setHeader('Set-Cookie',serialized);
    res.status(200).json('logout succesfully');
    cookie.serialize('MyTokenName',)
  } catch (error) {
    res.status(401).json('logout failure');

  }
}
