export default class Table {
  constructor(element, data) {
    this._element = element;
    this.headId = document.querySelector(".id");
    this.headTitle = document.querySelector(".title");
    this.headYear = document.querySelector(".year");
    this.headImdb = document.querySelector(".imdb");
    this.arrow = document.createElement("span");
    this.arrow.classList.add('arrow');
    this.data = data;
  }

  createTable() {
    for (let el of this.data) {
      let tr = document.createElement("tr");
      tr.classList.add('row');
      let tdId = document.createElement("td");
      let tdTitle = document.createElement("td");
      let tdYear = document.createElement("td");
      let tdImdb = document.createElement("td");
      tdId.textContent = el.id;
      tdTitle.textContent = el.title;
      tdYear.textContent = `(${el.year})`;
      tdImdb.textContent = `imdb: ${el.imdb.toFixed(2)}`;;
      tr.appendChild(tdId);
      tr.appendChild(tdTitle);
      tr.appendChild(tdYear);
      tr.appendChild(tdImdb);
      this._element.appendChild(tr);
    }
  }

  deleteTable() {
    const rows = Array.from(document.querySelectorAll(".row"));
    if (rows.length > 0) {
      rows.map((row) => {
        row.remove();
      });
    }
  }

  sortData(order) {
    switch(order) {
      case 1:
        this.data.sort(function (a, b) {
          return a.id - b.id;
        });
        this.arrow.textContent = '\u2193';
        this.headId.appendChild(this.arrow);
        break;
      case 2:
        this.data.sort(function (a, b) {
          return b.id - a.id;
        });
        this.arrow.textContent = '\u2191';
        this.headId.appendChild(this.arrow);
        break;
      case 3:
        this.data.sort(function (a, b) {
          if (a.title > b.title) {
            return 1;
          }
          if (b.title > a.title) {
            return -1;
          }
          return 0;
        });
        this.arrow.textContent = '\u2193';
        this.headTitle.appendChild(this.arrow);
        break;
      case 4:
        this.data.sort(function (a, b) {
          if (a.title > b.title) {
            return -1;
          }
          if (b.title > a.title) {
            return 1;
          }
          return 0;
        });
        this.arrow.textContent = '\u2191';
        this.headTitle.appendChild(this.arrow);
        break;
      case 5:
        this.data.sort(function (a, b) {
          return a.year - b.year;
        });
        this.arrow.textContent = '\u2193';
        this.headYear.appendChild(this.arrow);
        break;
      case 6:
        this.data.sort(function (a, b) {
          return b.year - a.year;
        });
        this.arrow.textContent = '\u2191';
        this.headYear.appendChild(this.arrow);
        break;
      case 7:
        this.data.sort(function (a, b) {
          return a.imdb - b.imdb;
        });
        this.arrow.textContent = '\u2193';
        this.headImdb.appendChild(this.arrow);
        break;
      case 8:
        this.data.sort(function (a, b) {
          return b.imdb - a.imdb;
        });
        this.arrow.textContent = '\u2191';
        this.headImdb.appendChild(this.arrow);
        break;
    }
    this.deleteTable();
    this.createTable();
  }
}
