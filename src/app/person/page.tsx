"use client";

import { Provider } from "react-redux";

//utils
import store from "@/utils/redux/store";

//components
import PersonPage from "@/components/pages/PersonPage";

export default function Person() {
  return (
    <Provider store={store}>
      <PersonPage />
    </Provider>
  );
}
