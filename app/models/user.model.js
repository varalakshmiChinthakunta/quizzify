module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        role: String,
        password: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("Users", schema);
    return User;
  };
  