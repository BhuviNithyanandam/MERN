import UseStateDemo from '../Components/Hooks/useStateDemo/ UseStateDemo';
import ReRenderDemo from '../Components/Hooks/ReRenderDemo/ReRenderDemo';
import UseEffectWithoutDeps from '../Components/Hooks/UseEffectWithoutDeps/UseEffectWithoutDeps';
import UseEffectWithDeps from '../Components/Hooks/UseEffectWithDeps/UseEffectWithDeps';
import UseRef from '../Components/Hooks/UseRef/UseRef';

const StateEffects = () => (
  <div>
    <h2>Hooks - State, useEffect, useRef Demo</h2>
    <UseStateDemo />
    <ReRenderDemo />
    <UseEffectWithoutDeps />
    <UseEffectWithDeps />
    <UseRef />
  </div>
);

export default StateEffects;
