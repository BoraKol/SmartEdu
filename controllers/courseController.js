const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);

  try {
    res.status(201).json({
      // oluşturulan kursu json dosyası olarak yazdırdık
      status: "success",
      course,
    });
    
  } catch {
    res.status(400).json({ // Bad request hatası gönderdik
      status: "fail",
      error,
    });
  }
};
