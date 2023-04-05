import moment from 'moment';
import { rest } from 'msw';
import { v4 as uuid } from 'uuid';

const COMMENTS = [
  {
    id: '1',
    document:
      '[{"children":[{"text":"Bhow "},{"text":"wfewe","bold":true},{"text":" wewefdf"}],"type":"p"}]',
    created_at: 1644488806000,
    updated_at: 1644488816000,
    username: 'Siddhant',
    isowner: true,
  },
  {
    id: '2',
    document:
      '[{"children":[{"text":"Meow "},{"text":"wfewe","bold":true},{"text":" wewefdf"}],"type":"p"}]',
    created_at: 1673346416000,
    updated_at: 1673346416000,
    username: 'Michael',
    isowner: false,
  },
  {
    id: '3',
    document:
      '[{"children":[{"text":"Psss "},{"text":"wfewe","bold":true},{"text":" wewefdf"}],"type":"p"}]',
    created_at: 1676006816000,
    updated_at: 1676006815000,
    username: 'Ryan',
    isowner: false,
  },
];

let LAST_SEEN = 1644488807000;

export const CommentHandlers = [
  rest.post(
    'http://localhost:4200/demo/channels/:channelId/comments/:deeplink',
    (req, res, context) => {
      const { document } = req.body;
      const comment_id = uuid();
      const new_comment = {
        id: comment_id,
        document,
        created_at: Date.now(),
        updated_at: Date.now(),
        username: 'Ryan',
        isowner: true,
      };
      COMMENTS.push(new_comment);

      return res(
        context.delay(1000),
        context.status(200),
        context.json({ comment_id })
      );
    }
  ),
  rest.get(
    'http://localhost:4200/demo/channels/:channelId/comments/:deeplink',
    (req, res, context) => {
      return res(
        context.delay(1000),
        context.status(200),
        context.json({ comments: COMMENTS })
      );
    }
  ),
  rest.get(
    'http://localhost:4200/demo/channels/:channelId/comments/:deeplink/count',
    (req, res, context) => {
      const { commentId } = req.params;
      const unread_comments = COMMENTS.filter(
        (comment) => comment.created_at < LAST_SEEN
      ).length;
      return res(
        context.delay(1000),
        context.status(200),
        context.json({
          results: {
            count: unread_comments,
          },
        })
      );
    }
  ),
  rest.put(
    'http://localhost:4200/demo/channels/:channelId/comments/:deeplink/last_seen',
    (req, res, context) => {
      LAST_SEEN = moment().unix();
      return res(
        context.delay(1000),
        context.status(200),
        context.json({ message: 'Updated timestamp' })
      );
    }
  ),
  rest.put(
    'http://localhost:4200/demo/channels/:channelId/comments/:deeplink/:commentId',
    (req, res, context) => {
      const { commentId } = req.params;
      const { document } = req.body;
      const index = COMMENTS.findIndex((comment) => comment.id === commentId);
      COMMENTS[index] = {
        ...COMMENTS[index],
        document,
      };
      return res(
        context.delay(1000),
        context.status(200),
        context.json({ commentId })
      );
    }
  ),
  rest.delete(
    'http://localhost:4200/demo/channels/:channelId/comments/:deeplink/:commentId',
    (req, res, context) => {
      const { commentId } = req.params;
      const index = COMMENTS.findIndex((comment) => comment.id === commentId);
      COMMENTS.splice(index, 1);
      return res(
        context.delay(1000),
        context.status(200),
        context.json({ commentId })
      );
    }
  ),
];
