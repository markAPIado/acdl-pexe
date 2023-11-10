import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    client_id: 'yyRmol1lp-VRtTYEcpNy8o0Aty4Q_mAl3EuZCDZszAU'
  }
});

export { CanceledError };
