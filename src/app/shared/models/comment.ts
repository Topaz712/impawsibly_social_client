export class Comment {
  id: number;
  content: string;
  user_id: number;

  constructor(comment: any) {
    this.id = comment.id || 0;
    this.content = comment.content || '';
    this.user_id = comment.user_id || 0;
  }
}
