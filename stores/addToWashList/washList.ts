import Swal from "sweetalert2";

export const useWashList = defineStore("washList", {
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
        localStorage.setItem("washList", JSON.stringify(this.list));
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Added to list",
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
        localStorage.setItem("washList", JSON.stringify(this.list));
      }
    },
    DeleteAll() {
      this.list = [];
      localStorage.removeItem("washList");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "All items removed from list",
        timer: 2000,
              showConfirmButton: false,
      });
    },
  },
});
