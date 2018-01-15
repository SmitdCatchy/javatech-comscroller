export class User {
  id: number;
  username: string;
  nickname: string;
  role: string;
  completedGames: string[];

  constructor(
     _id: number, _username: string, _nickname: string,
     _role: string, _completedGames: string[]
   ) {
    this.id = _id;
    this.username = _username;
    this.nickname = _nickname;
    this.role = _role;
    this.completedGames = _completedGames;
  }
}
