const customerModel = require("../../models/customer");
exports.update = async (req, res) => {
    try {
        const { body } = req;
        const customerByPhone = await customerModel.findOne({ phone: body.phone });
        if (
            customerByPhone &&
            customerByPhone.email !== body.email
        ) return res.status(401).json("Phone Number Exists");
        await customerModel.updateOne(
            { email: body.email },
            {
                $set: {
                    fullName: body.fullName,
                    phone: body.phone,
                    address: body.address,
                }
            }
        );
        return res.status(200).json("Update Customer Successfully")
    } catch (error) {
        return res.status(500).json(error);
    }
}