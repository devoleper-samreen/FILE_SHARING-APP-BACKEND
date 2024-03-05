import File from "./model.js";

export const uploadImage = async (req, res) => {
  const fileobj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileobj);
    res
      .status(200)
      .json({
        msg: "file mil gayi",
        path: `http://localhost:4000/file/${file._id}`,
      });
    console.log("path:", `http://localhost:4000/file/${file._id}`);
  } catch (error) {
    console.log(error, "err aa raha hain");
  }
};

export const downloadImage = async (req, res) => {
  try {
    const fileId = req.params.fileId;
    const file = await File.findById(fileId);

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    await file.save();
    res.download(file.path, file.name);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
