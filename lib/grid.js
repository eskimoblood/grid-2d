function Grid(width, height, wrapped) {
  this.a = [];
  this.width = width;
  this.height = height;
  this.wrapped = wrapped;

}
Grid.prototype = {
  push: function(value) {
    this.a.push(value);
  },

  at: function(column, row) {
    return this.a[row * this.width + column];
  },

  atTop: function(column, row) {

    if (!row) {
      if (this.wrapped) {
        row = this.height;
      }
      else {
        return;
      }
    }
    return this.at(column, row - 1);
  },

  atBottom: function(column, row) {
    if (row > this.height - 2) {
      if (this.wrapped) {
        row = -1;
      }
      else {
        return;
      }
    }
    return this.at(column, row + 1);
  },

  atLeft: function(column, row) {
    if (!column) {
      if (this.wrapped) {
        column = this.width;
      } else {
        return;
      }
    }
    return this.at(column - 1, row);
  },

  atRight: function(column, row) {
    if (column > this.width - 2) {
      if (this.wrapped) {
        column = -1;
      }
      else {
        return;
      }
    }
    return this.at(column + 1, row);
  }

};
