import './App.css';
import JSXComponentsDemo from './Components/JSXComponentsPropsDemo/JSXComponentsPropsDemo';
import FoodGallery from './Components/FoodGallery';
import BasicEventDemo from './Components/BasicEventHandling/BasicEventDemo';
import UseStateDemo from './Components/Hooks/useStateDemo/ UseStateDemo';
import ReRenderDemo from './Components/Hooks/ReRenderDemo/ReRenderDemo';
import UseEffectWithoutDeps from './Components/Hooks/UseEffectWithoutDeps/UseEffectWithoutDeps';
import UseEffectWithDeps from './Components/Hooks/UseEffectWithDeps/UseEffectWithDeps';
import UseRef from './Components/Hooks/UseRef/UseRef';
import ModalLauncher from './Components/TwoStepModal/ModalLauncher';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">React Demo Showcase</h1>
      <JSXComponentsDemo />
      <FoodGallery />
      <BasicEventDemo />
      <UseStateDemo />
      <ReRenderDemo />
      <UseEffectWithoutDeps />
      <UseEffectWithDeps />
      <UseRef />
      <ModalLauncher />
    </div>
  );
};

export default App;
