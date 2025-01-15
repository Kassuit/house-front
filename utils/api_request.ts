import HttpRequest from "./http_request";

// fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/user`)
export default class ApiRequest {
  private http_handler: HttpRequest;
  constructor(baseUrl: string) {
    this.http_handler = new HttpRequest(baseUrl);
  }

  // USERS
  public async GetUsers(id?: number): Promise<any> {
    const endpoint = "/user/" + (id !== undefined ? `${id}` : ``);
    return this.http_handler.Get(endpoint);
  }

  public async PostUsers(
    name: string,
    bio: string,
    image: string
  ): Promise<any> {
    const endpoint = `/user`;
    const body = { name, bio, image };
    return this.http_handler.Post(endpoint, body);
  }

  public async PutUsers(
    id: number,
    name: string,
    bio: string,
    image: string
  ): Promise<any> {
    const endpoint = `/user/${id}`;
    const body = { name, bio, image };
    return this.http_handler.Put(endpoint, body);
  }

  public async DeleteUsers(id: number): Promise<any> {
    const endpoint = `/user/${id}`;
    return this.http_handler.Delete(endpoint);
  }

  public async GetUsersLikes(id: number): Promise<any> {
    const endpoint = `/user/${id}/likes`;
    return this.http_handler.Get(endpoint);
  }

  public async GetUsersFollowers(id: number): Promise<any> {
    const endpoint = `/user/${id}/follower`;
    return this.http_handler.Get(endpoint);
  }

  public async GetUsersFollowees(id: number): Promise<any> {
    const endpoint = `/user/${id}/followee`;
    return this.http_handler.Get(endpoint);
  }

  // FOLLOWERS
  public async GetFollowers(id?: number): Promise<any> {
    const endpoint = "/follower/" + (id !== undefined ? `${id}` : ``);
    return this.http_handler.Get(endpoint);
  }

  public async PostFollowers(
    follower_id: string,
    followee_id: string
  ): Promise<any> {
    const endpoint = `/follower`;
    const body = { follower_id, followee_id };
    return this.http_handler.Post(endpoint, body);
  }

  public async PutFollowers(
    id: number,
    follower_id: string,
    followee_id: string
  ): Promise<any> {
    const endpoint = `/follower/${id}`;
    const body = { follower_id, followee_id };
    return this.http_handler.Put(endpoint, body);
  }

  public async DeleteFollowers(id: number): Promise<any> {
    const endpoint = `/follower/${id}`;
    return this.http_handler.Delete(endpoint);
  }

  // POSTS
  public async GetPosts(id?: number): Promise<any> {
    const endpoint = "/post/" + (id !== undefined ? `${id}` : ``);
    return this.http_handler.Get(endpoint);
  }

  public async PostPosts(user_id: number, content: string): Promise<any> {
    const endpoint = `/post`;
    const body = { user_id, content };
    return this.http_handler.Post(endpoint, body);
  }

  public async PutPosts(
    id: number,
    user_id: number,
    content: string
  ): Promise<any> {
    const endpoint = `/post/${id}`;
    const body = { user_id, content };
    return this.http_handler.Put(endpoint, body);
  }

  public async DeletePosts(id: number): Promise<any> {
    const endpoint = `/post/${id}`;
    return this.http_handler.Delete(endpoint);
  }

  public async GetPostsLikers(id: number): Promise<any> {
    const endpoint = `/post/${id}/likers`;
    return this.http_handler.Get(endpoint);
  }

  // LIKES
  public async GetLikes(id?: number): Promise<any> {
    const endpoint = "/like/" + (id !== undefined ? `${id}` : ``);
    return this.http_handler.Get(endpoint);
  }

  public async PostLikes(user_id: number, post_id: string): Promise<any> {
    const endpoint = `/like`;
    const body = { user_id, post_id };
    return this.http_handler.Post(endpoint, body);
  }

  public async PutLikes(
    id: number,
    user_id: number,
    post_id: string
  ): Promise<any> {
    const endpoint = `/like/${id}`;
    const body = { user_id, post_id };
    return this.http_handler.Put(endpoint, body);
  }

  public async DeleteLikes(id: number): Promise<any> {
    const endpoint = `/like/${id}`;
    return this.http_handler.Delete(endpoint);
  }
}
