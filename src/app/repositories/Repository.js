class Repository {
  constructor(schema) {
    this.schema = schema;
  }

  async create(payload) {
    return this.schema.create(payload);
  }

  async findAll() {
    return this.schema.find();
  }
}

module.exports = Repository;
