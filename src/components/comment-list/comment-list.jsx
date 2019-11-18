import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../comment-item/comment-item'

export default class CommentList extends Component {

  // 给组件类指定属性(参数)
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  }

  render () {

    const {comments, deleteComment} = this.props
    // 计算出是否隐藏
    const display = comments.length === 0 ? 'block' : 'none'
    return (
      <div className="col-md-8">
        <h3 className="replay">评论回复: </h3>
        <h2 style={{display}}>暂无评论, 点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <CommentItem comment={comment} key={index} deleteComment={deleteComment} index={index}/>)
          }
        </ul>
      </div>
    )
  }
}

// CommentList.propTypes = {
//   comments: propTypes.array.isRequired
// }