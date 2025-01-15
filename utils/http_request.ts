export default class HttpRequest {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async Request(
    method: string,
    endpoint: string,
    body?: any
  ): Promise<any> {
    try {
      const response = await fetch(`http://${this.baseUrl}${endpoint}`, {
        method,
        body,
      });
      if (!response.ok) {
        throw new Error(`Response not ok: ${response.status}`);
      }
      return response.json();
    } catch (e) {
      console.error(`Couldn't process request: ${e}`);
      throw e;
    }
  }

  public async Get(endpoint: string): Promise<any> {
    return this.Request("GET", endpoint);
  }

  public async Post(endpoint: string, body: any): Promise<any> {
    return this.Request("POST", endpoint, body);
  }

  public async Put(endpoint: string, body: any): Promise<any> {
    return this.Request("PUT", endpoint, body);
  }

  public async Delete(endpoint: string) {
    return this.Request("DELETE", endpoint);
  }
}
