import { Flux } from "flummox";
import PostStore from "./stores/PostStore";
import PostActions from "./actions/PostActions";

class AppFlux extends Flux {
  constructor() {
    super();
    this.createActions("posts", PostActions);
    this.createStore("posts", PostStore, this);
  }
}

export default AppFlux;
