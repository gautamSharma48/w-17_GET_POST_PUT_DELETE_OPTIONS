const EmpSchema = require("../model/employeeSchema");

const getUser = async (req, res) => {
  const users = await EmpSchema.find();
  res.send(users);
};

const createUser = async (req, res) => {
  const { name, profile, address, email } = req.body;
  if (!name || !profile || !address)
    return res.status(400).json({ msg: "please provide data" });

  try {
    const alreadyExist = await EmpSchema.findOne({ email: email });
    if (alreadyExist)
      return res.status(400).json({ msg: "user already exist" });

    const emp = new EmpSchema({
      name: name,
      profile: profile,
      address: address,
      email: email,
    });

    const result = await emp.save();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!id) return res.status(400).json({ msg: "please provide id" });
    const userExist = await EmpSchema.findById(id);
    if (!userExist) return res.status(400).json({ msg: "user not exist" });
    const updateUser= await EmpSchema.findByIdAndUpdate(id , updateData, {new:true});
    res.status(200).json({msg:"successfully updated user",updateUser});
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ msg: "please provide id" });
    const emp = await EmpSchema.findByIdAndDelete(id);
    if (!emp) return res.status(400).json({ msg: "employee is not exist" });
    res.status(200).json({ msg: "employee successfully removed", emp });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
