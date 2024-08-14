import Swal from "sweetalert2";

export const useWatchList = defineStore("watchLater", {
  state: () => ({
    list: [],
  }),
  actions: {
    addToList(item: Array<object>, message: string) {
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
        Swal.fire({
          icon: "success",
          title: message,

          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        // remove this item from list
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i]?.id === item?.id) {
            this.list.splice(i, 1);
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Removed from list",
              timer: 2000,
              showConfirmButton: false,
            });
            break;
          }
        }
        localStorage.setItem("watchLater", JSON.stringify(this.list));
      }
    },
    DeleteAll(message: string) {
      this.list = [];
      localStorage.removeItem("watchLater");
      Swal.fire({
        icon: "success",

        title: message,
        timer: 2000,
        showConfirmButton: false,
      });
    },
  },
});
