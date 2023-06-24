import 'bootstrap/dist/css/bootstrap.min.css';
import Thumbnail from './Thumbnail';
function App() {
  return (
    <div className="App " >
      <div className="container">
        <div class="row">
            <Thumbnail src="https://picsum.photos/400/300" header="first" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora porro." />
            <Thumbnail src="https://picsum.photos/401/301" header="second" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora porro." />
            <Thumbnail src="https://picsum.photos/402/302" header="third" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora porro." />
            <Thumbnail src="https://picsum.photos/403/303" header="fourth" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora porro." />
            <Thumbnail src="https://picsum.photos/404/304" header="fifth" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora porro." />
            <Thumbnail src="https://picsum.photos/405/305" header="sixth" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora porro." />
            <Thumbnail src="https://picsum.photos/406/306" header="seventh" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora porro." />
            <Thumbnail src="https://picsum.photos/407/307" header="eighth" des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora porro." />
        </div>
      </div>
    </div>
  );
}

export default App;
