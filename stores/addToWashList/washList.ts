import Swal from "sweetalert2";

export const useWashList = defineStore("washList", {
  state: () => ({
    list: [] as Array<any>,
  }),
  actions: {
    addToList(item: Array<any>, message: string) {
      let exist: boolean = false;
      for (let i: number = 0; i < this.list.length; i++) {
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
          title: message,

          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        // remove this item from list
        for (let i: number = 0; i < this.list.length; i++) {
          if (this.list[i]?.id === item?.id) {
            this.list.splice(i, 1);
            Swal.fire({
              icon: "success",
              title: "Success Removed from list",

              timer: 2000,
              showConfirmButton: false,
            });
            break;
          }
        }
        localStorage.setItem("washList", JSON.stringify(this.list));
      }
    },
    DeleteAll(message: string) {
      this.list = [];
      localStorage.removeItem("washList");
      Swal.fire({
        icon: "success",
        title: message,
        timer: 2000,
        showConfirmButton: false,
      });
    },
  },
});
