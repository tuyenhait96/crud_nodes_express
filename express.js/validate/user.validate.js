module.exports.postCreate = function (req, res, next) {
  let errors = [];
  if (!req.body.name) {
    errors.push("Name is required");
  }

  if (!req.body.phone) {
    errors.push("Phone is required");
  }

  if (errors.length) {
    //renderlai, va van con giu gia tri nen them values
    res.render("UserList/create", {
      errors: errors,
      // tat ca cac bien nguoi dung gui len
      values: req.body,
    });
    return;
  }
  res.locals.success = true;
  next();
};
