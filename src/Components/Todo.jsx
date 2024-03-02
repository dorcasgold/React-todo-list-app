import PropTypes from 'prop-types';

function Todo({ todo, onDelete }) {
  return (
    <div className="content">
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Todo