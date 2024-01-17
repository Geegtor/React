import { request } from '../api';

export function makePutRequest(payload, url) {
  return request(
    {
      method: 'put',
      url,
      data: JSON.stringify(payload),
    },
  );
}

export function makeGetRequest(url) {
  return request(
    {
      method: 'get',
      url,
    },
  );
}
