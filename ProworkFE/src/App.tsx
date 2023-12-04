
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Router/mainRouter";
import { Provider } from "react-redux";
import { Store } from "./Global/Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";



function App() {
  const persistor = persistStore(Store)
  let client = new QueryClient()
  return (
    <div>

      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={client}>
            <RouterProvider router={mainRouter} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>

        </PersistGate>
      </Provider>

    </div>
  )
};

export default App;
