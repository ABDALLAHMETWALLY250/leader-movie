export const useWatchList = defineStore("watchLater", {
  state: () => ({
    list: [],
  }),
  actions: {
    addToList(item: Array<object>) {
      let exist = false;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id === item.id) {
          exist = true;
          break;
        }
      }

      if (!exist) {
        this.list.push(item);
        localStorage.setItem("watchLater", JSON.stringify(this.list));
      } else {
        // remove this item from list
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i]?.id === item?.id) {
            this.list.splice(i, 1);
            break;
          }
        }
        localStorage.setItem("watchLater", JSON.stringify(this.list));
      }
    },
    DeleteAll() {
      this.list = [];
      localStorage.removeItem("watchList");
    },
  },
});
