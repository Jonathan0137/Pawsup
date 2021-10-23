import React from "react";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './CommentSection.css'
const CommentSection = ({comments}) => {
  return (
    <Comment.Group size='large'>
        <Header as='h1' dividing>
            Comments
        </Header>

        {comments && comments.map((comment, i) =>
            <Comment>
                <Comment.Avatar src={comment.CommentAuthorProfilePicURL} />
                <Comment.Content>
                    <Comment.Author as='a'>{comment.CommentAuthorName}</Comment.Author>
                    <Comment.Metadata>
                        <div>{comment.CommentTime}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>{comment.CommentDetail}</p>
                    </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>       
                {comment.CommentReplies && comment.CommentReplies.map((replies, i) =>
                    <Comment.Group>
                    <Comment>
                        <Comment.Avatar src={replies.replyAvatarURL} />
                        <Comment.Content>
                            <Comment.Author as='a'>{replies.replyUserName}</Comment.Author>
                            <Comment.Metadata>
                                <div>{replies.replyTime}</div>
                            </Comment.Metadata>
                            <Comment.Text>{replies.replyDetail}</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
                )}
            </Comment>
        )}



        <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
    </Comment.Group>
  );
};

export default CommentSection;
