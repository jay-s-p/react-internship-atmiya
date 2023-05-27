import TodoAppContainer from './pages/TodoAppContainer'
import TodoApp from './pages/TodoApp'


const index = props => {
  return (
    <>
      <TodoAppContainer>
        <TodoApp {...props} />
      </TodoAppContainer>
    </>
  );
};

export default index;