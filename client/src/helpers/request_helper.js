const RequestHelper = function(url) {
  this.url = url;
};

//INDEX
RequestHelper.prototype.get = function() {
  return fetch(this.url).then(response => response.json());
};

//DELETE
RequestHelper.prototype.delete = function(id) {
  return fetch(`${this.url}/${id}`, {
    method: "DELETE"
  }).then(response => response.json());
};

//CREATE
RequestHelper.prototype.post = function(payload) {
  return fetch(`${this.url}/`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
};

//UPDATE
RequestHelper.prototype.put = function(id, payload) {
  return fetch(`${this.url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
};

module.exports = RequestHelper;
