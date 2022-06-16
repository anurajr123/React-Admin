import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostEdit } from './Component/posts';
import { UserList } from './Component/users';
import { ShowList } from './Component/ShowList';
import { CommentList } from './Component/Comments';
import { PageLayout } from './Component/Layout/PageLayout';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider} layout= {PageLayout} >
        <Resource name='users'  list={UserList} show={ShowList}/>
        <Resource name='comments' edit={PostEdit} list={CommentList}/>
        <Resource name='posts' edit={PostEdit} list={ListGuesser}  />
      </Admin>
    </div>
  );
}

export default App;
