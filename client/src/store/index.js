// Why Zustand? Zustand is a simple and fast state management solution that allows us to manage the state of our application in a more efficient way. It is a small library that provides a simple and easy-to-use API for managing the state of our application. It is also very fast and efficient, which makes it a great choice for managing the state of our application.

import { create } from "zustand";
import { createAuthSlice } from "./slices/auth-slice";

export const useAppStore = create()((...a) => ({
    ...createAuthSlice(...a),
}));