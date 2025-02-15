import { Suspense } from "react";
import FetchTodo from "./Components/FetchDataReact19/FetchTodo";
const App = () => {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <FetchTodo />
    </Suspense>
  );
};
export default App;
