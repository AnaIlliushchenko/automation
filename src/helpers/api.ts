import { APIRequestContext, expect } from '@playwright/test';

const endpoints = {
  me: '/api/v1/dispatchers/me',
  trucks: '/api/v1/trucks?page=1&page_size=10&archived=false',
  facilities: '/api/v1/facilities?page=1&page_size=10'
} as const;

export class API {
  constructor(readonly request: APIRequestContext) {}

  async get(endpointName: keyof typeof endpoints) {
    const res = await this.request.get(endpoints[endpointName]);
    await expect(res).toBeOK();
    return res.json(); 
  }
}
