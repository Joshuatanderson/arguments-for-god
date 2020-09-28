import { createContext } from "react";
import {db} from "./firebaseConfig";

export default createContext(db);
