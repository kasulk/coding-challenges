export class PaginationHelper {
  collection: any[];
  itemsPerPage: number;

  constructor(collection: any[], itemsPerPage: number) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex: number) {
    const numItems = this.itemCount();
    const numPages = this.pageCount();
    const { itemsPerPage } = this;
    const pageNum = pageIndex + 1;
    if (pageNum === numPages) return numItems % itemsPerPage || itemsPerPage;
    if (pageNum > numPages || pageIndex < 0) return -1;
    return itemsPerPage;
  }
  pageIndex(itemIndex: number) {
    const numItems = this.itemCount();
    if (itemIndex + 1 > numItems || itemIndex < 0) return -1;
    return Math.trunc(itemIndex / this.itemsPerPage);
  }
}
